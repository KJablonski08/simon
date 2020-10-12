const overlay = document.querySelector('#overlay');
const play = document.querySelector('#play');
const board = document.querySelector('.board');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const instructionsBtn = document.querySelectorAll('.instructions');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const game = new Game();

const hideOverlay = () => (overlay.style.display = 'none');
const openModal = () => (modal.style.display = 'block');
const closeModal = () => (modal.style.display = 'none');

// OVERLAY EVENT LISTENERS
play.addEventListener('click', () => {
	hideOverlay();
});

// close overlay event listener for qwerty - accessibility
document.addEventListener('keypress', (e) => {
	if (e.key === 'p') {
		hideOverlay();
	}
});

// INSTRUCTIONS MODAL EVENT LISTENERS

instructionsBtn[0].addEventListener('click', openModal);
instructionsBtn[1].addEventListener('click', openModal);

// instructions open modal event listener for qwerty - accessibility
document.addEventListener('keypress', (e) => {
	if (e.key === 'i') {
		openModal();
	}
});

// instructions close modal event listener
close.addEventListener('click', closeModal);

// instructions close modal event listener for qwerty - accessibility
document.addEventListener('keypress', (e) => {
	if (e.key === 'x') {
		closeModal();
	}
});

// BOARD EVENT LISTENERS
//start button event listener to begin game play sequence
start.addEventListener('click', () => {
	start.style.display = 'none';
	restart.style.display = 'inline-block';
	game.playGame();
});

// click events for qwerty events - accessibility
document.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		if (overlay.style.display === 'none') {
			start.style.display = 'none';
			restart.style.display = 'inline-block';
			game.playGame();
		}
	}
});

// event listener for player square sequence choices
board.addEventListener('click', (e) => {
	const square = e.target;
	const audio = e.target.firstElementChild;
	if (game.sequenceRunning === false) {
		audio.play();
		square.setAttribute('class', 'active');
		setTimeout(() => {
			square.classList.remove('active');
		}, 100);
		setTimeout(game.handleInteraction(e.target.id), 5000);
	}
});

// event listener to restart to a new game
restart.addEventListener('click', () => {
	game.restart();
});
