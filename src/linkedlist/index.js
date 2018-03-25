// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  next() {
    return this.next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let initialItemInList = this.head;
    let count = 0;

    while (initialItemInList) {
      count++;
      initialItemInList = initialItemInList.next;
    }

    return count;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    this.insertAt(data, this.size());
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;

      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    const listSize = this.size();
    const newNode = new Node(data);
    const targetNode = this.getAt(index);
    const previousNode = this.getAt(index - 1);
    const lastNode = this.getLast();

    if (index > listSize) {
      lastNode.next = newNode;

      return;
    }

    if (!index) {
      this.head = newNode;
      newNode.next = targetNode;

      return;
    }

    if (!this.head) {
      this.head = newNode;

      return;
    }

    previousNode.next = newNode;
    newNode.next = targetNode;
  }

  forEach(fn) {
    let node = this.head;
    let index = 0;

    while (node) {
      fn(node, index);

      node = node.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
