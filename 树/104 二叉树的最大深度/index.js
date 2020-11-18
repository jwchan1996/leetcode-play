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

const maxDepth = root => {
  // 判断边界问题
  if (!root) {
      return 0
  } 
  // 递归取更深的子树深度加 1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};