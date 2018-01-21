'use strict'

function currentDayTime() {
  const today = new Date();
  const day = today.getDay();
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }
  console.log(`Today is : ${dayList[day]}.`);
  return ("Current Time : " + hour + " : " + minute + " : " + second);
}

currentDayTime();


function numToString(num) {
  return num.toString();
}

numToString(388);



function stringToNumber(string) {
  return Number(string);
}

stringToNumber('sixteen');


function whatType(type) {
  return typeof type;
}

whatType(true);


function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
addTwoNumbers(57, 388);


function twoThingsTrue(thing1, thing2) {
  const message = 'both true';
  if (thing1 && thing2) {
    return message;
  } else {
    return false;
  }
}

twoThingsTrue(true, 66);


function oneOfTwo(thing3, thing4) {
  const message1 = 'One of two are true';
  if (thing3 || thing4) {
    return message1;
  } else {
    return false;
  }
}

oneOfTwo(8, 9);


function bothNotTrue(thing5, thing6) {
  const message3 = 'both not true';
  if (!thing5 && !thing6) {
    return message3;
  } else {
    return false;
  }
}

bothNotTrue('', undefined);
