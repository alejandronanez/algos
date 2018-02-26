/**
 * Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: enqueue, which inserts an element into the queue, and dequeue, which removes it.
 */

class Stack {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data = [element, ...this.data];
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  enqueue(element) {
    this.first.enqueue(element);
  }

  remove() {
    while(this.first.peek()) {
      this.second.enqueue(this.first.remove());
    }

    const data = this.second.remove();

    while(this.second.peek()) {
      this.first.enqueue(this.second.remove());
    }

    return data;
  }
}

module.exports = Queue;
