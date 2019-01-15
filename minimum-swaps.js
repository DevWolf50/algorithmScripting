//given an unique unordered array
//return the minimum number of swaps to sort the array

const array = [4, 3, 1 ,2];

function minSwap(arr = []) {
  if (arr.length === 0) {
    return 0;
  }
  //if the first number in the array is the lowest return rest of array
  const [first, ...rest] = arr;
  first;

  if (!rest.some(elem => elem < first)) {
    return minSwap(rest);
  }
  //else
  const swapedArr = [...rest];

  //find the position of lowest number in the array
  const lowestNumber = swapedArr.reduce((lowest, curr) =>
    curr < lowest ? curr : lowest
  );

  swapedArr.splice(rest.indexOf(lowestNumber), 1, first);
  //find the lowest and swap the position of the first item with the lowest
  return 1 + minSwap(swapedArr);
}

console.log(minSwap(array));

function minSwapAlt(arr = []) {
  let swaps = 0;
  let currArr = [...arr];

  for (let i = 0; i < arr.length; i += 1) {
    const [first, ...rest] = currArr;

    if (!rest.some(num => num < first)) {
      currArr = [...rest];
      continue;
    }

    const lowest = rest.reduce((lowest, curr) =>
      curr < lowest ? curr : lowest
    );

    rest.splice(rest.indexOf(lowest), 1, first);

    currArr = [...rest];
    swaps += 1;

  }

  return swaps;
}

console.log(minSwapAlt(array));
