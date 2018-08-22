'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker1 {
  constructor(color) {
    if(color==='red'){
      this.symbol='R';
    }else{
      this.symbol='B';
    }
  }

}


function Board() {
  this.grid = [];

  this.checkers = [];
  //place or push checkers in their starting position
  this.makeTheCheckers = function() {
    let theRs = [
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ];
    let theBs = [
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6]
    ];
    // for( let i=0; i<=11 ; i++){
    theRs.forEach((item, index) => {
      let theReds = new Checker1('red');
      let coordinate = theRs[index];
      // console.log(theReds);
      this.checkers.push(coordinate);
      this.grid[coordinate[0]][coordinate[1]] = theReds;

    });

    theBs.forEach((item, index) => {
      let theBlacks = new Checker1('black');
      let coordinate1 = theBs[index];
      // console.log(theReds);
      this.checkers.push(coordinate1);
      //console.log(this);
      this.grid[coordinate1[0]][coordinate1[1]] = theBlacks;
    });

    console.log(this.checkers.length);
  }


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
    const symbol = 'A';
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
          //console.log('in with symbol');
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
          //  console.log(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
          //console.log(this.grid[row][column]);
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

}

class Game {
  constructor() {
    this.board = new Board();

    this.start = function() {
      this.board.createGrid();
      this.board.makeTheCheckers();

    }
  }
  moveChecker(piece1, piece2) {

    let whatPiece = piece1.split('');
    let moveTo = piece2.split('');

    console.log(whatPiece);
    console.log(moveTo);
    console.log("hello i'm in moveChecker function");
    //console.log(this.board.grid);


    this.board.grid[moveTo[0]][moveTo[1]]=this.board.grid[whatPiece[0]][whatPiece[1]];
    this.board.grid[whatPiece[0]][whatPiece[1]]='';

  }

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
//game.moveChecker('50','41');





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
