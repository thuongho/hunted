'use strict';

Hunted.StartMenu = function (game) {
    this.startBG;
    this.startPrompt;
};

Hunted.StartMenu.prototype = {

    create: function () {
        this.startBG = this.add.image(0, 0, 'menuScreen');
        this.startBG.inputEnabled = true;
        this.startBG.events.onInputDown.addOnce(this.startGame, this);

        this.startPrompt = this.add.bitmapText(
            this.world.centerX - 215, 
            this.world.centerY, 
            'funera',
            'Touch to start the hunt',
            75
        );
    },

    startGame: function (pointer) {
        this.state.start('Game');
    }
}