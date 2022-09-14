class MinHeap {
  capacity = 10;
  size = 0;
  items = new Array(this.capacity);

  getLeftChildIdx(parentIdx) {
    return 2 * parentIdx + 1;
  }

  getRightChildIdx(parentIdx) {
    return 2 * parentIdx + 2;
  }  

  getParentIdx(childIdx) {            
    return Math.floor((childIdx - 1) / 2);
  }    

  hasLeftChild(idx) {
    return this.getLeftChildIdx(idx) < this.size;
  }

  hasRightChild(idx) {
    return this.getRightChildIdx(idx) < this.size;
  }  

  hasParent(idx) {
    return this.getParentIdx(idx) >= 0;
  }

  leftChild(idx) {
    return this.items[this.getLeftChildIdx(idx)];
  }

  rightChild(idx) {
    return this.items[this.getRightChildIdx(idx)];
  }  

  parent(idx) {
    return this.items[this.getParentIdx(idx)];
  }    

  swap(idxOne, idxTwo) {
    const temp = this.items[idxOne];
    this.items[idxOne] = this.items[idxTwo];
    this.items[idxTwo] = temp;
  }

  ensureExtraCapacity() {
    if (this.size === this.capacity) {      
      const oldItems = [...this.items];
      this.items = new Array(this.capacity * 2);
      this.items = [...this.items, ...oldItems];
    }
  }

  peek() {
    if (this.size === 0) {
      console.error('no elements in heap');
      return;
    }
    return items[0];
  }

  poll() {
    if (this.size === 0) {
      console.error('no elements in heap');
      return;
    }

    const item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();
    return item;
  } 
  
  add(item) {
    this.ensureExtraCapacity();
    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
  }

  // getParentIdx(childIdx) {    
  //   return (childIdx - 1) / 2;
  // }    

  heapifyUp() {
    let idx = this.size - 1;
    while (this.hasParent(idx) && this.parent(idx) > this.items[idx]) {
      const parentIdx = this.getParentIdx(idx);
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.hasLeftChild(idx)) {
      let smallerChildIdx = this.getLeftChildIdx(idx);
      if (this.hasRightChild(idx) && this.rightChild(idx) < this.leftChild(idx)) {
        smallerChildIdx = this.getRightChildIdx(idx);
      }

      if (this.items[idx] < this.items[smallerChildIdx]) {
        break;
      } else {
        this.swap(idx, smallerChildIdx);
        idx = smallerChildIdx;
      }
    }
  }
}

const heap = new MinHeap();
heap.add(3);
heap.add(5);
heap.add(1);
heap.add(10);
heap.add(2);
heap.add(6);
heap.add(8);

console.log(heap.poll());
console.log(heap.items);
