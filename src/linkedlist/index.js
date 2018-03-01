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

  }
}

module.exports = { Node, LinkedList };
