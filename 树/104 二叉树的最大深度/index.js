/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
  // 判断节点
  if (!root) {
      // 当前节点为空则返回深度 0
      return 0
  }
  // 当前节点不为空则返回 1
  // 并递归左右子树，取右子树高度的最大值进行累加
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};