// Achievement System - Tracks and manages achievements

import { ACHIEVEMENTS } from '../utils/Constants.js';

export class AchievementSystem {
  constructor(player) {
    this.player = player;
    this.achievements = ACHIEVEMENTS;
    this.unlockedAchievements = [];
    this.pendingNotifications = [];
  }

  checkAchievements() {
    // Achievement checks
    this.checkMoneyMilestones();
    this.checkTradeAchievements();
    this.checkBusinessAchievements();
    this.checkSkillAchievements();
    this.checkLocationAchievements();
  }

  checkMoneyMilestones() {
    const milestones = [
      { amount: 1, id: 2 },
      { amount: 100, id: 'milestone_100' },
      { amount: 1000, id: 'milestone_1000' },
      { amount: 1000000, id: 8 },
    ];

    milestones.forEach(m => {
      if (this.player.money >= m.amount && !this.player.hasAchievement(m.id)) {
        this.unlockAchievement(m.id);
      }
    });
  }

  checkTradeAchievements() {
    // Check if player has completed trades
    if (this.player.inventory.length >= 10 && !this.player.hasAchievement(5)) {
      this.unlockAchievement(5);
    }
  }

  checkBusinessAchievements() {
    if (this.player.businesses.length >= 1 && !this.player.hasAchievement(3)) {
      this.unlockAchievement(3);
    }
  }

  checkSkillAchievements() {
    // Check skill levels
    Object.values(this.player.skills).forEach(skill => {
      if (skill.level >= 10 && !this.player.hasAchievement(6)) {
        this.unlockAchievement(6);
      }
    });
  }

  checkLocationAchievements() {
    if (this.player.unlockedLocations.size >= 7 && !this.player.hasAchievement(7)) {
      this.unlockAchievement(7);
    }
  }

  unlockAchievement(achievementId) {
    if (!this.player.hasAchievement(achievementId)) {
      this.player.unlockAchievement(achievementId);
      const achievement = this.achievements.find(a => a.id === achievementId);
      if (achievement) {
        this.pendingNotifications.push(achievement);
      }
    }
  }

  getPendingNotifications() {
    const notifications = [...this.pendingNotifications];
    this.pendingNotifications = [];
    return notifications;
  }
}
