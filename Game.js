class Game {
	constructor() {
		this.playerSequence = [];
		this.round = 0;
		this.sequence = new Sequence();
		this.sequenceRunning = false;
	}
	getSequence() {
		this.sequence.setSequence();
		return this.sequence.sequence;
	}

	playAudio(color) {
		const e = document.querySelector(`#${color} audio`);
		e.play();
	}

	runSequence(sequence) {
		let offset;
		sequence.forEach((color, i) => {
			offset = i++ * 2000;
			const square = document.querySelector(`#${color}`);
			setTimeout(() => {
				square.setAttribute('class', 'active');
				this.playAudio(color);
				setTimeout(() => {
					square.classList.remove('active');
				}, 1000);
			}, offset);
		});
		setTimeout(() => {
			this.sequenceRunning = false;
		}, offset);
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

	playGame() {
		this.sequenceRunning = true;
		const sequence = this.getSequence();
		for (let i = 0; i <= this.round; i++) {
			this.runSequence(sequence);
		}
		this.nextRound();
	}

	checkPlayerSequence() {
		const check = this.playerSequence.map((color, i) => {
			if (color === this.sequence.sequence[i]) {
				// console.log('please continue');
				// console.log(color);
				// console.log(this.sequence.sequence[i]);
				return true;
			} else {
				('whoops, game over');
				// console.log(color);
				// console.log(this.sequence.sequence[i]);
				// console.log(this.sequence.sequence);
				// console.log(this.playerSequence);
				return false;
			}
		});
		return check;
	}

	checkForGameOver() {
		if (this.checkPlayerSequence().includes(false)) {
			const gameOver = document.querySelector('#overlay');
			const title = document.querySelector('#title');
			gameOver.style.display = '';
			title.style.color = 'red';
			title.innerText = 'Game Over';
		} else {
			setTimeout(() => {
				this.playGame();
			}, 1000);
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
		this.checkPlayerSequence();
		this.checkForGameOver();
	}
}
