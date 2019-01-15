//given a 6 x 6 2d array
//return the highest sum of an hourglass

const checkIfHourGlass = (row = 0, column = 0) =>
  row > 3 ? false : column === 0 ? false : column === 5 ? false : true;

const getHourGlassValues = (row = 0, column = 0, array = []) =>
  array[row][column] +
  array[row][column - 1] +
  array[row][column + 1] +
  array[row + 1][column] +
  array[row + 2][column] +
  array[row + 2][column - 1] +
  array[row + 2][column + 1];

const addHourValues = (arr = []) => {
  let highestSum;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (checkIfHourGlass(i, j)) {
        let hGSum = getHourGlassValues(i, j, arr);
        if (hGSum > highestSum || typeof highestSum === 'undefined') {
          highestSum = hGSum;
        }
      }
    }
  }

  return highestSum;
};

const twoD = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

const ans = addHourValues(twoD);
ans;
