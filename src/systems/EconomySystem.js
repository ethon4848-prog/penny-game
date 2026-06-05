// Economy System - Manages trading, pricing, and auctions

import { ITEMS_DATABASE } from '../entities/Item.js';

export class EconomySystem {
  constructor() {
    this.items = { ...ITEMS_DATABASE };
    this.marketHistory = [];
    this.auctions = [];
    this.trades = [];
  }

  calculateItemPrice(itemId, demandLevel = 1.0) {
    const item = this.items[itemId];
    if (!item) return 0;
    
    const variance = (Math.random() - 0.5) * 0.2 * item.basePrice;
    const demandMultiplier = 1 + (demandLevel - 1) * 0.15;
    
    return Math.max(0.01, item.basePrice * demandMultiplier + variance);
  }

  attemptTrade(player, npc, playerItem, npcItem) {
    const tradeResult = {
      success: false,
      reason: '',
      playerGains: null,
      playerLoses: null,
    };

    // Check if player has the item
    if (!player.inventory.find(i => i.id === playerItem.id)) {
      tradeResult.reason = 'Player does not have this item';
      return tradeResult;
    }

    // Calculate prices
    const playerItemPrice = this.calculateItemPrice(playerItem.id);
    const npcItemPrice = this.calculateItemPrice(npcItem.id);

    // Check NPC relationship and personality
    const acceptChance = npc.relationship + (npcItemPrice - playerItemPrice) * 0.05;
    
    if (Math.random() * 100 < acceptChance) {
      tradeResult.success = true;
      tradeResult.playerGains = npcItem;
      tradeResult.playerLoses = playerItem;
      this.recordTrade(player, npc, playerItem, npcItem);
    } else {
      tradeResult.reason = npc.personality === 'grumpy' ? 'Not interested!' : 'The trade doesn\'t seem fair to me';
    }

    return tradeResult;
  }

  createAuction(itemId, seller, startingPrice, duration) {
    const auction = {
      id: Math.random().toString(36).substr(2, 9),
      itemId,
      seller,
      startingPrice,
      currentBid: startingPrice,
      highestBidder: null,
      bids: [],
      duration,
      createdAt: Date.now(),
      endTime: Date.now() + duration,
    };
    this.auctions.push(auction);
    return auction;
  }

  placeBid(auctionId, bidder, amount) {
    const auction = this.auctions.find(a => a.id === auctionId);
    if (!auction) return false;

    if (Date.now() > auction.endTime) {
      return false; // Auction ended
    }

    if (amount <= auction.currentBid) {
      return false; // Bid too low
    }

    auction.bids.push({
      bidder,
      amount,
      timestamp: Date.now(),
    });
    auction.currentBid = amount;
    auction.highestBidder = bidder;
    return true;
  }

  settleAuctions() {
    const now = Date.now();
    const completedAuctions = this.auctions.filter(a => now > a.endTime);
    
    completedAuctions.forEach(auction => {
      if (auction.highestBidder) {
        // Transfer item and money
        console.log(`Auction ${auction.id} won by ${auction.highestBidder} for $${auction.currentBid}`);
      }
    });

    this.auctions = this.auctions.filter(a => now <= a.endTime);
  }

  recordTrade(player, npc, playerItem, npcItem) {
    this.trades.push({
      player: player,
      npc: npc,
      playerItem: playerItem,
      npcItem: npcItem,
      timestamp: Date.now(),
    });
  }
}
