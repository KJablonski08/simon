class Game {
	constructor() {
		this.playerSequence = [];
		this.round = 0;
		this.sequence = new Sequence();
		this.sequenceRunning = false;
		this.audio = true;
		this.timeOut;
	}

	/**
	 * @function playGame
	 * sets sequenceRunning to true - player not be able to add to playerSequence until the computer's sequence is finished running
	 * runs getSequence (adds new color to this.sequence.sequence for each round played)
	 */

	playGame() {
		this.sequenceRunning = true;
		const sequence = this.getSequence();
		for (let i = 0; i <= this.round; i++) {
			this.runSequence(sequence);
		}
		this.nextRound();
		if (this.round > 10) {
			this.levelUp();
		}
	}
	/** do I like next round here?? maybe better placed in another function - after check sequence maybe? */

	// returns an additional index to computer's sequence from sequence class each time run
	getSequence() {
		return this.sequence.setSequence();
	}

	playAudio(color) {
		const e = document.querySelector(`#${color} audio`);
		e.play();
	}

	audioController() {
		const music = document.querySelector('#audio');
		if (this.audio === true) {
			this.audio = false;
			music.style.textDecoration = 'line-through';
		} else {
			this.audio = true;
			music.style.textDecoration = 'none';
		}
	}

	/**
	 * @function runSequence()
	 * @param {object} sequence
	 * runs computer sequence with a flash and audio to indicate color chosen by computer
	 */

	stopTimeout(offset, square, color) {
		this.timeOut = setTimeout(
			(() => {
				square.setAttribute('class', 'active');
				if (this.audio === true) {
					this.playAudio(color);
				}
				setTimeout(() => {
					square.classList.remove('active');
				}, 1000);
			}).bind(this),
			offset
		);
	}

	runSequence(sequence) {
		sequence.forEach((color, i) => {
			this.offset = i++ * 1500;
			const square = document.querySelector(`#${color}`);
			this.stopTimeout(this.offset, square, color);
		});
		setTimeout(() => {
			this.sequenceRunning = false;
		}, this.offset);
	}

	//SOURCE - https://stackoverflow.com/questions/17246275/settimeout-and-array-each

	nextRound() {
		this.playerSequence = [];
		this.round += 1;
		const score = document.querySelector('#scoreNum');
		if (this.round < 10) {
			score.innerText = `0${this.round}`;
		} else {
			score.innerText = `${this.round}`;
		}
	}

	checkForGameOver() {
		for (let i = 0; i < this.sequence.sequence.length; i++) {
			if (this.playerSequence[i]) {
				if (this.sequence.sequence[i] !== this.playerSequence[i]) {
					const gameOver = document.querySelector('#overlay');
					const title = document.querySelector('#title');
					gameOver.style.display = '';
					title.style.color = 'red';
					title.innerText = 'Game Over';
					this.restart();
				}
			}
		}
		if (
			this.sequence.sequence.length === this.playerSequence.length &&
			this.round !== 0
		) {
			return true;
		}
	}

	restart() {
		const score = document.querySelector('#scoreNum');
		const restart = document.querySelector('#restart');
		const start = document.querySelector('#start');
		this.playerSequence = [];
		this.round = 0;
		this.sequence.sequence = [];
		score.innerText = score.innerText = `0${this.round}`;
		restart.style.display = 'none';
		start.style.display = '';
	}

	handleInteraction(e) {
		this.playerSequence.push(e);
		this.checkForGameOver();
		if (this.checkForGameOver() === true) {
			setTimeout(() => {
				this.playGame();
			}, 1000);
		}
	}

	levelUp() {
		const space = document.querySelector('#space');
		space.style.display = 'inline-block';
		titleMsg.innerText = 'the galaxy rests in your hands...';
	}
}
