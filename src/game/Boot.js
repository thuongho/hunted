'use strict';

var Hunted = {
  orientated: false
};

Hunted.Boot = function (game) {};

Hunted.Boot.prototype = {
    init: function () {
        this.stage.disableVisiblityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(480, 260, 1024, 768);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        // landscape mode
        if (!this.game.device.desktop) {
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        } 
    },
    
    preload: function () {
        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        // this.load.image('preloaderBackground', 'images/preloader_background.jpg');
        // this.load.image('preloaderBar', 'images/preloader_bar.png');
    },

    create: function () {
        // this.state.start('Preloader');
    },

    enterIncorrectOrientation: function () {
        Hunted.orientated = false;
        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {
        Hunted.orientated = true;
        document.getElementById('orientation').style.display = 'none';
    }
};