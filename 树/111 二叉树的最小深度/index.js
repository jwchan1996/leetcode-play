/**
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
var minDepth = function(root) {
  if (!root) {
      return 0
  }
  // 递归条件里分为三种情况
  // 1、左孩子和右孩子都为空的情况，说明到达了叶子节点，直接返回 1 即可
  if (!root.left && !root.right) {
      return 1
  }
  // 2、如果左孩子和右孩子其中一个为空，那么需要返回比较大的那个孩子的深度 
  let left_depth = minDepth(root.left)
  let right_depth = minDepth(root.right)
  if (!root.left || !root.right) {
      return 1 + Math.max(left_depth, right_depth)
  }
  // 3、最后一种情况，也就是左右孩子都不为空，返回最小深度 + 1 即可
  return 1 + Math.min(left_depth, right_depth)
};