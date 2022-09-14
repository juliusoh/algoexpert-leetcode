class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }


    insert(value) {
        let currentNode = this
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new BST(value)
                    break;
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = new BST(value)
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    contains(value) {
        let currentNode = this;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
    }

    remove(value, parentNode = null) {
        let currentNode = this;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else {
                if (currentNode.left && currentNode.right) {
                    currentNode.value = currentNode.right.getMinValue()
                    // currenntNode.value = smallest value of right sub tree
                    currentNode.right.remove(currentNode.value, currentNode)
                } else if (parentNode.left === currentNode) {
                    parentNode.left = currentNode
                }
            }
        }
    }

    getMinValue() {

    }
}

const bt = new BST(10);
bt.insert(5);
bt.insert(15);
bt.insert(2);
bt.insert(5);
bt.insert(13);
bt.contains(15)
bt.contains(5)
console.log(bt)