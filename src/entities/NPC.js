// NPC Class - Non-player characters with trading and interaction

import { randomInt, randomFloat } from '../utils/Helpers.js';

export class NPC {
  constructor(id, name, x, y, personality = 'neutral') {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.personality = personality; // friendly, neutral, grumpy, cheerful
    this.inventory = [];
    this.wantedItems = [];
    this.offeringItems = [];
    this.relationship = 50; // 0-100
    this.visited = false;
    this.dialogueOptions = [];
  }

  interact(player) {
    // Modify relationship based on player action
    return {
      npcName: this.name,
      personality: this.personality,
      relationship: this.relationship,
      inventory: this.inventory,
    };
  }

  trade(playerItem, npcItem) {
    const acceptTrade = this.relationship > randomInt(0, 100);
    return acceptTrade;
  }

  updateRelationship(delta) {
    // Relationship naturally decays over time
    this.relationship = Math.max(0, this.relationship - delta * 0.01);
  }

  getDialogueOptions() {
    const options = [];
    
    if (this.personality === 'friendly') {
      options.push('Hey there! How can I help?');
      options.push('Looking for anything specific?');
    } else if (this.personality === 'grumpy') {
      options.push('What do you want?');
      options.push('Make it quick.');
    } else {
      options.push('Hi. What\'s up?');
      options.push('Need something?');
    }
    
    return options;
  }

  reactToDialogue(response, playerPersonality) {
    let relationshipChange = 0;
    
    if (playerPersonality === 'rude') {
      relationshipChange = -10;
    } else if (playerPersonality === 'friendly') {
      relationshipChange = +5;
    }
    
    this.relationship = Math.max(0, Math.min(100, this.relationship + relationshipChange));
    return relationshipChange;
  }
}

// NPC Database
export const NPCS_DATABASE = [
  { id: 'npc_1', name: 'Old Trader', personality: 'neutral', items: ['football', 'wood'] },
  { id: 'npc_2', name: 'Friendly Farmer', personality: 'friendly', items: ['apple', 'fish'] },
  { id: 'npc_3', name: 'Grumpy Shopkeeper', personality: 'grumpy', items: ['bicycle', 'guitar'] },
  { id: 'npc_4', name: 'Young Artist', personality: 'cheerful', items: ['painting', 'stone'] },
];
