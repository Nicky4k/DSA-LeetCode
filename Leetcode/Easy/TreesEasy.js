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
var isSymmetric = function (root) {};

/**
 * 🚨 DEPTH FIRST SEARCH
 * 🚨 BREADTH FIRST SEARCH
 * 
94. Binary Tree Inorder Traversal
101. Symmetric Tree
104. Maximum Depth of Binary Tree
108. Convert Sorted Array to Binary Search Tree
226. Invert Binary Tree
543. Diameter of Binary Tree
606. Construct String from Binary Tree
*/
