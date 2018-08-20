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
