// Save System - Manages game saves with multiple slots

export class SaveSystem {
  constructor() {
    this.SAVE_KEY = 'penny_game_saves';
    this.MAX_SLOTS = 10;
    this.initializeSaves();
  }

  initializeSaves() {
    const saves = this.getAllSaves();
    if (!saves) {
      localStorage.setItem(this.SAVE_KEY, JSON.stringify({}));
    }
  }

  getAllSaves() {
    const data = localStorage.getItem(this.SAVE_KEY);
    return data ? JSON.parse(data) : {};
  }

  getSave(slot) {
    if (slot < 0 || slot >= this.MAX_SLOTS) return null;
    const saves = this.getAllSaves();
    return saves[`slot_${slot}`] || null;
  }

  savGame(slot, gameData) {
    if (slot < 0 || slot >= this.MAX_SLOTS) return false;
    
    const saves = this.getAllSaves();
    saves[`slot_${slot}`] = {
      data: gameData,
      timestamp: Date.now(),
      version: '1.0.0',
    };
    
    localStorage.setItem(this.SAVE_KEY, JSON.stringify(saves));
    return true;
  }

  deleteSave(slot) {
    if (slot < 0 || slot >= this.MAX_SLOTS) return false;
    
    const saves = this.getAllSaves();
    delete saves[`slot_${slot}`];
    localStorage.setItem(this.SAVE_KEY, JSON.stringify(saves));
    return true;
  }

  getSlotInfo(slot) {
    const save = this.getSave(slot);
    if (!save) return null;
    
    return {
      slot,
      timestamp: new Date(save.timestamp),
      money: save.data.player.money,
      location: save.data.currentLocation,
      playtime: save.data.playtime,
    };
  }

  getAllSlotsInfo() {
    const info = [];
    for (let i = 0; i < this.MAX_SLOTS; i++) {
      const slotInfo = this.getSlotInfo(i);
      if (slotInfo) {
        info.push(slotInfo);
      }
    }
    return info;
  }
}
