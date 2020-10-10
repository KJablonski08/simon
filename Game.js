class Game {
	constructor() {
		this.playerSequence = [];
		this.length = 1;
		this.sequence = new Sequence();
	}

	/**
	 * @function getSequence
	 * @params
	 * get random number b/w 0-4
	 * use this number to choose from index of sequenceChoices
	 * */
	getSequence() {
		seq.setSequence();
		return seq.sequence;
	}

	runSequence(sequence) {
		let offset = 3000;
		sequence.forEach((color) => {
			const square = document.querySelector(`#${color}`);
			const h1 = document.querySelector('h1');

			setTimeout(() => {
				console.log(color);
				square.setAttribute('class', 'active');
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
