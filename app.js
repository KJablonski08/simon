//creates new game object from class Game.js
const game = new Game();
const btn = document.querySelector('button');
/**
 * Click event on button that starts the game
 */

btn.addEventListener('click', () => {
	btn.innerText = 'restart';
	game.handleInteraction();
});

/**
 * Click event for qwerty events
 */
