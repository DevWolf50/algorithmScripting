//given to numbers, sum all numbers within the range
//recursively add all numbers
const sumAll = (start, end) =>
  start > end ? 0 : start + sumAll(start + 1, end);

const sum = nums => sumAll(...nums.sort((a, b) => a - b));

//return the symmetric difference between two arrays
const diffArray = (arr1, arr2) => {
  //iterate through the first array
  //if an element is not in the 2nd array store it
  const diff1 = arr1.filter(elem => !arr2.includes(elem));

  //iterate through the 2nd array
  //if an element is not in the 1st array store it
  const diff2 = arr2.filter(elem => !arr1.includes(elem));

  //return both arrays combinedP
  return [...diff1, ...diff2];
};

const diffArray2 = (arr1, arr2) =>
  //combine both arrays
  [...arr1, ...arr2].filter(
    (elem, index, arr) =>
      //find only elements that don't exists in the rest of the array and is the first occurrence in the array
      !arr.slice(index + 1).includes(elem) && arr.indexOf(elem) === index
  );

//will remove elements from an array(first argument) that match the rest of the arguments
const destroyer = (arr, ...destroy) =>
  arr.filter(elem => !destroy.includes(elem));

//will return an array of all objects that contain a specific prop and value pair
const whatIsInAName = (arr, testObj) =>
  arr.filter(elem =>
    Object.keys(testObj).every(key => elem[key] == testObj[key])
  );

//converts a string to spinal case
const spinalCase = str =>
  str
    .replace(
      /[\s_]|[a-z](?=[A-Z])/g,
      str => (/[a-z]/.test(str) ? `${str}-` : '-')
    )
    .toLowerCase();

const pigS = str => str.replace(/([^aeiou]+)(\w+)/, '$2$1ay');

const Pigme = str => (/^[aeiou]/.test(str) ? `${str}way` : pigS(str));

const translatePig = str => {
  const [firstChar] = str;

  if (/[aeiou]/.test(firstChar)) {
    return `${str}way`;
  }

  let firstVowelIndex = str.split('').findIndex(elem => /[aeiou]/.test(elem));
  firstVowelIndex = firstVowelIndex < 0 ? str.length : firstVowelIndex;

  return `${str.slice(firstVowelIndex)}${str.slice(0, firstVowelIndex)}ay`;
};

const myReplace = (str, before, after) =>
  str.replace(
    before,
    m =>
      m[0].charCodeAt(0) < 97 ? after[0].toUpperCase() + after.slice(1) : after
  );

//takes a dna strand and returns a 2d array with each characters missing elements
const pairELement = ([...str]) => {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  return str.map(elem => [elem, pairs[elem]]);
};

//finds the missing letter in a letter range or returns undefined
const hasMissingLetter = (elem, index, arr) =>
  index !== arr.length - 1 &&
  arr[index + 1].charCodeAt(0) - elem.charCodeAt(0) !== 1;

const findCharB4 = arr => arr.find(hasMissingLetter);

const nextChar = char => String.fromCharCode(char.charCodeAt(0) + 1);

const missingLetter = ([...str]) =>
  findCharB4(str) ? nextChar(findCharB4(str)) : findCharB4(str);

//joins 2 arrays and removes any duplicates.
const removeDupes = (accu, curr, index, arr) =>
  arr.indexOf(curr) === index ? [...accu, curr] : accu;

const sortedArray = (arr0, arr1) => [...arr0, ...arr1].reduce(removeDupes, []);
console.log(sortedArray([7, 1, 2, 3, 4, 5], [3, 5, 6, 7]));

//takes a string and converts characters to their coresponding html entity
const convertHTML = str => {
  const key = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  return str.replace(/[&<>"']/g, m => key[m]);
};

//sums all odd Fibonacci numbers up to your argument

//creates an array of the Fibonacci sequence up to the number given
function fibbList(end = 0, list = [0, 1]) {
  if (list[list.length - 1] + list[list.length - 2] > end) {
    return list;
  }
  const nextFibNum = list[list.length - 1] + list[list.length - 2];

  return fibbList(end, [...list, nextFibNum]);
}

//sums all odd numbers in an array
const sumOddNums = (sum, curr) => (curr % 2 != 0 ? curr + sum : sum);

const sumOddFibb = num => fibbList(num).reduce(sumOddNums, 0);

//sum all prime numbers to a given number
function isPrime(num = 0, curr = num - 1) {
  if (curr == 1) {
    return true;
  }

  if (num % curr == 0) {
    return false;
  }

  return isPrime(num, curr - 1);
}

function primeList(num = 0, list = []) {
  if (num == 1) {
    return list;
  }

  list = isPrime(num) ? [num, ...list] : list;
  return primeList(num - 1, list);
}

const sumArray = (sum, num) => sum + num;

const sumPrimes = (num = 0) => primeList(num).reduce(sumArray);

//find the lowest common factorial within a range of numbers
const isFactorial = (num0 = 0, num1 = 0) => num0 % num1 === 0;

const checkIfCommonFactorial = (arr = [], num = 0) =>
  arr.every(elem => isFactorial(num, elem));

//create an array of range of numbers given an array of 2 numbers sorted
const createRangedArray = ([start = 0, end = 0], rangedArray = []) =>
  start > end
    ? rangedArray
    : createRangedArray([start + 1, end], [...rangedArray, start]);

const findLowestCommonFactorial = (arr, num = arr[1]) =>
  checkIfCommonFactorial(createRangedArray(arr), num)
    ? num
    : findLowestCommonFactorial(arr, num + 1);

//iterates through an array using a function to check for a condition once the condition returns true return the rest of the array
const drop = (arr = [], index = 0) => (index < 0 ? [] : arr.slice(index));
const dropping = (arr = [], fn) => drop(arr, arr.findIndex(fn));

//recursively flatten an array
const flat = (arr = [], flatArr = []) =>
  arr.reduce(
    (accu, curr) => (Array.isArray(curr) ? flat(curr, accu) : [...accu, curr]),
    flatArr
  );

//convert binary string to text
const binaryConversion = (str = '') =>
  str
    .split(' ')
    .map(elem => String.fromCharCode(Number.parseInt(elem, 2)))
    .join('');

//check if all collections in an array have a truthy value of a specific prop
const truthyCheck = (collection = [], prop = '') =>
  collection.every(elem => elem[prop]);

//a function that will sum two numbers together
function addTogether(num1, num2) {
  if (typeof num1 != 'number') {
    return undefined;
  }
  //if no 2nd argument
  if (!num2) {
    return sum;
  }

  function sum(num2) {
    return typeof num2 != 'number' ? undefined : num1 + num2;
  }

  return sum(num2);
}

console.log(addTogether(1)(8));
