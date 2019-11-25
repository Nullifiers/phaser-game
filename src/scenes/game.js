import config from '../config';
import addFullScreenButton from '../helpers/add_fullscreen_button';

class Game extends Phaser.Scene {
    constructor() {
        super('game');

        this.portals = {};
        this.portalsEnabled = true;
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
        const platform = this.add.rectangle(x, y, width, height, 0xff0000);
        platform.setOrigin(0, 0);
        this.physics.add.existing(platform);
        platform.body.setImmovable(true);
        platform.body.allowGravity = false;
        this.physics.add.collider(this.player, platform);
    }

    createPlatforms() {
        this.createPlatform(0, config.height - config.platformHeight - 100, config.width, config.platformHeight);
        this.createPlatform(0, config.height - config.platformHeight, config.width - config.portalWidth, config.platformHeight);
        this.createPlatform(config.width - config.portalWidth, config.height - 0.1, config.portalWidth, config.platformHeight);
    }

    createPortal(name, x, y) {
        const portal = this.add.rectangle(x, y, config.portalWidth, config.portalHeight, 0x0000ff);
        portal.setOrigin(0, 0);
        this.physics.add.existing(portal);
        portal.body.setImmovable(true);
        portal.body.allowGravity = false;
        this.portals[name] = portal;
    }

    createPortals() {
        this.createPortal('one', config.width - config.portalWidth, config.height - config.portalHeight);
        this.createPortal('two', 10, 400);
    }

    addPortalMapping(portal1, portal2) {
        this.physics.add.overlap(this.player, portal1, () => {
            if (!this.portalsEnabled) return;
            this.portalsEnabled = false;

            this.player.body.x = portal2.body.x;
            this.player.body.y = portal2.body.y;

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
            two: 'one'
        };
        Object.keys(mapping).forEach((key) => {
            this.addPortalMapping(this.portals[key], this.portals[mapping[key]]);
        });
    }

    create() {
        addFullScreenButton(this);
        this.createPlayer();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.createPlatforms();
        this.createPortals();
        this.addPortalOverlaps();
    }

    update() {
        const { body: player } = this.player;
        player.setVelocityX(0);
        if (this.cursors.left.isDown) {
            player.setVelocityX(-config.playerSpeed);
        } else if (this.cursors.right.isDown) {
            player.setVelocityX(config.playerSpeed);
        }

        if (this.cursors.up.isDown && player.touching.down) {
            player.setVelocityY(-config.playerJumpSpeed);
        }
    }
};

export default Game;
