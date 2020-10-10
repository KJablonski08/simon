//creates new game object from class Game.js
const game = new Game();
const btn = document.querySelector('button');
const board = document.querySelector('.board');
/**
 * Click event on button that starts the game
 */

btn.addEventListener('click', () => {
	btn.style.display = 'none';
	game.startGame();
});

/** Click event on board for player choice */
board.addEventListener('click', (e) => {
	game.handleInteraction(e.target.id);
});

/**
 * Click event for qwerty events
 */
