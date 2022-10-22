// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sum = (a, b) => {
  return a + b;
};

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function isEqual(a, b) {
  return a === b;
}

// Write a function that takes a value as argument
// Return the type of the value
function typeOfValue(val) {
  return typeof val;
}

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

const nthChar = (str, num) => {
  return str[num - 1];
};

// Write a function that takes a string(a) as a argument
// Remove the first 3 characters from the string
// return the result

function removeFirstThreeChars(a) {
  return a.slice(3);
}

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

function removeLastThreeChars(a) {
  return a.slice(0, -3);
}

// Write a function that takes a string(a) as a argument
// Get the first 3 characters from the string
// return the result

function getFirstThreeChars(a) {
  return a.slice(0, 3);
}

// Write a function that takes a string(a) as a argument
// Extract the last 3 characters from the string
// return the result

function getLastThreeChars(str) {
  return str.slice(-3);
}

// Write a function that takes a string as a argument
// The string contains the subtring 'is'
// Return the index of 'is'

function indexOfIs(a) {
  return a.indexOf("is");
}

// Write a function that take a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

function stringAsKeyValue(a) {
  return { key: a };
}

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

function percent(a, b) {
  return (b * a) / 100;
}

// Write a function that takes a string (a) as a argument
// Extract the first half
// Return the result

function getStringFirstHalf(a) {
  return a.slice(0, a.length / 2);
}

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function isSmaller(a, b) {
  if (a < b) {
    return a / b;
  }
  return a * b;
}

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function isEven(a) {
  return a % 2 === 0 ? true : false;
}

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function mathExpression(a, b, c, d, e, f) {
  const sum = a + b;
  const sub = sum - c;
  const multi = sub * d;
  const divide = multi / e;
  const power = divide ** f;
  return power;
}

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function includesString(a, b) {
  if (a.includes(b)) {
    return b.concat(a);
  }
  return a.concat(b);
}

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function stringOccurences(a, b) {
  let count = 0;
  for (i = 0; i < b.length; i++) {
    if (a === b[i]) count++;
  }
  return count;
}

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function isWholeNumber(a) {
  return a % 1 === 0;
}

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function roundNumToSecondDigit(a) {
  return Math.round(a * 100) / 100;
}

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function splitNumToArray(a) {
  const toStr = String(a);
  const arr = [];
  const splittedStr = toStr.split("");
  splittedStr.forEach((str) => {
    let strToNum = Number(str);
    arr.push(strToNum);
  });
  return arr;
}
