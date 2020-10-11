//creates new game object from class Game.js
const game = new Game();
const start = document.querySelector('#start');
const board = document.querySelector('.board');
const overlay = document.querySelector('#overlay');
const enter = document.querySelector('#enter');
/**
 * Click event on button that starts the game
 */

enter.addEventListener('click', () => {
	overlay.style.display = 'none';
});

start.addEventListener('click', () => {
	start.style.display = 'none';
	game.playGame();
});

/** Click event on board for player choice */
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
