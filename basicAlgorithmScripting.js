const cToF = celsius => celsius * (9 / 5) + 32;

const reverseString = str => [...str].reverse().join('');

const factorialize = num => (num == 0 ? 1 : num * factorialize(num - 1));

const findLongestWordLength = str =>
  str
    .split(/\s/)
    .reduce((acc, elem) => (elem.length > acc ? elem.length : acc), 0);

const largestOfFour = arr =>
  arr.reduce(
    (acc, elem) => [
      ...acc,
      elem.reduce((acc, elem) => (elem > acc ? elem : acc))
    ],
    []
  );

const confirmEnding = (str = '', endMatch = '') => str.length > endMatch.length && str.substr(str.length - endMatch.length) === endMatch;

const repeatStringNumTimes = (str = '', num = 0) => {
  let newStr = '';
  for(let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;
}


const  truncateString = (str, num) => str.length > num ? `${str.slice(0, num)}...` : str;

const findElement = (arr, func) => arr.find(func);

const booWho = bool => typeof bool === 'boolean';

const titleCase = (str) => str.toLowerCase().replace(/^\w|\s\w/g, (match) => match.toUpperCase());
