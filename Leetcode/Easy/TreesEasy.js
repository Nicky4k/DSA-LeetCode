/**
 * 1. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  recursiveInorder(root, res);
  function recursiveInorder(root, res) {
    if (root !== null) {
      recursiveInorder(root.left, res);
      res.push(root.val);
      recursiveInorder(root.right, res);
    }
  }
  return res;
};

/**
 * 2. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;

  function isMirror(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right && right.left)
    );
  }

  isMirror(root.left, root.right);
};

var isSymmetric = function (root) {
  if (root == null) return true;
  return isMirror(root.left, root.right);
};

const isMirror = (leftNode, rightNode) => {
  if (leftNode == null && rightNode == null) return true;
  if (leftNode == null || rightNode == null) return false;
  if (leftNode.val !== rightNode.val) return false;

  return (
    isMirror(leftNode.left, rightNode.right) &&
    isMirror(leftNode.right, rightNode.left)
  );
};

/**
 * 3. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  let depth = 0;

  return depthTracker(root, depth);
};

const depthTracker = (node, depth) => {
  if (node === null) return depth;

  depth++;
  let leftDepth = depthTracker(node.left, depth);
  let rightDepth = depthTracker(node.right, depth);

  return Math.max(leftDepth, rightDepth);
};

/**
 * 4. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//1. Tail to Head
var invertTree = function (root) {
  if (root === null) return null;
  return flipTree(root);
};

const flipTree = (node) => {
  if (node === null) return;

  flipTree(node.left);
  flipTree(node.right);

  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  return node;
};

// 2. Head to Tail
var invertTreeII = function (root) {
  if (root === null) return null;
  return flipTree(root);
};

const flipTreeII = (node) => {
  if (node === null) return;

  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  flipTreeII(node.left);
  flipTreeII(node.right);

  return node;
};

/**
 🚨 DEPTH FIRST SEARCH
 🚨 BREADTH FIRST SEARCH 
94. Binary Tree Inorder Traversal
101. Symmetric Tree
104. Maximum Depth of Binary Tree
108. Convert Sorted Array to Binary Search Tree
226. Invert Binary Tree
543. Diameter of Binary Tree
606. Construct String from Binary Tree
*/
