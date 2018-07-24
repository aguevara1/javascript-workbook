'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//global variables
let newHand1;
let newHand2;

// function checks for valid input from user
// trims whitespace and makes lowercase
// returns true if inputs are valid
const isValid = (handOne, handTwo) => {
  newHand1 = handOne.toLowerCase().trim();
  newHand2 = handTwo.toLowerCase().trim();
  const possibleHands = ["rock", "paper", "scissors"];
  return possibleHands.indexOf(newHand1) !== -1 && possibleHands.indexOf(newHand2) !== -1;
}

// function will evaluate 2 inputs to see who wins
// returns winning hand. Before comparing hands, will call function
// isValid to check if the inputs are valid
const rockPaperScissors = (hand1, hand2) => {

  // check if input is valid before comparing hands
  //call function to check values
  if (isValid(hand1, hand2) == true) {

    // first check if inputs are the same
    //if hand1 is Rock other cases for hand2
    if (newHand1 === newHand2) {
      return "It's a tie!";
    } else if (newHand1 === 'rock') {
      if (newHand2 === 'paper') {
        return "Hand two wins!";
      } else {
        return "Hand one wins!";
      }
      // if hand1 is Paper other cases for hand2
    } else if (newHand1 === 'paper') {
      if (newHand2 === 'rock') {
        return "Hand one wins!";
      } else {
        return "Hand two wins!";
      }

    }
    // hand1 must be Scissors, other cases for hand2
    if (newHand2 === 'rock') {
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }
  } else {
    return "Invalid input! Enter(rock paper scissors)";
  }

}

/* this function prompts user to enter input and calls main function to
evaluate hands, then calls itself in a loop */
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Test Cases
if (typeof describe === 'function') {
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
