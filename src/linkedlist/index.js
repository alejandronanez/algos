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

  getAt(position) {
    if (position > this.size()) {
      return null;
    }

    let positionCounter = 0;
    let node = this.head;

    while (node) {
      if (positionCounter === position) {
        return node;
      }

      node = node.next;
      positionCounter++;
    }
  }
}

module.exports = { Node, LinkedList };
