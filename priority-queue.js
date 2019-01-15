//a priority queue is similar to queue but adds functionality to add
//tasks to the top of a que
//this is accomplished by creating two queues and creating an api to interact as one

const { createQueue } = require('./qeue');

function createPriorityQueue() {
  let highPriorityQueue = createQueue();
  let lowPrioirityQueue = createQueue();

  return {
    enqueue(item, highPriority = false) {
      const queue = highPriority ? highPriorityQueue : lowPrioirityQueue;
      queue.enqueue(item);
    },
    dequeue() {
      const queue = highPriorityQueue.isEmpty
        ? lowPrioirityQueue
        : highPriorityQueue;
      return queue.dequeue();
    },

    peak() {
      const queue = highPriorityQueue.isEmpty
        ? lowPrioirityQueue
        : highPriorityQueue;

      return queue.peek();
    },

    get length() {
      return highPriorityQueue.length + lowPrioirityQueue.length;
    },

    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPrioirityQueue.isEmpty();
    }
  };
}

let queue = createQueue();

queue.enqueue('hello joe');
queue.enqueue('hello reg');
queue.enqueue('hello indie');

console.log(queue.dequeue());

queue.enqueue('urgent', true);

console.log(queue.peek());
console.log(queue.dequeue());

console.log(queue.length);
