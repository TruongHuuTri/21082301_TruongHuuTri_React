//JavaScript in the Browser: DOM and Events

let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let message = 'Start guessing...';

function resetGame() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  message = 'Start guessing...';
  console.log('Game has been reset!');
  console.log(`Score: ${score}, Secret Number: ${secretNumber}, Message: ${message}`);
}

// Simulate game reset
resetGame();

