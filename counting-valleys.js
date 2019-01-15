//given the number of steps and strings representing steps up or down
//output the number of valleys someone will walk have through

//there was a valley if we hit sea level on a U character
function countingValleys(n = 0, s = '') {
  let seaLevel = 0;
  let numOfValleys = 0;

  for (let step of s) {
    seaLevel += calcStep(step);

    if (step === 'U' && seaLevel === 0) {
      numOfValleys += 1;
    }
  }

  numOfValleys;
}

const calcStep = (s = '') => (s === 'U' ? 1 : -1);

const cv = (n = 0, s = '', sl = 0) => {
  if (s.length === 0) {
    return 0;
  }

  const [curr, ...rest] = s;

  if (curr === 'D') {
    return cv(n, rest, sl - 1);
  }

  sl += 1;
  return sl === 0 ? 1 + cv(n, rest, sl) : cv(n, rest, sl);
};

countingValleys(8, 'UDDDUDUU');

console.log(cv(8, 'UDDDUDUU'));
