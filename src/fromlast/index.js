// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let head = list.getAt(0);
  let tail = list.getAt(0);
  let count = 0;

  while (count < n) {
    tail = tail.next;
    count++;
  }

  while (tail.next) {
    head = head.next;
    tail = tail.next;
  }

  return head;
}

module.exports = fromLast;
