import './style.css';
import Phaser from 'phaser';

// Game configuration
const sizes = {
  width: 500,
  height: 500
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas
};

// Initialize the game
const game = new Phaser.Game(config);

// Preload game assets
function preload() {
  // This function will be called by Phaser when the game starts
  // Load your game assets (images, sprites, sounds, etc.) here
  // this.load.image('sky', 'assets/sky.png');
}

// Create game objects
function create() {
  // This function will be called after preload is complete
  // Create your game objects, setup animations, etc. here
  this.add.text(400, 300, 'Low Poly Princess', { 
    fontSize: '32px', 
    fill: '#fff' 
  }).setOrigin(0.5);
}

// Game update loop
function update() {
  // This function is called on every frame
  // Update your game logic here
}
