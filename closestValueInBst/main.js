const treeData = {
    tree: {
        nodes: [
            { id: '10', left: '5', right: '15', value: 10 },
            { id: '15', left: '13', right: '22', value: 15 },
            { id: '22', left: null, right: null, value: 22 },
            { id: '13', left: null, right: '14', value: 13 },
            { id: '14', left: null, right: null, value: 14 },
            { id: '5', left: '2', right: '5-2', value: 5 },
            { id: '5-2', left: null, right: null, value: 5 },
            { id: '2', left: '1', right: null, value: 2 },
            { id: '1', left: null, right: null, value: 1 },
        ],
        root: '10',
    },
    target: 12,
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
console.log(binaryTree)

// O(log(n)) n = number of nodes in the binary tree
// O(log(n))
function findClosestValueInBst(tree, target) {
    return findHelper(tree, target, tree.value)
} 

function findHelper(tree, target, closest) {
    if (tree === null) {
        return closest
    };

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }

    if (target < tree.value) {
        return findHelper(tree.left, target, closest)
    } else if (target > tree.value) {
        return findHelper(tree.right, target, closest)
    } else {
        console.log('closest', closest)
        return closest
    }
}

findClosestValueInBst(binaryTree, 12)