'use strict';

Hunted.Preloader = function (game) {
    this.titleText = null;
    this.preloadBar = null;
    this.ready = false;
};

Hunted.Preloader.prototype = {

    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 100, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'titleImage');
        this.titleText.anchor.setTo(0.5);

        this.load.image('menuScreen', '../../assets/images/hunted_titleBG.jpg');
        this.load.bitmapFont('funera', '../../assets/fonts/funera.png', '../../assets/fonts/funera.fnt');
    },

    create: function () {
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
        this.ready = true;
        this.state.start('StartMenu');
    }
};