const treeData = {
  tree: {
    nodes: [
      { id: "10", left: "5", right: "15", value: 10 },
      { id: "15", left: "13", right: "22", value: 15 },
      { id: "22", left: null, right: null, value: 22 },
      { id: "13", left: null, right: "14", value: 13 },
      { id: "14", left: null, right: null, value: 14 },
      { id: "5", left: "2", right: "5-2", value: 5 },
      { id: "5-2", left: null, right: null, value: 5 },
      { id: "2", left: "1", right: null, value: 2 },
      { id: "1", left: null, right: null, value: 1 },
    ],
    root: "10",
  },
};

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
console.log(binaryTree);

// A node is said to be valid BST node if and only it satisfies
// the BST property; its value is stricly greater than the values
// of every node to its left; its value is less than or equal to
// its children nodes are either valid BST nodes

function validateBst(tree, minValue = -Infinity, maxValue = Infinity) {
  if (tree === null) {
    return true;
  }
  const currentValue = tree.value;
  const leftTree = tree.left;
  const rightTree = tree.right;
  if (currentValue < minValue || currentValue >= maxValue) {
    return false;
  }
  const leftIsValid = validateBst(leftTree, minValue, currentValue);
  const rightIsValid = validateBst(rightTree, currentValue, maxValue);
  return leftIsValid && rightIsValid;
}
//                     10
//                   /    \
//                 5      15
//              /  \    /  \
//            2    5  13   22
//          /          \
//       1            14

console.log(validateBst(binaryTree));
