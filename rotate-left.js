//given an array and an int
//rotate the array left int spaces

const rotateLeft = (arr = [], d = 0) =>
  arr.map((elem, index, arr) => {
    index;
    console.log(arr[(index + d + 1) % arr.length]);

    return arr[(index + d) % arr.length];
  });

const ans = rotateLeft([1, 2, 3, 4, 5], 4);
