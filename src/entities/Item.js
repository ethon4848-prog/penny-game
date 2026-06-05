// Item Class - Represents tradeable items

export class Item {
  constructor(id, name, basePrice, rarity = 'common') {
    this.id = id;
    this.name = name;
    this.basePrice = basePrice;
    this.rarity = rarity; // common, uncommon, rare, legendary
    this.quantity = 1;
    this.currentPrice = basePrice;
    this.demand = 1.0;
    this.supply = 1.0;
    this.description = '';
  }

  calculatePrice() {
    // Price affected by supply and demand
    const demandMultiplier = 1 + (this.demand - this.supply) * 0.1;
    this.currentPrice = Math.max(0.01, this.basePrice * demandMultiplier);
    return this.currentPrice;
  }

  setDemand(demand) {
    this.demand = Math.max(0, demand);
    this.calculatePrice();
  }

  setSupply(supply) {
    this.supply = Math.max(0, supply);
    this.calculatePrice();
  }

  addQuantity(amount) {
    this.quantity += amount;
  }

  removeQuantity(amount) {
    this.quantity = Math.max(0, this.quantity - amount);
  }
}

// Item Database
export const ITEMS_DATABASE = {
  PENNY: new Item('penny', 'Penny', 0.01, 'common'),
  APPLE: new Item('apple', 'Apple', 0.50, 'common'),
  FISH: new Item('fish', 'Fish', 2.00, 'common'),
  WOOD: new Item('wood', 'Wood', 1.50, 'common'),
  STONE: new Item('stone', 'Stone', 1.00, 'common'),
  FOOTBALL: new Item('football', 'Football', 25.00, 'uncommon'),
  SKATEBOARD: new Item('skateboard', 'Skateboard', 40.00, 'uncommon'),
  GUITAR: new Item('guitar', 'Guitar', 150.00, 'uncommon'),
  PAINTING: new Item('painting', 'Painting', 500.00, 'rare'),
  BICYCLE: new Item('bicycle', 'Bicycle', 200.00, 'uncommon'),
};
