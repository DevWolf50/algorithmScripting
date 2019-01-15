'use strict';

function twoStrings(s1, s2) {
  const s1Array = [...s1];
  // for every char in string n
  for (let char of s2) {
    if (s1Array.includes(char)) {
      return true;
    }
  }

  return false;
}

console.log(twoStrings('hi', 'world'));
