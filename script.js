// when it rolls 1 it resets all the score
// any other roll in the dice sums up to the current score
// first player to 100 points wins the game
// draw a flowchart with DIAGRAMS.NET

'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceElem = document.querySelector('.dice');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');

const scores = [0, 0]; // prefer const for arrays
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll;
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice according to the rolled number;
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // current0Elem.textContent = currentScore; // CHANGE LATER
  } else {
    // When rolled dice is 1, player loses all score and it switches to the next player
    switchPlayer();
    //toggle method checks if a class is there. If it is, it will remove
    // and if it is not, it will add
  }
});

// New game functionality
btnNew.addEventListener('click', function () {});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1] + currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if player's score is >= 100
  // finish the game

  // 3. Switch to the next player
  switchPlayer();
});
