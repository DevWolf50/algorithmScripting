function arrayMan(num = 0, queries = []) {
  const newArr = createArray(num + 1);
  let highestValue = 0;

  for (let i = 0; i < queries.length; i += 1) {
    const [start, end, toAdd] = queries[i];

    newArr[start] += toAdd;

    if (end + 1 <= num) {
      end;
      newArr[end + 1] -= toAdd;
    }

    newArr;
  }

  let max = 0;
  let accu = 0;

  for (let i = 0; i < newArr.length; i++) {
    accu += newArr[i];
    if (accu > max) {
      max = accu;
    }
  }
  return max;
}

console.log(arrayMan(4, [[2, 3, 603], [1, 1, 286], [4, 4, 882]]));

function createArray(num = 0) {
  const arr = [];
  arr.length = num;
  arr.fill(0);
  return arr;
}

function addToIndices(arr = [], [start, end, toAdd] = query) {
  for (let i = start - 1; i < end - 1; i += 1) {
    arr[i] += toAdd;
  }

  return arr;
}
