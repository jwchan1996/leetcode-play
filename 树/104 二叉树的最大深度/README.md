# 二叉树的最大深度

> 解题思路

题目解析 - DFS 

[动画描述 DFS + BFS](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/dong-hua-miao-shu-dfs-bfs-by-wfsbtong/)

最直接的办法就是使用 DFS ( 深度优先搜索 ) 策略计算树的高度（递归）. 具体算法流程如下:

**终止条件:** 当前节点为空  

**返回值：**

节点为空时，所以返回 0  
节点不为空时, 返回左右子树高度的最大值 + 1

> 复杂度分析

**时间复杂度:** O(n), 我们每个结点只访问一次，因此时间复杂度为 O(N)

**空间复杂度:** 最坏情况下，树是完全不平衡的，例如每个结点只剩下左子结点，递归将会被调用 N 次（树的高度），因此保持调用栈的存储将是 O(N)。
最好情况下（树是完全平衡的），树的高度将是 log(N)。因此，在这种情况下的空间复杂度将是 O(log(N))。

```javascript
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
```

### 104 二叉树的最大深度 简单

[原链接](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

**示例：**

给定二叉树 [3,9,20,null,null,15,7]，


```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。