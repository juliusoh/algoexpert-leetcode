const treeData = {
  tree: {
    nodes: [
      { id: "1", left: "2", right: "3", value: 1 },
      { id: "2", left: "4", right: "5", value: 2 },
      { id: "3", left: "6", right: "7", value: 3 },
      { id: "4", left: "8", right: "9", value: 4 },
      { id: "5", left: null, right: null, value: 5 },
      { id: "6", left: null, right: null, value: 6 },
      { id: "7", left: null, right: null, value: 7 },
      { id: "8", left: null, right: null, value: 8 },
      { id: "9", left: null, right: null, value: 9 },
    ],
    root: "1",
  },
};
const findNodeInfoById = (id) =>
  treeData.tree.nodes.find((item) => item.id === id);

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

function nodeDepths(root) {
  let depthSum = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    console.log("before", stack);
    // 		if null dont do the code below
    if (node === null) continue;
    // 		0 + 1 = 1;
    // 		1 + 1 = 2;
    console.log("node", node.value);
    depthSum += depth;
    console.log("depthSum", `${depthSum} = ${depthSum} + ${depth}`);
    // 		0 + 1 = 1;
    // 		1 + 1 = 2;
    // 		2 + 1 = 3;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
    console.log("endstack", stack);
  }
  console.log(depthSum);
  return depthSum;
}

nodeDepths(binaryTree);

function recursion(root, depth = 0) {
  // Handle base case of recursion
  if (!root) {
    return 0
  }
  return (
    depth + recursion(root.left, depth + 1) + recursion(root.right, depth + 1)
  );
}

recursion(binaryTree);