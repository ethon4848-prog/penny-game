// Game Constants
export const GAME_CONFIG = {
  WIDTH: 1200,
  HEIGHT: 800,
  TILE_SIZE: 32,
  FPS: 60,
};

export const STARTING_MONEY = 0.01; // 1 penny
export const PS6_PRICE = 12000;

export const LOCATIONS = {
  FOREST: { name: 'Forest', unlock_cost: 0, biome: 'forest' },
  TOWN: { name: 'Town', unlock_cost: 20, biome: 'town' },
  TOWN_PARK: { name: 'Town Park', unlock_cost: 50, biome: 'park' },
  CITY: { name: 'City', unlock_cost: 200, biome: 'city' },
  VILLAGE: { name: 'Village', unlock_cost: 500, biome: 'village' },
  DESERT: { name: 'Desert', unlock_cost: 750, biome: 'desert' },
  ICE_PLAINS: { name: 'Ice Plains', unlock_cost: 1000, biome: 'ice' },
};

export const SKILLS = {
  ACROBATICS: 'acrobatics',
  CRAFTING: 'crafting',
  SALES: 'sales',
  ATHLETICS: 'athletics',
  FISHING: 'fishing',
  GARDENING: 'gardening',
  CODING: 'coding',
  WOODWORK: 'woodwork',
};

export const BUSINESS_TYPES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export const SEASONS = {
  SPRING: 'spring',
  SUMMER: 'summer',
  FALL: 'fall',
  WINTER: 'winter',
};

export const NOCLIP_DURATION = 3000; // 3 seconds in milliseconds

export const ACHIEVEMENTS = [
  { id: 1, name: 'First Steps', description: 'Start the game', reward: 10 },
  { id: 2, name: 'Penny Pincher', description: 'Save your first $1', reward: 50 },
  { id: 3, name: 'Entrepreneur', description: 'Start your first business', reward: 100 },
  { id: 4, name: 'Dealmaker', description: 'Complete your first trade', reward: 75 },
  { id: 5, name: 'Skilled Trader', description: 'Sell 10 items', reward: 200 },
  { id: 6, name: 'Acrobat', description: 'Master acrobatics skill', reward: 300 },
  { id: 7, name: 'Explorer', description: 'Unlock all biomes', reward: 500 },
  { id: 8, name: 'Millionaire', description: 'Earn $1,000,000', reward: 1000 },
  { id: 9, name: 'The Big Win', description: 'Win the PS6 auction', reward: 2000 },
  { id: 10, name: 'Master Businessman', description: 'Reach level 10 in all businesses', reward: 1500 },
];
