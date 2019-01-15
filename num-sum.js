function simpleAdding(num) {
  if (num === 0) {
    return 0;
  }

  return num + simpleAdding(num - 1);
}

console.log(simpleAdding(10));
