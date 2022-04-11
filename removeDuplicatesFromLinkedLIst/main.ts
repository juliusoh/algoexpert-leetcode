// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    // Write your code here.
      let currentNode: LinkedList | null = linkedList
      console.log(currentNode, "currentNode")
      while (currentNode !== null) {
          let nextDistinctNode: LinkedList | null = currentNode.next
          console.log(nextDistinctNode, "nextDistinctNode")
          while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
              nextDistinctNode = nextDistinctNode.next
              console.log(nextDistinctNode, "nextDistinctNode state change")
          }
          currentNode.next = nextDistinctNode
          currentNode = nextDistinctNode
      }
    return linkedList;
  }

const fuck = new LinkedList(
    "linkedList": {
      "head": "1",
      "nodes": [
        {"id": "1", "next": "1-2", "value": 1},
        {"id": "1-2", "next": "1-3", "value": 1},
        {"id": "1-3", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 3},
        {"id": "3", "next": "3-2", "value": 4},
        {"id": "3-2", "next": "3-3", "value": 4},
        {"id": "3-3", "next": "4", "value": 4},
        {"id": "4", "next": "5", "value": 5},
        {"id": "5", "next": "5-2", "value": 6},
        {"id": "5-2", "next": null, "value": 6}
      ]
    }
  )
  
removeDuplicatesFromLinkedList()