'use strict';

const assert = require('assert');

// global array
const arr = [1, 2, 3];

//  Works like forEach(). Returns undefined
const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (callback) {
      console.log("callback present");
      callback(arr[i]);
    }
  }
}


// works like map(), returns new array
const map = (arr, callback) => {
  const arr2 = [];

  for (let x = 0; x < arr.length; x++) {
    if (callback) {
      console.log("callback present");
      arr2.push(callback(arr[x]));
    }
  }
  return arr2;
}


// works like filter(), returns new array
const filter = (arr, callback) => {
  const arr3 = [];
  for (let y = 0; y < arr.length; y++) {
    if (callback(arr[y])) {
      console.log("callback present");
      arr3.push(arr[y]);
    }
  }

  return arr3;
}



// Test Cases
if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
