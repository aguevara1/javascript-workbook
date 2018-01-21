'use strict'

function adding(num1, num2) {

  return num1 + num2;

}

adding(57, 388);

function currentDate() {

  const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  console.log(`Today is : ${daylist[day]}.`);
  let hour = today.getHours();

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  var minute = today.getMinutes();
  var second = today.getSeconds();

  return ("Current Time : " + hour + " : " + minute + " : " + second);

}

currentDate();


function numToString(num) {

  var n = num.toString();
  return n;
}

numToString(15); //function call


function stringToNumber(string) {

  return parseFloat(string); //use newNumber(str)

}

stringToNumber('45.8');


function whatType(variable) {

  const m = typeof variable;

  return m;


}

whatType('huuuu');

function adding(num1, num2) {

  const sum = num1 + num2;
  return sum;
}

adding(57, 388);


function check(num3, num4) {
  const j = 15;
  const message = 'both true';
  if (j > num3 && j > num4) {
    return message;
  } else {
    return false;
  }

}

check(33, 66);

function oneOfTwo(num5, num6) {
  const u = 7;
  const message1 = 'One of two are true';

  if (u > num5 || u > num6) {
    return message1;
  } else {
    return false;
  }

}

oneOfTwo(13, 12);

function bothNotTrue(num7, num8) {
  const h = 8;
  const message3 = 'both not true';
  if (h !== num7 && h !== num8) {
    return message3;
  } else {
    return false;
  }
}

bothNotTrue(5, 0);
