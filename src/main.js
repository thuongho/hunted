'use strict';

(function () {
    var GAME_WIDTH = 640;
    var GAME_HEIGHT = 360;

    var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameContainer');

    game.state.add('Boot', Hunted.Boot);
    game.state.add('Preloader', Hunted.Preloader);

    game.state.start('Boot');
})();