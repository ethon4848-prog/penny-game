// Skill System - Manages player skill progression and training

import { SKILLS } from '../utils/Constants.js';

export class SkillSystem {
  constructor(player) {
    this.player = player;
    this.trainingLocations = new Map();
    this.initializeTrainingLocations();
  }

  initializeTrainingLocations() {
    this.trainingLocations.set('acrobatics', {
      name: 'Gymnastics Gym',
      skill: 'acrobatics',
      xpPerMinute: 50,
      cost: 10,
    });
    this.trainingLocations.set('crafting', {
      name: 'Crafting Station',
      skill: 'crafting',
      xpPerMinute: 40,
      cost: 5,
    });
    this.trainingLocations.set('fishing', {
      name: 'Fishing Spot',
      skill: 'fishing',
      xpPerMinute: 35,
      cost: 0,
    });
    this.trainingLocations.set('athletics', {
      name: 'Training Track',
      skill: 'athletics',
      xpPerMinute: 45,
      cost: 8,
    });
  }

  canPerformAction(skillName, requiredLevel) {
    const skill = this.player.skills[skillName];
    return skill && skill.level >= requiredLevel;
  }

  trainSkill(skillName, duration) {
    // duration in milliseconds
    const durationMinutes = duration / 60000;
    const training = this.trainingLocations.get(skillName);
    
    if (!training) return false;

    const xpGain = training.xpPerMinute * durationMinutes;
    const levelUp = this.player.addSkillXP(skillName, xpGain);
    
    return { xpGain, levelUp, newLevel: this.player.skills[skillName].level };
  }

  getSkillInfo(skillName) {
    const skill = this.player.skills[skillName];
    if (!skill) return null;

    const nextLevelXP = skill.level * 1000 + 1000;
    const progress = (skill.xp / nextLevelXP) * 100;

    return {
      name: skillName,
      level: skill.level,
      xp: skill.xp,
      nextLevelXP,
      progress,
    };
  }

  canAffordTraining(skillName) {
    const training = this.trainingLocations.get(skillName);
    if (!training) return false;
    return this.player.money >= training.cost;
  }
}
