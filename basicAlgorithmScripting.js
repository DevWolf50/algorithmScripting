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

const confirmEnding = (str = '', endMatch = '') =>
  str.length > endMatch.length &&
  str.substr(str.length - endMatch.length) === endMatch;

const repeatStringNumTimes = (str = '', num = 0) => {
  let newStr = '';
  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;
};

const truncateString = (str, num) =>
  str.length > num ? `${str.slice(0, num)}...` : str;

const findElement = (arr, func) => arr.find(func);

const booWho = bool => typeof bool === 'boolean';

const titleCase = str =>
  str.toLowerCase().replace(/^\w|\s\w/g, match => match.toUpperCase());

const frankenSplice = (arr1, arr2, num) => {
  arr2.splice(num, 0, ...arr1);
  return arr2;
};

//removes all falsey values from an array
const bouncer = arr => arr.filter(elem => !!elem);

//return the index where a number would inserted in a sorted array
const getIndexToIns = (arr, num) => {
  const i = arr.sort((a, b) => a - b).findIndex(elem => num <= elem);

  return i >= 0 ? i : arr.length;
};

//check to see if all chars in the 2nd string exsist in the first string
const mutation = ([str1, str2]) => {
  const lowerStr1 = str1.toLowerCase();
  const arr = [...str2.toLowerCase()];

  return arr.reduce(
    (acc, elem) => (!lowerStr1.includes(elem) ? false : acc),
    true
  );
};

//chunk the 1st array in groups in length specified by the 2nd aregument
const chunkArray = (arr, num) =>
  //iterate over array
  arr.reduce((acc, elem, index) => {
    //find wich array this element belongs to
    const spot = Math.floor(index / num);

    //create the array group else add to it
    if (!acc[spot]) {
      acc[spot] = [elem];
    } else {
      acc[spot] = [...acc[spot], elem];
    }
    return acc;
  }, []);
