'use strict';

//FOR number IN list
//IF zero CONTINUE
// FOR number in List starting at 2nd index
//IF number does not share a common denominator
//Continue
//FOR number IN list starting at 3rd index
//IF all 3 numbers share a common denominator
//ADD one to tally
//IF not
//CONTINUE

function countTriplets(arr = [], r = 0) {
  const map = {};
  //IF length of array < 3
  if (arr.length < 3) return 0;

  //FOR number IN list from the end
  for (let num of arr) {
    //if number is divisble by common denom
    if (num % r === 0 || num === 1) {
      //add to hash table and add 1 to value
      map[num] = map.hasOwnProperty(num) ? (map[num] += 1) : 1;
    }
  }

  const mapKeys = Object.keys(map);
  //IF number of items in hash table is < 3
  if (mapKeys < 3) {
    return 0;
  }

  //FOR number IN Table
  const occurances = mapKeys.reduce((accu, curr, index, arr) => {
    //count number of instances of number
    if (
      index + 3 > arr.length ||
      !map[curr] * r === map[index + 1] ||
      !map[curr] * r === map[index + 2]
    ) {
      return accu;
    }
    return accu + map[curr] * map[arr[index + 1]] * map[arr[index + 2]];
  }, 0);
  //return occurances of geometric progression

  return occurances;
}

console.log(countTriplets([1, 5, 5, 25, 125], 5));
