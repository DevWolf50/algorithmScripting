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
