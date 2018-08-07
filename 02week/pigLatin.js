'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//global variables
const theVowels = ['a', 'e', 'i', 'o', 'u'];
let doesItContainVowel=false;

//ascii keyboard lowercase values a-z are 97 to 122
// compare and check for values of the characters in string
// to not be outside of this range, if not in range return false
const isValid = (word) => {
  for(const letter of word){
    if(letter <'a' || letter >'z'){
      return false;
    }
  }
  return true;
}

// put string into a new array with split()
// forEach loop to check each vowel to see if returns a valid indexOf
// if finds valid index in firstArr, will push index number to uptoVowel array
// and assign global variable doesItContainVowel to true
const findVowelIndex = (anotherWord) => {
  const uptoVowel = [];
  const firstArr = anotherWord.split('');
  doesItContainVowel=false;

  theVowels.forEach( (element) => {
    if(firstArr.indexOf(element) !== -1){
      uptoVowel.push(firstArr.indexOf(element));
      doesItContainVowel=true;
    }
  });
  // sort arranges smallest index number at the beginning of array
  // returns the index number to parent function
  uptoVowel.sort()
  return uptoVowel[0];
}

//function will return word in piglatin
//will trim white space and make lowercase then call function isValid
//to make sure user entered valid input
const pigLatin = (word) => {

  const wordTrimmedLowerCase = word.trim().toLowerCase();
  if (wordTrimmedLowerCase && isValid(wordTrimmedLowerCase)) {

    //findVowelIndex() will return the index of first vowel
    const theVowelIndex=findVowelIndex(wordTrimmedLowerCase);

    // if global variable doesItContainVowel was set to false
    if(doesItContainVowel===false){
      return "Enter a regular word!!";
    }else{
      if(theVowelIndex===0){
        return wordTrimmedLowerCase+'yay';
      }else{
        return `${wordTrimmedLowerCase.substr(theVowelIndex)}${wordTrimmedLowerCase.substr(0,theVowelIndex)}ay`;
      }
    }

  } else {
    return "Enter a word";
  }

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}


// Tests
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
