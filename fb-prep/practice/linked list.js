class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    size() {
        let node = this.head;
        let size = 0;
        while (node.next) {
            node = node.next;
            size++;
        }
        return size;
    }

    getLast() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }
}

const node1 = new Node('a');
const node2 = new Node('b');
const node3 = new Node('c');

node1.next = node2;
node2.next = node3;

const list = new LinkedList(node1);
console.log(list.size());
console.log(list.getLast().data);
