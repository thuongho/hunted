'use strict';

Hunted.Game = function (game) {
    this.character;
    this.totalRodents;
    this.rodentGroup;
    this.controller;
};

Hunted.Game.prototype = {

    create: function () {
        this.totalRodents = 10;

        this.buildWorld();
    },

    buildWorld: function () {
        this.character = this.add.image(this.world.centerX, this.world.centerY, 'male_player');
        this.character.anchor.setTo(0.5);
        this.character.scale.setTo(0.2);

        this.buildControls();
        this.buildRodents();
    },

    buildControls: function () {
        this.controller = this.input.keyboard.createCursorKeys();
    },

    buildKeyboardMovements: function () {
        if (this.controller.left.isDown) {
            this.character.x -= 4;
        } else if (this.controller.right.isDown) {
            this.character.x += 4;
        }

        if (this.controller.up.isDown) {
            this.character.y -= 4;
        } else if (this.controller.down.isDown) {
            this.character.y += 4;
        }
    },

    buildRodents: function () {
        this.rodentGroup = this.add.group();
        this.rodentGroup.enableBody = true;

        for (var i = 0; i < this.totalRodents; i++) {
            var rodentBabiesMachine = this.rodentGroup.create(this.rnd.integerInRange(0, this.world.width), this.rnd.integerInRange(0, this.world.height), 'rodent', 'Bunny0000');

            rodentBabiesMachine.anchor.setTo(0.5);
            rodentBabiesMachine.moves = false;

            rodentBabiesMachine.animations.add('Rest', this.populateArray(1, 58));
            rodentBabiesMachine.animations.add('Walk', this.populateArray(68, 107));
            rodentBabiesMachine.animations.play('Rest', 24, true);

            this.assignRodentMovement(rodentBabiesMachine);
        }
    },

    assignRodentMovement: function (rodent) {
        var rodentPosition = Math.floor(this.rnd.realInRange(50, this.world.width));
        var rodentDelay = this.rnd.integerInRange(2000, 6000);

        if (rodentPosition < rodent.x) {
            rodent.scale.x = 1;
        } else {
            rodent.scale.x = -1;
        }

        var t = this.add.tween(rodent).to({x: rodentPosition}, 3500, Phaser.Easing.Quadratic.InOut, true, rodentDelay);
        t.onStart.add(this.startRodent, this);
        t.onComplete.add(this.stopRodent, this);
    },

    startRodent: function (rodent) {
        rodent.animations.stop('Play');
        rodent.animations.play('Walk', 24, true);
    },

    stopRodent: function (rodent) {
        rodent.animations.stop('Walk');
        rodent.animations.play('Rest', 24, true);
        this.assignRodentMovement(rodent);
    },

    populateArray: function (min, max) {
        var numberArray = [];
        for (var i = min; i <= max; i++) {
            numberArray.push(i);
        }
    },

    update: function () {
        this.buildKeyboardMovements();
    }
};