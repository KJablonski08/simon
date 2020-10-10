class Game {
	constructor() {
		this.playerSequence = [];
		this.round = 0;
		this.sequence = new Sequence();
	}

	/**
	 * @function getSequence
	 * @params
	 * get random number b/w 0-4
	 * use this number to choose from index of sequenceChoices
	 * */
	getSequence() {
		this.sequence.setSequence();
		return this.sequence.sequence;
	}

	runSequence(sequence) {
		sequence.forEach((color, i) => {
			const square = document.querySelector(`#${color}`);
			setTimeout(() => {
				square.setAttribute('class', 'active');
				setTimeout(() => {
					square.classList.remove('active');
				}, 1000);
			}, i++ * 2000);
		});
	}

	//SOURCE - https://stackoverflow.com/questions/17246275/settimeout-and-array-each

	nextRound() {
		this.round++;
		const h2 = document.querySelector('h2');
		h2.innerText = `Round: ${this.round}`;
	}

	/**
	 * @function startGame
	 * @params
	 * starts the game ...
	 * stretch - will have an overlay with start button to enter the 'game page'
	 * calls the sequence class to get a new sequence - oop??
	 */
	startGame() {
		const sequence = this.getSequence();
		for (let i = 0; i <= this.round; i++) {
			this.runSequence(sequence);
		}
		this.nextRound();
	}

	/**
	 * @function handleInteration
	 * @params
	 * function will handle the events that need to happen for a click event
	 * stretch - will handle the events that need to happen for qwerty events
	 */

	handleInteraction(e) {
		this.playerSequence.push(e);
		if (this.playerSequence.join() === this.sequence.sequence.join()) {
			console.log('next round please');
		} else {
			console.log('something is up here');
		}
		console.log(this.playerSequence);
		console.log(this.sequence.sequence);
	}
}
