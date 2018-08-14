'use strict';

// for loop console logs each item in the array
const carsInReverse = ['porsche', 'camaro', 'mustang', 'corvette', 'barracuda'];

for (let i = 0; i < carsInReverse.length; i++) {

  console.log(carsInReverse[i]);
}

// object named person with info
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan. 5,1925",
  gender: "female"
};

// for in loop will console log the keys of object person
for (const x in person) {
  console.log(x);
}

/* using for in loop will iterate through keys until finding the birthDate key.
Will console log the value of the key birthDate  */
for (const y in person) {
  if (y === 'birthDate') {
    console.log(person[y]);
  }
}
/* while loop will loop and console log the numbers 1 through 1000, until
z is greater than 1000*/
let z = 1;
while (z <= 1000) {
  console.log(z);
  z += 1;
}

/* do While loop will also console log numbers 1 through 1000
until b is greater than 1000*/
let b = 1;
do {
  console.log(b);
  b += 1;
} while (b <= 1000);


/*
When is a for loop better than a while loop? the while loops are more appropriate when
the condition is a boolean value. The for loop is preferable when you have a certain
number of iterations you need to accomplish such as in arrays.
How is the readability of the code affected? The while loop code is easier to read
compared to the for loop code.
    */

/* What is the difference between a for loop and a for...in loop? for in loop is
shorter but if you want to have control over the iteration variable
use the for loop. Example(if you want to iterate over even indices ) use a regular
for loop.  */

/* What is the difference between a while loop and a do...while loop?
In While loop, condition is tested at the beginning of the loop and if the condition
is True then only statements inside the loop will be executed.In Do While loop,
condition is tested at the end of the loop so, Do While executes the statement in the
code block at least once even if the condition is false. */
