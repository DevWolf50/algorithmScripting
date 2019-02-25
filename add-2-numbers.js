//you are given 2 linked list that represent a non negative number in reverse order.
//add the two numbers and return the answer in the linked list

function getValuesFromLinkedList(ll) {
  let currentNode = ll;
  let vals = [];

  while (currentNode.next) {
    vals = [...vals, currentNode.value];
    currentNode = currentNode.next;
  }

  //grab last nodes value
  vals = [...vals, currentNode.value];
  return vals;
}

const createListNode = value => ({
  value,
  next: null
});

function createLinkedList(nums = []) {
  let linkedList = {
    head: null,
    tail: null
  };

  nums.forEach(num => {
    const newNode = createListNode(num);

    if (linkedList.tail) {
      linkedList.tail.next = newNode;
      linkedList.tail = newNode;
    }

    if (!linkedList.head) {
      linkedList.head = newNode;
      linkedList.tail = newNode;
    }
  });

  return linkedList.head;
}

function addTwoNumbers(l1, l2) {
  const num1 = getValuesFromLinkedList(l1)
    .reverse()
    .join('');

  const num2 = parseInt(
    getValuesFromLinkedList(l2)
      .reverse()
      .join('')
  );

  let total = +num1 + num2;
  total = total.toPrecision(31).replace(/\..*/, '');

  const arrTotal = [...total.toString()].map(Number).reverse();
  arrTotal;
  return createLinkedList(arrTotal);
}

const testList0 = createLinkedList([
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1
]);
const testList1 = createLinkedList([5, 6, 4]);
const testList2 = createLinkedList([2, 4, 3]);

const test = addTwoNumbers(testList0, testList1);
test;

let testn = 12345;

let testnarr = [...testn.toString()];

let hmm = testnarr.map(Number);

//Final solution
//Recursion is so beautiful

function addTwoNumbers2(l1, l2, carryover = 0) {
  if (!l1 && !l2 && !carryover) {
    return null;
  }

  const value1 = l1 ? l1.value : 0;
  const value2 = l2 ? l2.value : 0;

  const total = (value1 + value2 + carryover) % 10;

  return {
    val: total,
    next: addTwoNumbers(
      l1.next,
      l2.next,
      (value1 + value2 + carryover) / 10 > 0 ? 1 : 0
    )
  };
}

const testing = addTwoNumbers2(testList2, testList1);
