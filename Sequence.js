class Sequence {
	constructor() {
		this.sequenceChoices = ['red', 'yellow', 'green', 'blue'];
		this.sequence = [];
	}

	getRandomNum() {
		return this.sequenceChoices[
			Math.floor(Math.random() * this.sequenceChoices.length)
		];
	}

	/**
	 * @function setSequence
	 * @param {integer}
	 * decides how many rounds the player would like to play before winning and sets a random sequence that the 'computer' will play
	 */
	setSequence() {
		this.sequence.push(this.getRandomNum());
		return this.sequence;
	}
}
