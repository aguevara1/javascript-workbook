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

function horizontalWin(playerTurn2) {
  // Your code here
  if( board[0][0]===playerTurn2 && board[0][1]===playerTurn2 && board[0][2]===playerTurn2){
       return true;
  }else if(board[1][0]===playerTurn2 && board[1][1]===playerTurn2 && board[1][2]===playerTurn2){
       return true;
   }else if(board[2][0]===playerTurn2 && board[2][1]===playerTurn2 && board[2][2]===playerTurn2){
        return true;
    }
}

function verticalWin(playerTurn2) {
  // Your code here
  if( board[0][0]===playerTurn2 && board[1][0]===playerTurn2 && board[2][0]===playerTurn2){
       return true;
  }else if(board[0][1]===playerTurn2 && board[1][1]===playerTurn2 && board[2][1]===playerTurn2){
       return true;
   }else if(board[0][2]===playerTurn2 && board[1][2]===playerTurn2 && board[2][2]===playerTurn2){
        return true;
    }
}

function diagonalWin(playerTurn2) {
  // Your code her
  if( board[0][0]===playerTurn2 && board[1][1]===playerTurn2 && board[2][2]===playerTurn2){
       return true;
  }else if(board[0][2]===playerTurn2 && board[1][1]===playerTurn2 && board[2][0]===playerTurn2){
       return true;
    }

    }

function checkForWin(playerTurn1) {
  // Your code here
  if(verticalWin(playerTurn1)){
    return true;
  }else if(horizontalWin(playerTurn1)){
    return true;
  }else if(diagonalWin(playerTurn1)){
    return true;
  }
}

// check if input is valid
function isValid(row1,column1){
  const possibleNumbers=[0,1,2];
  return possibleNumbers.indexOf(parseInt(row1,10)) !==-1 && possibleNumbers.indexOf(parseInt(column1,10))!== -1;

}



function ticTacToe(row, column) {
  // check for valid input

  if(isValid(row,column)){
    board[row][column]=playerTurn;

    if(checkForWin(playerTurn)){

      console.log( playerTurn+' Won!!!!');
       return true;
    }else{
      playerTurn= playerTurn==='X' ? playerTurn='O' : playerTurn='X';
    }


  } else{
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
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), 'true');
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
