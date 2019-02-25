//given two sorted arrays find the median of the two sorted arrays(m + n)
//overall run time complexity should be O(log(m + n))

function findMedianSortedArrays(arr0 = [], arr1 = []) {
  //calculate the middle
  const combined = [...arr0, ...arr1];
  const middle = Math.trunc(combined.length / 2);
  combined;
}

const test = findMedianSortedArrays([1, 3], [2]);
