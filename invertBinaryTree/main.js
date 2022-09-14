const treeData = {
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "right": "3", "value": 1},
        {"id": "2", "left": "4", "right": "5", "value": 2},
        {"id": "3", "left": "6", "right": "7", "value": 3},
        {"id": "4", "left": "8", "right": "9", "value": 4},
        {"id": "5", "left": null, "right": null, "value": 5},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "9", "left": null, "right": null, "value": 9}
      ],
      "root": "1"
    }
  }
const findNodeInfoById = (id) => treeData.tree.nodes.find((item) => item.id === id);

const buildTree = (nodeId) => {
  const nodeInfo = findNodeInfoById(nodeId);
  const node = new BST(nodeInfo.value);
  if (nodeInfo.left) {
    node.left = buildTree(nodeInfo.left);
  }

  if (nodeInfo.right) {
    node.right = buildTree(nodeInfo.right);
  }

  return node;
};
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const binaryTree = buildTree(treeData.tree.root);
// console.log(tree);
console.log(binaryTree)

//       1
//    /   \
//   2     3
//  / \   / \
//  4   5 6   7
//  / \
// 8   9
function invertBinaryTree(tree) {
    const queue = [tree];
    // BFS level by level
    while (queue.length > 0) {
        const current = queue.shift();
        
        // null node or leaf node
        if (current === null) {
            continue
        }
        swapLeftAndRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }
    console.log(tree);
}

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
    console.log('swaptree', tree)
}

invertBinaryTree(binaryTree);