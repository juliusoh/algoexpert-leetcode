const treeData = {
    "tree": {
      "nodes": [
        {"id": "10", "left": "5", "right": "15", "value": 10},
        {"id": "15", "left": null, "right": "22", "value": 15},
        {"id": "22", "left": null, "right": null, "value": 22},
        {"id": "5", "left": "2", "right": "5-2", "value": 5},
        {"id": "5-2", "left": null, "right": null, "value": 5},
        {"id": "2", "left": "1", "right": null, "value": 2},
        {"id": "1", "left": null, "right": null, "value": 1}
      ],
      "root": "10"
    }
  }

//   10
// /  \
// 5   15
// / \    \
// 2  5    22
// /
// 1

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

var inorderTraversal = function (root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.value);
      root = root.right;
    }
  }

  return res;
};

console.log(inorderTraversal(tree))
function inOrderTraverse(root) {
    let result = [];
    dfs(root);
    
    function dfs(root) {
        if(root != null) {
            dfs(root.left);
            result.push(root.value);
            dfs(root.right);
        }
    }
    
    return result;
}
console.log(inOrderTraverse(binaryTree))
//   10
// /  \
// 5   15
// / \    \
// 2  5    22
// /
// 1
function preOrderTraverse(root, array) {
    // append the current value to the array before traverse left and right
  // 1. append current vl
  // traverse left function
  // traverser right function
  if (root !== null) {
    array.push(root.value)
    preOrderTraverse(root.left, array)
    preOrderTraverse(root.right, array)
  }
  return array
}

console.log(preOrderTraverse(binaryTree, []));