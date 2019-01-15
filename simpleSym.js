const simpleSymbol = (str = '') => {
  return str.split('').reduce((status, curr, index, arr) => {
    if (!/\w/.test(curr)) {
      return status;
    }

    if (arr[index - 1] !== '+' || arr[index + 1] !== '+') {
      return false;
    }

    return status;
  }, true);
};

console.log(simpleSymbol('f++d+'));
