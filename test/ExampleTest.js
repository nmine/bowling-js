const assert = require("chai").assert;
let Game = require('../src/Game');

describe('Game', () => {
    let game;

    beforeEach(() =>  {
        game = new Game();
    });

    it('Game can roll', () => {
        game.roll(0);
    });

    it('roll 0 should score 0', () => {
        game.roll(0);
        rollMany(19,0);
        assert.equal(game.getScore(),0);
    });

    it('roll 1 should score 1', () => {
        game.roll(1);
        rollMany(19,0);
        assert.equal(game.getScore(), 1);
    });

    it('10 pins down in two roll should score a spare', () => {
        game.roll(5);
        game.roll(5);
        game.roll(5);
        rollMany(17,0);
        assert.equal(game.getScore() ,20);
    });

    it('10 pins down in one roll should score a strike', () => {
        game.roll(10);
        game.roll(5);
        game.roll(5);
        rollMany(17,0);
        assert.equal(game.getScore() ,30);
    });

    it('10 pins down in last one roll should score a strike', () => {
        game.roll(10);
        game.roll(5);
        game.roll(5);
        rollMany(17,0);
        assert.equal(game.getScore() ,30);
    });

    function rollMany( times, pinDown) {
        for(var i = 0; i < times; i++) {
            game.roll(pinDown);
        }
    }

});
