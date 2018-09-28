//palinddrome checker
//will check if the given string is a palinddrome if not will return false

//remove all non alphanumeric characters
//iterate through string
function palindromeCheck(str = '') {
  if (str.length <= 1) {
    return true;
  }

  const endIndex = str.length - 1;

  if (str[0] !== str[endIndex]) {
    return false;
  }

  return palindromeCheck(str.slice(1, endIndex));
}

const cleanString = (str = '') => str.replace(/[\s\W_]/g, '').toLowerCase();

//Roman Numeral Converter
//convert the given number to a romanNumeral

const romanMap = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

const convertToRoman = (num = 0, map = {}) =>
  Object.keys(map).reduceRight((accu, curr) => {
    if (num < curr) return accu;

    accu += map[curr].repeat(Math.trunc(num / curr));
    num = num % curr;

    return accu;
  }, '');

//Caesar Cipher
//takes a encoded string
//returns a decoded string using rot13

//all letters will be uppercased
const rotate13 = (ltr = '') =>
  String.fromCharCode(((ltr.charCodeAt(0) - 65 + 13) % 26) + 65);

const caesarsCipher = str => str.replace(/\w/gi, rotate13);

//us tele number validator

const teleValidator = str => {
  const regexCheck = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  const countryCodeCheck = /^\d[\s(]/;

  if (countryCodeCheck.test(str) && str[0] != 1) {
    return 'not valid country code';
  }

  return regexCheck.test(str);
};

//Cash Register

//a cash drawrer function that will take:
//cost of item
//amount paid
//cash in drawer
//Will output status and change

function checkCashRegister(cost = 0, paid = 0, cid = []) {
  //determine if there is enough cash in drawer
  const totalCID = parseFloat(
    cid.reduce((accu, curr) => accu + curr[1], 0).toFixed(2)
  );

  let change = parseFloat((paid - cost).toFixed(2));

  if (totalCID < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  if (totalCID == change) {
    return { status: 'CLOSED', change: cid };
  }

  const currencyMap = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100
  };

  //greedy change function
  const changeArray = cid.reduceRight((accu, curr) => {
    if (currencyMap[curr[0]] > change) return accu;
    if (change >= curr[1]) {
      change -= curr[1];
      return [...accu, curr];
    }
    const value =
      currencyMap[curr[0]] * Math.trunc(change / currencyMap[curr[0]]);
    change -= value;
    change = change.toFixed(2);
    return [...accu, [curr[0], value]];
  }, []);
  return { Status: 'OPEN', change: changeArray };
}
