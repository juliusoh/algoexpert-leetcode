// enqeueue add an element to the queue
// dequeue remove oldest element from the queue

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) { 
        this.items.push(value);
    }

    dequeue() {
        return this.items.shift();
    }

    print() {
        console.log(this.items);
    
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2)
queue.enqueue(3)
queue.print();
queue.dequeue();
queue.print();