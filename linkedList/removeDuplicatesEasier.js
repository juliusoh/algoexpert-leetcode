const linkedListData = {
  linkedList: {
    head: "1",
    nodes: [
      { id: "1", next: "1-2", value: 1 },
      { id: "1-2", next: "1-3", value: 1 },
      { id: "1-3", next: "2", value: 1 },
      { id: "2", next: "3", value: 3 },
      { id: "3", next: "3-2", value: 4 },
      { id: "3-2", next: "3-3", value: 4 },
      { id: "3-3", next: "4", value: 4 },
      { id: "4", next: "5", value: 5 },
      { id: "5", next: "5-2", value: 6 },
      { id: "5-2", next: null, value: 6 },
    ],
  },
};

const linkedListDataV2 = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 4,
            next: {
              value: 4,
              next: {
                value: 5,
                next: {
                  value: 6,
                  next: {
                    value: 6,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList(linkedListDataV2);
// console.log(linkedList)

//   Write a function that returns a modified version of the linked list
// that oesnt contain any nodes with duplicate values
function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode.next) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return linkedList;
}

console.log(removeDuplicatesFromLinkedList(linkedListDataV2));
