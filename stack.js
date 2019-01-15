//a stack is a data structure that follows the principle of last in first out
// its like a stack of lunch treys
//you can only take off the last stack
//this is useful for function calls

//factory function
function createStack() {
  //array held in closure
  let list = [];
  return {
    push(item) {
      list.push(item);
    },
    pop() {
      list.pop();
    },
    peak() {
      return list[list.length - 1];
    },
    get length() { //getter function ensures we always get the current array length
      return list.length;
    },
    isEmpty() {
      return list.length === 0;
    }
  };
}

const stack = createStack();

stack.push('regina');
stack.push('joe');
stack.push('indie');
stack.pop();

console.log(stack.peak());

console.log(stack.isEmpty());
