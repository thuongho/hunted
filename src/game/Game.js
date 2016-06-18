'use strict';

Hunted.Game = function (game) {
    this.character;
};

Hunted.Game.prototype = {

    create: function () {

        this.buildWorld();

    },

    buildWorld: function () {
        this.character = this.add.image(this.world.centerX, this.world.centerY, 'male_player');
        this.character.anchor.setTo(0.5);
        this.character.scale.setTo(0.2);
    },

    update: function () {}
};