const cToF = (celsius) => celsius * (9/5) + 32;

const reverseString = (str) => [...str].reverse().join('');

const factorialize = (num) => num == 0 ? 1 : num * factorialize(num - 1);
