'use strict';

Hunted.Preloader = function (game) {
    this.titleText = null;
    this.preloadBar = null;
    this.ready = false;
};

Hunted.Preloader.prototype = {

    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'titleImage');
        this.titleText.anchor.setTo(0.5);


    },

    create: function () {
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
        this.ready = true;
    }
};