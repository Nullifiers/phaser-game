import addFullScreenButton from '../helpers/add_fullscreen_button';

class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
    }

    createPlayer() {
        this.player = this.add.rectangle(100, 600, 16, 16, 0xffffff);
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);
    }

    create() {
        this.canvas = this.sys.game.canvas;
        addFullScreenButton(this);
        this.createPlayer();
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const { body: player } = this.player;
        player.setVelocityX(0);
        if (this.cursors.left.isDown) {
            player.setVelocityX(-300);
        } else if (this.cursors.right.isDown) {
            player.setVelocityX(300);
        }

        if (this.cursors.up.isDown) {
            if (player.y >= this.canvas.height - 16) {
                player.setVelocityY(-200);
            }
        }
    }
};

export default Game;
