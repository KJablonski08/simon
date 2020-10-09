class Sequence {
	constructor() {
		this.sequenceChoices = ['red', 'yellow', 'green', 'blue'];
	}

	getRandomNum() {
		return this.sequenceChoices[
			Math.floor(Math.random() * this.sequenceChoices.length)
		];
	}

	/**
	 * @function setSequence
	 * @param {}
	 */
	setSequence() {
		const num = this.getRandomNum();
		console.log(num);
	}
}
