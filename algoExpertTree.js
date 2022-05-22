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

const nodeLookUp = treeData.tree.nodes.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item,
  }),
  {}
);

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const buildTree = (nodeId) => {
  const nodeInfo = nodeLookUp[nodeId];
  const node = new BST(nodeInfo.value);
  if (nodeInfo.left) {
    node.left = buildTree(nodeInfo.left);
  }

  if (nodeInfo.right) {
    node.right = buildTree(nodeInfo.right);
  }

  return node;
};

const tree = buildTree(treeData.tree.root);

console.log(tree);

const target = 12

function findClosestValueInBst(tree, target) {
  const getClosest = () => {
     let closestDiff = Infinity;
     let closestNum;
     const traverse = (tree, target) => {
       console.log(tree)
       if (tree === null) return;
       // Lowest Difference Tree Traversal, which number is bigger or less than target number
       const diff = Math.abs(target - tree.value);
       if (diff < (closestDiff)) {
         closestDiff = diff;
         closestNum = tree.value;
       }
       // case thats failing , when left and right are null
       if (target < tree.value) {
         traverse(tree.left, target);
       } else if (target > tree.value) {
         traverse(tree.right, target);
       }
     };
     traverse(tree, target);
     return closestNum;
   };
   return getClosest();
 }

 findClosestValueInBst(tree, target)