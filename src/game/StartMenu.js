'use strict';

Hunted.StartMenu = function (game) {
    this.startBG;
    this.startPrompt;
};

Hunted.StartMenu.prototype = {

    create: function () {
        startBG = this.add.image(0, 0, 'menuScreen');
        startBG.inputEnabled = true;
        startBG.events.onInputDown.addOnce(this.startGame, this);

        startPrompt = this.add.bitmapText(
            this.world.centerX, 
            this.world.centerY, 
            'funera',
            'Touch to start the hunt',
            24
        );
    },

    startGame: function (pointer) {
        this.state.start('Game');
    }
}