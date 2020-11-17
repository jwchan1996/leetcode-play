/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = root => {
  const result = []
  // 判断边界问题，根节点是否 null
  if (!root) {
      return result
  }
  // 缓存变量，减少对象读取
  const { val, children } = root
  // 当前根节点
  result.push(val)

  // 遍历当前节点的子节点
  for (const child of children) {
      // 使用递归的方式，且这里 for 循环保证了前序遍历的顺序（for 循环之前保证先走当前根节点）
      result.push(...preorder(child))
  }

  return result
};