class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    add(value) {        
        const newNode = new Node(value);
        this.count++;
        const searchTree = (node) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }                
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right)
                }
            }          
        };

        searchTree(this.root);
    }

    min() {
        let value = this.root.value;
        let node = this.root;
        while (node.left) {
            value = node.left.value;
            node = node.left;
        }
        return value;
    }

    max() {
        let value = this.root.value;
        let node = this.root;
        while (node.right) {
            value = node.right.value;
            node = node.right;
        }
        return value;
    }

    contains(value) {
        let currentNode = this.root;
        
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    // left, root, right
    dfsInOrder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }

            result.push(node.value);

            if (node.right) {
                traverse(node.right);
            }
        };

        traverse(this.root);
        return result;
    }

    // root, left, right
    dfsPreOrder() { 
        const result = [];
        const traverse = (node) => {
            result.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }            
        }
        traverse(this.root);
        return result;
    }   

    // left, right, root
    dfsPostOrder() { 
        const result = [];
        const traverse = (node) => {            
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }    
            result.push(node.value);        
        }
        traverse(this.root);
        return result;
    }      

    bfs() {
        const result = [];
        const queue = [];

        queue.push(this.root);

        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node.value)

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }
}

const bt = new BinaryTree(12);
bt.add(10);
bt.add(4);
bt.add(25);
bt.add(33);
bt.add(22);
bt.add(2);
bt.add(7);
bt.add(9);
bt.add(8);

bt
console.log(bt.min());
console.log(bt.max());
console.log(bt.bfs());