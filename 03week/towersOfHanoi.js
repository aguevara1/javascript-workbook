'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//global object of arrays
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// function prints the stacks object of arrays
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// function will reset all the arrays to its original
const resetGame = () => {
  stacks.a = [4, 3, 2, 1];
  stacks.b = [];
  stacks.c = [];
}

/* function will check array length to determine a win. Either b or c must have a length
of 4 in order to win. function returns a truthy when either b or c array have length of 4.  */
const checkForWin = () => {
  return stacks.b.length == 4 || stacks.c.length == 4;
}

/* function removes last element of array referenced by startStack and pushes it to the end of
array referenced by endStack. */
const movePiece = (startStack, endStack) => {
  const poppedItem = stacks[startStack].pop();
  stacks[endStack].push(poppedItem);
}

/* function checks if move is legal. Finds array length startStack and endStack. Also
assigns value of last element into variables. Returns truthy (first case) startStack array length is
not 0 and endStack array length is equal to 0, or  (second case) the number in startStack is
less than endStack */
const isLegalMove = (start, end) => {

  const arrLengthStart = stacks[start].length;
  const arrLengthEnd = stacks[end].length;

  const lastElementStart = stacks[start][arrLengthStart - 1];
  const lastElementEnd = stacks[end][arrLengthEnd - 1];

  return arrLengthStart !== 0 && arrLengthEnd === 0 || lastElementStart < lastElementEnd;
}


/*  function creates array of possible valid values. Uses indexOf to check that input values
 are one of the possible values in array. Returns truthy when both startStack and endStack
 are one of the possibleValues in array and falsey when not. */
const isValidInput = (startStack2, endStack2) => {

  const possibleValues = ['a', 'b', 'c'];
  return possibleValues.indexOf(startStack2) !== -1 && possibleValues.indexOf(endStack2) !== -1;
}

/* (parent function)- first checks to trim whitespace/make lowercase the input. Will call
a succession of unit functions expecting a return of truthy from each function in order
to advance to next function call. First checks for valid input- calls function
isValidInput(), if function isLegal() returns truthy call function movePiece().
Will then call checkForWin(), if returns truthy prints final array stacks with
console.log of win message and calls resetGame() to start the game again from scratch  */
const towersOfHanoi = (startStack, endStack) => {

  const startStack1 = startStack.toLowerCase().trim();
  const endStack1 = endStack.toLowerCase().trim();

  if (isValidInput(startStack1, endStack1)) {

    if (isLegalMove(startStack1, endStack1)) {

      movePiece(startStack1, endStack1);

      if (checkForWin()) {

        printStacks();
        console.log("You Just Won Above, Game Is Reset Below, Keep Playing!!!!");

        resetGame();

      }

    } else {
      console.log("Invalid move, can only move smaller piece onto bigger piece");
    }

  } else {
    console.log("Invalid input! Enter(a,b or c)");

  }

}

/* Function prompts user to choose from what stack to move from and where to place piece.
  Will then call main function towersOfHanoi to start game. After each user input, function calls
  itself again to continue playing.
 */
const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Unit test cases
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

  describe('#isLegalMove()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegalMove('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegalMove('a', 'c'), true);
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
  })


  describe('#resetGame()', () => {
    it('should reset the arrays to original', () => {
      resetGame();
      assert.deepEqual(stacks, {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      });
    });
  });

} else {

  getPrompt();

}
