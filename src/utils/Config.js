// Game Configuration

export const CONFIG = {
  // Player Settings
  PLAYER: {
    SPEED: 150,
    SIZE: 16,
    SPAWN_X: 600,
    SPAWN_Y: 400,
  },

  // NPC Settings
  NPC: {
    SPEED: 80,
    SIZE: 16,
    INTERACTION_RANGE: 100,
  },

  // Economy Settings
  ECONOMY: {
    BASE_PRICE_VARIANCE: 0.2, // 20% variance
    DEMAND_MULTIPLIER: 0.1,
    PRICE_FLOOR: 0.01,
    PRICE_CEILING: 50000,
  },

  // Time Settings (in milliseconds)
  TIME: {
    DAY_DURATION: 1200000, // 20 minutes = 1 in-game day
    YEAR_DURATION: 1200000 * 360, // 360 in-game days
    TICK_INTERVAL: 100,
  },

  // Business Settings
  BUSINESS: {
    EMPLOYEE_SALARY_BASE: 100,
    HAPPINESS_DECAY: 0.1,
    HAPPINESS_SALARY_BONUS: 5,
  },

  // Skill Settings
  SKILL: {
    MAX_LEVEL: 100,
    XP_PER_LEVEL: 1000,
  },

  // World Settings
  WORLD: {
    CHUNK_SIZE: 512,
    MAX_NPCS: 50,
    MAX_ITEMS: 200,
  },
};
