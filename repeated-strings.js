//given an infinite sequence of chars
//find the occurrences of 'a' within the first 'n' letters

const countAs = (s = '') =>
  [...s].reduce((acc, curr) => (curr === 'a' ? acc + 1 : acc), 0);

function repeatedString(s = '', n = 0) {
  let numOfAs = 0;

  let a = countAs(s);

  const m = Math.trunc(n / s.length);

  numOfAs = a * m;

  if (n % s.length > 0) {
    numOfAs += countAs(s.substr(0, n % s.length));
  }

  return numOfAs;
}

console.log(repeatedString('aba', 10));
