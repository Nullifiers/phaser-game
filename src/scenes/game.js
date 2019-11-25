import config from '../config';
import addFullScreenButton from '../helpers/add_fullscreen_button';

class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
    }

    createPlayer() {
        this.player = this.add.rectangle(100, 600, config.playerWidth, config.playerHeight, 0xffffff);
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);
    }

    create() {
        addFullScreenButton(this);
        this.createPlayer();
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const { body: player } = this.player;
        player.setVelocityX(0);
        if (this.cursors.left.isDown) {
            player.setVelocityX(-config.playerSpeed);
        } else if (this.cursors.right.isDown) {
            player.setVelocityX(config.playerSpeed);
        }

        if (this.cursors.up.isDown) {
            if (player.y >= config.height - config.playerHeight) {
                player.setVelocityY(-config.playerJumpSpeed);
            }
        }
    }
};

export default Game;
