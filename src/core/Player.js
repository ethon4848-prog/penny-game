// Player Class - Manages player character state and progression

import { STARTING_MONEY, SKILLS } from '../utils/Constants.js';

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.money = STARTING_MONEY;
    this.inventory = [];
    this.skills = {};
    this.achievements = new Set();
    this.businesses = [];
    this.unlockedLocations = new Set();
    this.currentLocation = 'FOREST';
    this.playtime = 0;
    this.noclipActive = false;
    this.noclipTimeRemaining = 0;

    // Initialize skills
    Object.values(SKILLS).forEach(skill => {
      this.skills[skill] = { level: 0, xp: 0 };
    });
  }

  addMoney(amount) {
    this.money += amount;
    this.money = Math.max(0, this.money);
  }

  removeMoney(amount) {
    if (this.money >= amount) {
      this.money -= amount;
      return true;
    }
    return false;
  }

  addItem(item) {
    this.inventory.push(item);
  }

  removeItem(itemId) {
    this.inventory = this.inventory.filter(item => item.id !== itemId);
  }

  addSkillXP(skillName, amount) {
    if (this.skills[skillName]) {
      this.skills[skillName].xp += amount;
      
      // Check for level up
      const levelUpXP = this.skills[skillName].level * 1000 + 1000;
      if (this.skills[skillName].xp >= levelUpXP) {
        this.skills[skillName].level++;
        this.skills[skillName].xp -= levelUpXP;
        return true; // Level up occurred
      }
    }
    return false;
  }

  unlockLocation(location) {
    this.unlockedLocations.add(location);
  }

  isLocationUnlocked(location) {
    return this.unlockedLocations.has(location);
  }

  startNoclip() {
    this.noclipActive = true;
    this.noclipTimeRemaining = 3000; // 3 seconds
  }

  updateNoclip(delta) {
    if (this.noclipActive) {
      this.noclipTimeRemaining -= delta;
      if (this.noclipTimeRemaining <= 0) {
        this.noclipActive = false;
        this.noclipTimeRemaining = 0;
      }
    }
  }

  unlockAchievement(achievementId) {
    this.achievements.add(achievementId);
  }

  hasAchievement(achievementId) {
    return this.achievements.has(achievementId);
  }

  createBusiness(businessType, name) {
    const business = {
      id: Math.random().toString(36).substr(2, 9),
      type: businessType,
      name: name,
      level: 1,
      money: 0,
      employees: [],
      reputation: 50,
      createdAt: Date.now(),
    };
    this.businesses.push(business);
    return business;
  }

  getGameState() {
    return {
      x: this.x,
      y: this.y,
      money: this.money,
      inventory: this.inventory,
      skills: this.skills,
      achievements: Array.from(this.achievements),
      businesses: this.businesses,
      unlockedLocations: Array.from(this.unlockedLocations),
      currentLocation: this.currentLocation,
      playtime: this.playtime,
    };
  }

  loadGameState(state) {
    this.x = state.x;
    this.y = state.y;
    this.money = state.money;
    this.inventory = state.inventory;
    this.skills = state.skills;
    this.achievements = new Set(state.achievements);
    this.businesses = state.businesses;
    this.unlockedLocations = new Set(state.unlockedLocations);
    this.currentLocation = state.currentLocation;
    this.playtime = state.playtime;
  }
}
