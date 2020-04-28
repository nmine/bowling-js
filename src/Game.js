class Game {

    constructor(score = 0, rolls = []) {
        this.score = score;
        this.rolls = rolls;
    }

    roll(pinDown) {
        this.rolls.push(pinDown);
    }

    calculateScore() {
        var rollIndex = 0
        for (let frame = 0; frame < 10; frame++) {
            let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
            if (this.isStrike(rollIndex)) {
                this.score += this.strikeBonus(rollIndex);
                rollIndex += 2;
                continue
            }
            if (this.isSpare(rollIndex)) {
                this.score += this.spareBonus(rollIndex);
                rollIndex += 2;
                continue
            }
            this.score += frameScore;
            rollIndex += 2;
        }
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    spareBonus(i) {
        return 10 + this.rolls[i + 2];
    }

    strikeBonus(rollIndex) {
        return 10 + this.rolls[rollIndex+1] + this.rolls[rollIndex+2];
    }

    isSpare(i) {
        return this.rolls[i] + this.rolls[i - 1] === 10;
    }

    getScore() {
        this.calculateScore();
        return this.score;
    }
}

module.exports = Game;
