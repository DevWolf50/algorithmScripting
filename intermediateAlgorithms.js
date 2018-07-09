//given to numbers, sum all numbers within the range
//recursively add all numbers
const sumAll = (start, end) =>
  start > end ? 0 : start + sumAll(start + 1, end);

const sum = nums => sumAll(...nums.sort((a, b) => a - b));
