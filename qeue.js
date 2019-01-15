// queues are data structures that are great for keeping track of a list of actions
//queues use the the First In, First Our approach
//You can onlu proccess one queue at a time and must be proccessed in the same order they were queued

//factory function :)

function createQueue() {
  //create our queue closure
  let list = [];

  return {
    enqueue(item) {
      list.unshift(item);
    },
    peek() {
      return list[list.length - 1];
    },
    dequeue() {
      return list.pop();
    },
    get length() {
      return list.length;
    },
    isEmpty() {
      return list.length === 0;
    }
  };
}

exports.createQueue = createQueue;
