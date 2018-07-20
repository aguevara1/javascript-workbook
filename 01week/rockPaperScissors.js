'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rockPaperScissors = (hand1, hand2) => {
  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();
  hand1 = hand1.trim();
  hand2 = hand2.trim();

  const aTie = "It's a tie!";
  const oneWins = "Hand one wins!";
  const twoWins = "Hand two wins!";

  if (hand1 === hand2) {
    return aTie;
  } else if (hand1 === 'rock') {
    if (hand2 === 'paper') {
      return twoWins;
    } else {
      return oneWins;
    }

  } else if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return oneWins;
    } else {
      return twoWins;
    }

  }
  // hand1 must be Scissors
  if (hand2 === 'rock') {
    return twoWins;
  } else {
    return oneWins;
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

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
