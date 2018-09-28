//find the number of matches in an array

const numOfSocks = 9;
const socksArr = [10, 20, 20, 10, 10, 30, 50, 10, 20, 30, 10, 20, 10, 20, 10];

//loop through array
const sockMerchant = (arr = []) => {
  //if array length is 0 return 0
  if (arr.length === 0) {
    return 0;
  }

  //if current index does not have another match
  const [curr, ...rest] = arr;
  if (!rest.includes(curr)) {
    //call function agan with that element removed from the array
    return 0 + sockMerchant(rest);
  }

  // remove match from array
  rest.splice(rest.indexOf(curr), 1);

  //return 1 + function call with rest of array
  return 1 + sockMerchant(rest);
};

console.log(sockMerchant(socksArr));
