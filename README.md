# A Penny is Worth More Than You Think

A top-down simulation game where you start with just 1 penny and work your way up to purchasing a PS6 through trading, business management, skill development, and strategic decisions.

## Game Features

### Core Mechanics
- **Starting Resource**: Begin with 1 penny in a forest/lake area
- **Trading System**: Trade with NPCs who have preferences and personalities
- **Dynamic Pricing**: Haggle with shopkeepers - prices fluctuate based on supply/demand
- **Skill Progression**: Train in various skills (acrobatics, crafting, sales, etc.)
- **Inventory & Crafting**: Combine items at the camp item creator to make higher-value goods
- **Noclip Ability**: Press button in top-left corner for 3-second noclip (can't pass borders)

### World & Exploration
- **Starting Area**: Forest with a lake
- **Unlockable Locations**:
  - Town ($20)
  - Town Park ($50)
  - City ($200)
- **Biomes**: Village, Desert, Ice Plains, and more (each with unique NPCs and items)
- **Season Rotation**: Winter with Christmas events, seasonal business deals
- **Day/Night & Weather Cycles**: Dynamic environmental effects

### Business & Employment
- **Small Business**: Start with minimal investment
- **Medium Business**: More employees, higher stakes
- **Large Business**: Unlock after reaching the city
- **Business Types**: Game creator studio, woodwork shop, sports team, etc.
- **Job System**: Work at companies if skills are high enough
- **Employee Management**: Pay members, keep them happy, manage productivity

### Financial Goals
- **Auctions**: Sell found items and inventory at auctions
- **Betting**: Make bets with NPCs (e.g., "I bet I can hit that rock for $2")
- **Brand Creation**: Start your own brand with a small fee
- **Ultimate Goal**: Win a PS6 auction (~$12,000)

### Additional Features
- **Save Slots**: Multiple independent save files
- **Achievements**: 200+ achievements to unlock
- **Animal Crossing Graphics**: Charming pixel art aesthetic
- **Dialogue System**: Your conversation choices matter - being rude reduces chances of successful trades
- **Character Spawning**: Never spawns inside blocks or solid objects

## Getting Started

1. Clone the repository: `git clone https://github.com/ethon4848-prog/penny-game.git`
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open `http://localhost:3000` in your browser

## Development Roadmap

### Phase 1: Core Systems
- [ ] Player movement & collision
- [ ] World rendering & navigation
- [ ] Save/load system with multiple slots
- [ ] Basic inventory

### Phase 2: Economy
- [ ] NPC interaction & dialogue
- [ ] Trading system
- [ ] Shop system with dynamic pricing
- [ ] Basic items & crafting

### Phase 3: Progression
- [ ] Skill system and training
- [ ] Business creation & management
- [ ] Employment system
- [ ] Auctions and betting

### Phase 4: World Expansion
- [ ] Location unlocking system
- [ ] Biome system
- [ ] Seasonal changes and events
- [ ] Weather effects

### Phase 5: Polish
- [ ] UI/UX refinement
- [ ] Audio implementation
- [ ] Achievement system (200+)
- [ ] Bug fixes & optimization

## Tech Stack
- **Engine**: Phaser 3
- **Graphics**: Pixel art (Animal Crossing style)
- **Storage**: LocalStorage & IndexedDB for save files
- **Language**: JavaScript (ES6+)
- **Build**: Webpack

## Project Structure

```
penny-game/
├── src/
│   ├── main.js                 # Game entry point
│   ├── core/
│   │   ├── GameManager.js      # Main game loop & state
│   │   ├── Player.js           # Player character & stats
│   │   ├── World.js            # World/map management
│   │   └── SaveSystem.js       # Save/load functionality
│   ├── systems/
│   │   ├── EconomySystem.js    # Trading, pricing, auctions
│   │   ├── BusinessSystem.js   # Business management
│   │   ├── SkillSystem.js      # Skill training & progression
│   │   ├── CraftingSystem.js   # Item combining
│   │   ├── TimeSystem.js       # Day/night, seasons, weather
│   │   └── AchievementSystem.js # Achievement tracking
│   ├── entities/
│   │   ├── NPC.js              # Non-player characters
│   │   ├── Item.js             # Game items
│   │   ├── Location.js         # Map locations
│   │   └── Business.js         # Business instances
│   ├── ui/
│   │   ├── HUD.js              # Heads-up display
│   │   ├── DialogueUI.js       # Conversation interface
│   │   ├── MenuUI.js           # Main menu & settings
│   │   └── AchievementUI.js    # Achievement notifications
│   └── utils/
│       ├── Constants.js        # Game constants
│       ├── Config.js           # Configuration
│       └── Helpers.js          # Utility functions
├── assets/
│   ├── sprites/                # Character & item sprites
│   ├── tilemap/                # World tileset
│   ├── audio/                  # Sound effects & music
│   └── fonts/                  # Game fonts
├── index.html                  # HTML entry point
├── style.css                   # Game styling
└── package.json                # Dependencies
```

## How to Play

1. Start in the forest with 1 penny
2. Talk to NPCs and trade items
3. Visit shops to buy/sell goods
4. Train skills at designated training areas
5. Start small businesses and grow your income
6. Unlock new areas by saving money
7. Complete challenges, make bets, participate in auctions
8. Work toward the ultimate goal: acquiring a PS6 (~$12,000)

---

**Game Name**: A Penny is Worth More Than You Think  
**Platform**: Web (HTML5/Phaser 3)  
**Art Style**: Animal Crossing-inspired pixel art  
**Target**: Build a comprehensive life simulation with economic depth
