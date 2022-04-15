export default class Score {
  constructor({ player, score }) {
    this.player = player;
    this.score = score;
  }

  toJSON() {
    return JSON.stringify({
      user: this.player,
      score: this.score,
    });
  }
}