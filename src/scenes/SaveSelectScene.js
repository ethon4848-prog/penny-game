// Save Select Scene - Choose save slot

export class SaveSelectScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SaveSelectScene' });
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const centerX = width / 2;

    // Background
    const bg = this.add.rectangle(centerX, height / 2, width, height, 0x1a1a2e);

    // Title
    const title = this.add.text(centerX, 50, 'Select Save Slot', {
      font: 'bold 32px Arial',
      fill: '#ffd700',
      align: 'center',
    }).setOrigin(0.5);

    // Create save slots
    const slotsPerRow = 3;
    const slotSize = 150;
    const startX = centerX - (slotsPerRow * slotSize) / 2 + slotSize / 2;
    const startY = 150;
    const spacing = 30;

    for (let i = 0; i < 10; i++) {
      const row = Math.floor(i / slotsPerRow);
      const col = i % slotsPerRow;
      const x = startX + col * (slotSize + spacing);
      const y = startY + row * (slotSize + spacing);
      this.createSaveSlot(x, y, i);
    }

    // Back button
    this.createBackButton(centerX, height - 50);
  }

  createSaveSlot(x, y, slotIndex) {
    const bg = this.add.rectangle(x, y, 140, 140, 0x2a2a3e);
    bg.setStrokeStyle(2, 0x666666);
    bg.setInteractive({ useHandCursor: true });

    const slotText = this.add.text(x, y - 40, `Slot ${slotIndex + 1}`, {
      font: 'bold 14px Arial',
      fill: '#ffd700',
      align: 'center',
    }).setOrigin(0.5);

    const infoText = this.add.text(x, y + 10, 'Empty', {
      font: '12px Arial',
      fill: '#ccc',
      align: 'center',
      wordWrap: { width: 120 },
    }).setOrigin(0.5);

    bg.on('pointerdown', () => {
      console.log(`Loading slot ${slotIndex}`);
      this.scene.start('GameScene');
    });

    bg.on('pointerover', () => {
      bg.setFillStyle(0x3a3a4e);
      slotText.setFill('#ffff00');
    });

    bg.on('pointerout', () => {
      bg.setFillStyle(0x2a2a3e);
      slotText.setFill('#ffd700');
    });
  }

  createBackButton(x, y) {
    const btnBg = this.add.rectangle(x, y, 150, 40, 0x8b4513);
    btnBg.setStrokeStyle(2, 0xaa6633);
    btnBg.setInteractive({ useHandCursor: true });

    const btnText = this.add.text(x, y, 'Back', {
      font: 'bold 16px Arial',
      fill: '#fff',
      align: 'center',
    }).setOrigin(0.5);

    btnBg.on('pointerdown', () => this.scene.start('MenuScene'));
    btnBg.on('pointerover', () => {
      btnBg.setFillStyle(0xaa6633);
      btnText.setFill('#ffd700');
    });
    btnBg.on('pointerout', () => {
      btnBg.setFillStyle(0x8b4513);
      btnText.setFill('#fff');
    });
  }
}
