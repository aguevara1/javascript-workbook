'use strict'

const currentDayTime = () => {
  const today = new Date();
  const day = today.getDay(); // day will hold index for the day of week
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
   // if military hour is over 12 convert to regular hours
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }
    // consoling the day and also the clock time
  console.log(`Today is : ${dayList[day]}.`);
  return ("Current Time : " + hour + " : " + minute + " : " + second);
}
// function call and send to console
console.log(currentDayTime());

 // function converts number to string and returns it
const numToString = (num) => num.toString();

numToString(388);

// function converts string to number and returns it
const stringToNumber = (str) => Number(str);

stringToNumber('sixteen');

 //function returns the type of the variable passed to it
const whatType = (type) => typeof type;

whatType(true);

// adding 2 numbers and returns result
const addTwoNumbers = (num1, num2) => num1 + num2;
addTwoNumbers(57, 388);

//checks if 2 variables are truthy, if so returns true
const twoThingsTrue = (thing1, thing2) => {
  if (thing1 && thing2) {
    return true;
  }
}
twoThingsTrue(0, 66);

// checks if 1 of the 2 are truthy
const oneOfTwo = (thing3, thing4) => {
  if (thing3 || thing4) {
    return true;
  }
}

oneOfTwo(null, 'jjj');

// both arguments must not be truthy
const bothNotTrue = (thing5, thing6) => {
  if (!thing5 && !thing6) {
    return true;
  }
}

bothNotTrue(0, 0);
