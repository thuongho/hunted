'use strict';

(function () {
    var GAME_WIDTH = 1024;
    var GAME_HEIGHT = 768;

    var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameContainer');

    game.state.add('Boot', Hunted.Boot);
    game.state.add('Preloader', Hunted.Preloader);
    game.state.add('StartMenu', Hunted.StartMenu);
    game.state.add('Game', Hunted.Game);

    game.state.start('Boot');
})();