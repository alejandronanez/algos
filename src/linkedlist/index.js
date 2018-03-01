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

    if (this.size() === 1) {
      this.head = null;

      return this.head;
    }

    this.head = this.head.next;

    return this.head;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    if (this.size() === 1) {
      this.head = null;

      return this.head;
    }

    let count = 1;
    let node = this.head;

    while (count < this.size() - 1) {
      count++;
      node = node.next;
    }

    node.next = null;
  }
}

module.exports = { Node, LinkedList };
