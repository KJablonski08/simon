class Game {
	constructor() {
		this.playerSequence = [];
	}

	/**
	 * @function getSequence
	 * @params
	 * get random number b/w 0-4
	 * use this number to choose from index of sequenceChoices
	 * */
	getSequence() {
		const seq = new Sequence();
		seq.setSequence(20);
		return seq.sequence;
	}

	runSequence(sequence) {
		let offset = 3000;
		sequence.forEach((color) => {
			setTimeout(() => {
				console.log(color);
			}, offset);
			offset += 3000;
		});
	}

	//SOURCE - https://stackoverflow.com/questions/17246275/settimeout-and-array-each

	/**
	 * @function startGame
	 * @params
	 * starts the game ...
	 * stretch - will have an overlay with start button to enter the 'game page'
	 * calls the sequence class to get a new sequence - oop??
	 */
	startGame() {
		const sequence = this.getSequence();
		this.runSequence(sequence);
	}

	/**
	 * @function handleInteration
	 * @params
	 * function will handle the events that need to happen for a click event
	 * stretch - will handle the events that need to happen for qwerty events
	 */

	handleInteraction() {
		this.startGame();
	}
}
