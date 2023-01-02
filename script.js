// when it rolls 1 it resets all the score
// any other roll in the dice sums up to the current score
// first player to 100 points wins the game
// draw a flowchart with DIAGRAMS.NET

'use strict';

// Selecting Elements
const diceElem = document.querySelector('.dice');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');

// Rolling Dice Functionality

btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll;
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice according to the rolled number;
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. check for rolled 1: if true, switch to next player
});
