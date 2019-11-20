import Phaser from 'phaser';

import Game from './scenes/game';

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Game]
};
// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
