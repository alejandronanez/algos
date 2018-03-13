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
    this.head = new Node(data, this.head);
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
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;

      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    const node = new Node(data);

    if (!lastNode) {
      this.insertFirst(data);
    } else {
      lastNode.next = node;
    }

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
    const lastNode = this.getAt(listSize - 1);

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
}

module.exports = { Node, LinkedList };
