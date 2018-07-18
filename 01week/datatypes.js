'use strict'

const currentDayTime = () => {
  const today = new Date();
  const day = today.getDay();
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  let hour = today.getHours();
  console.log(hour);
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

console.log(currentDayTime());


const numToString = (num) => num.toString();

numToString(388);



const stringToNumber = (str) => Number(str);

stringToNumber('sixteen');


const whatType = (type) => typeof type;

whatType(true);


const addTwoNumbers = (num1, num2) => num1 + num2;
addTwoNumbers(57, 388);


const twoThingsTrue = (thing1, thing2) => {
  if (thing1 && thing2) {
    return true;
  }
}
twoThingsTrue(0, 66);


const oneOfTwo = (thing3, thing4) => {
  if (thing3 || thing4) {
    return true;
  }
}

oneOfTwo(null, 'jjj');


const bothNotTrue = (thing5, thing6) => {
  if (!thing5 && !thing6) {
    return true;
  }
}

bothNotTrue(0, 0);
