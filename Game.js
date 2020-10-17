class Game {
	constructor() {
		this.playerSequence = [];
		this.round = 0;
		this.sequence = new Sequence();
		this.sequenceRunning = false;
		this.audio = true;
		this.broken = false;
	}

	playGame() {
		this.sequenceRunning = true;
		const sequence = this.getSequence();
		for (let i = 0; i <= this.round; i++) {
			this.runSequence(sequence);
		}
		this.nextRound();
		this.broken = false;
		if (this.round > 8) {
			this.levelUp();
		}
	}

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

	stopTimeout(offset, square, color) {
		setTimeout(
			(() => {
				if (this.broken) return;
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
		this.sequence.sequence = [];
		this.playerSequence = [];
		this.round = 0;
		this.broken = true;
		score.innerText = score.innerText = `0${this.round}`;
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
