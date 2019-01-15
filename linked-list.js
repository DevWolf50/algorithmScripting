//linked lists are data structures that one element in the list links itself to the next element

function createNode() {
  return {
    value,
    next: null
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    isEmpty() {
      return this, this.length === 0;
    }
  };
}
