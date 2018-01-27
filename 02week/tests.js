'use strict';

/*Write new tests for Rock Paper Scissors in the javascript-workbook 02week/test.js:
Test for all possible scenaries in which "Hand one wins!".
Test for all possible scenaries in which "Hand two wins!".
Test to make sure user must input a valid entry (e.g. 'rock', 'paper', or 'scissors')
Think of more tests you could write and try writing them.
*/

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//write function isValid


const isValid = (handOne, handTwo) => {
  const newHand1 = handOne.toLowerCase().trim();
  const newHand2 = handTwo.toLowerCase().trim();
  const possibleHands = ["rock", "paper", "scissors"];
  if (possibleHands.indexOf(newHand1) !== -1 && possibleHands.indexOf(newHand2) !== -1) {
    return true;
  } else {
    return false;
  }
}

const rockPaperScissors = (hand1, hand2) => {


  if (isValid(hand1, hand2) == true) {

    if (hand1 === hand2) { //check if hand 1 is equal to hand 2
      return "It's a tie!"; // if yes it's a tie
    } else if (hand1 === 'rock') { //check if hand 1 is equal rock
      if (hand2 === 'paper') { // check if hand 2 is equal to paper
        return "Hand two wins!"; // if yes hand 2 wins
      } else {
        return "Hand one wins!"; //one wins
      }

    } else if (hand1 === 'paper') { // check if hand 1 is equal to paper
      if (hand2 === 'rock') { //check if hand 2 is equal
        return "Hand one wins!"; //if yes
      } else {
        return "Hand two wins!";
      }
    }
    // hand1 must be Scissors
    if (hand2 === 'rock') {
      return "Hand two wins!";
    } else {
      return "Hand one wins!";
    }

  } else {
    return false;
  }


}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2)); // enter isValid function
      getPrompt();
    });
  });
}

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
    it('should only accept rock paper scissors', () => {
      assert.equal(isValid('hello', 'goodbye'), "Invalid input!");
      assert.equal(isValid('hello', 'SCISSORS'), "Invalid input!");
      assert.equal(isValid('rock ', 'hello'), "Invalid input!");
    });

  });
} else {

  getPrompt();

}
