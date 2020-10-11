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
	audio.play();
	square.setAttribute('class', 'active');
	setTimeout(() => {
		square.classList.remove('active');
	}, 100);
	setTimeout(game.handleInteraction(e.target.id), 5000);
});

/**
 * Click event for qwerty events
 */

document.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		start.style.display = 'none';
		restart.style.display = 'inline-block';
		game.playGame();
	}
});
