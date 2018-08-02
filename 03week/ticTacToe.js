'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
//join() joins all elements of array into a string and returns string
function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code
  const horizontal = [0, 1, 2];
  let result = horizontal.some(indices => {
    return board[indices][0] == playerTurn && board[indices][1] == playerTurn && board[indices][2] == playerTurn
  });

  return result;
}

function verticalWin() {
  const vertical = [0, 1, 2];
  let result1 = vertical.some(indx => {
    return board[0][indx] == playerTurn && board[1][indx] == playerTurn && board[2][indx] == playerTurn
  });

  return result1;

}

function diagonalWin() {
  /*  if center space is equal to playerTurn then check the other 2.
      will return true if either of the 2 sets will evaluate to true
  */
  if (board[1][1] == playerTurn){
    return board[0][0] == playerTurn && board[2][2] == playerTurn ||
      board[0][2] == playerTurn && board[2][0] == playerTurn
  }

}

function checkForWin() {
  /* will call each of these functions and will return true if one
  of these functions returns true
  */
  return verticalWin() || horizontalWin() || diagonalWin();

}

/* check if input is valid. Input must be 1 of the possibleNumbers, if not return
   falsey
*/
function isValid(row1, column1) {
  const possibleNumbers = [0, 1, 2];
  return possibleNumbers.indexOf(parseInt(row1, 10)) !== -1 && possibleNumbers.indexOf(parseInt(column1, 10)) !== -1;

}

function reset() {

}

function ticTacToe(row, column) {
  // check for valid input
  if (isValid(row, column)) {
    board[row][column] = playerTurn;

    if (checkForWin()) {
      console.log(playerTurn + ' Has Won The Game!!!!');
      return true;
    } else {
      playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X';
    }

  } else {
    console.log("Enter numbers 0-2 only!!!!!!!!");
  }

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
