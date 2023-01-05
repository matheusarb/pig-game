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

let scores, currentScore, activePlayer, playing;

const init = function () {
  // Starting Conditions
  scores = [0, 0]; // prefer const for arrays
  currentScore = 0;
  activePlayer = 0;
  playing = true; // STATE VARIABLE to deactive buttons in case there is a winner

  diceElem.classList.add('hidden');

  // 1. The score  and currentScore of each player goes to 0
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;

  // 2. Black background for the winner disappears
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  // 3. Remove player--active class from each player
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
  }
});

// Hold Button and Winner Functionalities
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    // finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceElem.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
});

// New game functionality
btnNew.addEventListener('click', init);
