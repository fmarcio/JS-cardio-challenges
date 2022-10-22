// BRAD TRAVERSY JS CHALLENGES - MY ANSWERS

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = (str) => {
  let arr = [];

  for (let letter of str) {
    arr.unshift(letter);
  }

  return arr.toString().replaceAll(",", "");
};

console.log(reverseString("hello"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// Works only with single-worded palindromes.
// Later I'll update this function to make it work with multi worded ones
const isPalindrome = (str) => {
  let arr = [];

  for (let letter of str) {
    arr.unshift(letter);
  }

  const arrToString = arr.toString().replaceAll(",", "");

  return arrToString.includes(str);
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = (int) => {
  const intToStr = int.toString();

  let arr = [];

  for (let i of intToStr) {
    arr.push(i);
  }

  const reverseArr = arr.reverse();

  const reversedArrToString = reverseArr.toString().replaceAll(",", "");

  return Number(reversedArrToString);
};

console.log(reverseInt(521));

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

const capitalizeLetters = (str) => {
  const arrSplittedStr = str.split(" ");

  for (let i = 0; i < arrSplittedStr.length; i++) {
    arrSplittedStr[i] =
      // grab each arr item first letter, uppercase it and concatenate it to the remaining letters of the word
      arrSplittedStr[i].charAt(0).toUpperCase() + arrSplittedStr[i].slice(1);
  }

  const newStr = arrSplittedStr.join(" ");

  return newStr;
};

console.log(capitalizeLetters("i love javascript"));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

const maxCharacter = (str) => {
  const charsObj = {};
  let maxCount = 0;
  let maxChar = "";

  str.split("").forEach((char) => {
    if (charsObj[char]) {
      charsObj[char]++;
    } else {
      charsObj[char] = 1;
    }
  });

  for (let char in charsObj) {
    if (charsObj[char] > maxCount) {
      maxCount = charsObj[char];
      maxChar = char;
    }
  }

  return `The max char is '${maxChar}', which is counted ${maxCount} times`;
};

console.log(maxCharacter("cookie"));

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();
