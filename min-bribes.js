function minSwaps(arr = []) {
  let swaps = 0;

  //iterate through the array from end to begining
  for (let i = arr.length - 1; i >= 0; i--) {
    //if the a position swaped more than 2 time return Too chaotic
    if (arr[i] - 1 - i > 2) {
      return 'Too chaotic';
    }

    //check how many people bribed our current position
    for (let j = Math.max(0, arr[i] - 2); j < i; j++) {
      if (arr[j] > arr[i]) {
        swaps += 1;
      }
    }
  }

  return swaps;
}

console.log(minSwaps([1, 2, 5, 3, 7, 8, 6, 4]));
