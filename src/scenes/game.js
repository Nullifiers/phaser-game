import config from '../config';
import addFullScreenButton from '../helpers/add_fullscreen_button';

class Game extends Phaser.Scene {
    constructor() {
        super('game');

        this.portals = {};
        this.overlappingPortal = null;
    }

    preload() {
    }

    createPlayer() {
        this.player = this.add.rectangle(100, 550, config.playerWidth, config.playerHeight, 0xffffff);
        this.player.setOrigin(0, 0);
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);
    }

    createPlatform(x, y, width, height) {
        const platform = this.add.rectangle(x, y, width, height, 0x333333);
        platform.setOrigin(0, 0);
        this.physics.add.existing(platform);
        platform.body.setImmovable(true);
        platform.body.allowGravity = false;
        this.physics.add.collider(this.player, platform);
    }

    createPlatforms() {
        this.createPlatform(0, config.height - config.platformHeight - 100, config.width, config.platformHeight);
        this.createPlatform(0, config.height - config.platformHeight, config.width - 16, config.platformHeight);
        this.createPlatform(config.width - 16, config.height - 0.1, 16, config.platformHeight);
        this.createPlatform(0, config.height - config.platformHeight * 2 - config.playerHeight - 100, config.width, config.platformHeight);
    }

    createPortal(name, x, y, width = 16, height = 16) {
        const portal = this.add.rectangle(x, y, width, height, 0x0000ff);
        portal.setAlpha(0);
        portal.setOrigin(0, 0);
        this.physics.add.existing(portal);
        portal.body.setImmovable(true);
        portal.body.allowGravity = false;
        portal.name = name;
        this.portals[name] = portal;
    }

    createPortals() {
        this.createPortal('zero', 10, config.height - config.platformHeight - 20);
        this.createPortal('one', config.width - 16, config.height - 16);
        this.createPortal('two', 10, config.height - config.platformHeight - config.playerHeight - 100);
        this.createPortal('three', 150, config.height - config.platformHeight - config.playerHeight - 100);
        this.createPortal('four', 500, config.height - config.platformHeight - config.playerHeight - 100);
        this.createPortal('five', 300, config.height - config.platformHeight - config.playerHeight - 100);
        this.createPortal('six', 10, config.height - config.platformHeight * 3 - config.playerHeight - 150);
    }

    addPortalMapping(portal1, portal2) {
        this.physics.add.overlap(this.player, portal1, () => {
            if (this.overlappingPortal === portal1.name) return;

            this.player.body.x = portal2.body.x;
            this.player.body.y = portal2.body.y;
            this.overlappingPortal = portal2.name;

            this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.portalsEnabled = true;
                },
                callbackScope: this
            });
        });
    }

    addPortalOverlaps() {
        const mapping = {
            one: 'two',
            two: 'zero',
            three: 'four',
            four: 'three',
            five: 'six',
            six: 'zero'
        };
        Object.keys(mapping).forEach((key) => {
            this.addPortalMapping(this.portals[key], this.portals[mapping[key]]);
        });
    }

    setupCamera() {
        this.cameras.main.setBounds(0, 0, config.width, config.height * 10);
        this.cameras.main.startFollow(this.player);
    }

    create() {
        addFullScreenButton(this);
        this.createPlayer();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.createPlatforms();
        this.createPortals();
        this.addPortalOverlaps();
        this.setupCamera();
    }

    update() {
        const { body: player } = this.player;
        player.setVelocityX(player.velocity.x / 1.05);
        if (this.cursors.left.isDown) {
            player.setVelocityX(-config.playerSpeed);
        } else if (this.cursors.right.isDown) {
            player.setVelocityX(config.playerSpeed);
        }

        if (this.cursors.up.isDown && player.touching.down) {
            player.setVelocityY(-config.playerJumpSpeed);
        }

        if (this.overlappingPortal && !this.physics.overlap(this.player, this.portals[this.overlappingPortal])) {
            this.overlappingPortal = null;
        }
    }
};

export default Game;
