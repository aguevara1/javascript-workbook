'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checkers {
  constructor(letter) {
    this.letter= letter;
  }

}

//const symbol= new Checkers("A");

/*
function Checker() {
    // Your code here

}
*/

function Board() {
  this.grid = [];

  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        if ((row + column) % 2 === 0) {
          this.grid[row].push(null);
        } else {
          this.grid[row].push('valid');
        }
        //    this.grid[row].push('X');
        //console.log(this.grid[row]);
      }
    }
  };


  // prints out the board
  this.viewGrid = function() {
  //  console.log(this);
  this.symbol='A';
  //  console.log(this.symbol);
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          console.log('in with symbol');
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
           console.log(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
          console.log(this.grid[row][column]);
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  // Your code here
}



function Game() {
  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
  };
}

function moveChecker(piece1, piece2) {
  console.log("hello i'm in moveChecker function");
}


function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}


const game = new Game();
game.start();
//game.moveChecker();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function() {
    it('should move a checker', function() {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
