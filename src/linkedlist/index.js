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
    let count = initialItemInList ? 1 : 0;

    if (!initialItemInList) {
      return count;
    }

    while (initialItemInList.next) {
      count++;
      initialItemInList = initialItemInList.next;
    }

    return count;
  }
}

module.exports = { Node, LinkedList };
