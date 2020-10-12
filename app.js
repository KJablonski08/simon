const overlay = document.querySelector('#overlay');
const enter = document.querySelector('#enter');
const board = document.querySelector('.board');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const game = new Game();

enter.addEventListener('click', () => {
	overlay.style.display = 'none';
});

start.addEventListener('click', () => {
	start.style.display = 'none';
	restart.style.display = 'inline-block';
	game.playGame();
});

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

restart.addEventListener('click', () => {
	console.log('new game please');
	game.restart();
});

const instructionsBtn = document.querySelectorAll('.instructions');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');

const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => (modal.style.display = 'none');

instructionsBtn[0].addEventListener('click', openModal);
instructionsBtn[1].addEventListener('click', openModal);

close.addEventListener('click', closeModal);

// click events for qwerty events - accessibility

document.addEventListener('keypress', (e) => {
	if (e.key === 'i') {
		openModal();
	}
});

document.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		start.style.display = 'none';
		restart.style.display = 'inline-block';
		game.playGame();
	}
});

document.addEventListener('keypress', (e) => {
	if (e.key === 'p') {
		overlay.style.display = 'none';
	}
});

document.addEventListener('keypress', (e) => {
	if (e.key === 'x') {
		closeModal();
	}
});
