'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//global variables

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


const movePiece = (startStack, endStack) => {
  // Your code her

  const input = stacks[startStack].pop();
  stacks[endStack].push(input);
}


const isLegal = (start, end) => {
  const arrLengthStart = stacks[start].length;
  //  console.log(arrLengthStart);
  const arrLengthEnd = stacks[end].length;
  //  console.log(arrLengthEnd);

  const inputStart = stacks[start][arrLengthStart - 1];
  const inputEnd = stacks[end][arrLengthEnd - 1];

  return arrLengthEnd == 0 || inputStart < inputEnd;
}

const resetGame= () => {


}

const checkForWin = () => {
  // Your code here
  return stacks.b.length == 4 || stacks.c.length == 4;
}

const isValidInput = (startStack2, endStack2) => {

  const possibleValues = ['a','b','c'];

  return possibleValues.indexOf(startStack2) !== -1 && possibleValues.indexOf(endStack2) !== -1;
}


const towersOfHanoi = (startStack, endStack) => {
   /*trim any whitespace and also make all input lowercase before sending it
   to isValidInput()
   */
  const startStack1= startStack.toLowerCase().trim();
  const endStack1 = endStack.toLowerCase().trim();

  // Your code here
  if (isValidInput(startStack1, endStack1)) {

    if (isLegal(startStack1, endStack1)) {

      movePiece(startStack1, endStack1);

      if (checkForWin()) {
        console.log("You Just Won!!!!");
        // if win, call reset in HERE

      }

    } else {
      console.log("Invalid move, can only move smaller piece onto bigger piece");
    }

  } else {
    console.log("Invalid input! Enter(a,b or c)");

  }

}


const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests
if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });

  });

  describe('#isValidInput()', () => {
    it('should only accept letters a,b or c ', () => {
      assert.equal(isValidInput('h', 'b'), false);
      assert.equal(isValidInput('a', 'f'), false);
      assert.equal(isValidInput('t', 'k'), false);
      assert.equal(isValidInput('', ''), false);

    });

  /*  it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(isValidInput('A', ' b '), true);
      assert.equal(isValidInput(' C', ' A'), true);
      assert.equal(isValidInput('b ', 'C'), true);

    });  */

  })

} else {

  getPrompt();

}
