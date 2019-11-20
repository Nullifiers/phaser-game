function addFullScreenButton(scene) {
    const { width } = scene.sys.game.canvas;
    const button = scene.add.rectangle(width - 16, 16, 16, 16, 0x333333);
    button.setInteractive();

    button.on('pointerup', () => {
        if (scene.scale.isFullscreen) {
            scene.scale.stopFullscreen();
        } else {
            scene.scale.startFullscreen();
        }
    });
}

export default addFullScreenButton;
