# 二叉树的最小节点

> 解题思路

搞清楚递归条件

- 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
- 当 root 节点左右孩子都为空时，返回 1
- 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
- 当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值

```javascript
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
```

递归左右孩子的时候增加判断，优化之后

```javascript
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
    let min_depth = Number.MAX_VALUE
    // 这样写可以使得当只有一个孩子为空的时候只对一个孩子执行递归
    if (root.left) {
        min_depth = Math.min(minDepth(root.left), min_depth)
    }
    if (root.right) {
        min_depth = Math.min(minDepth(root.right), min_depth)
    }
    // 3、最后一种情况，也就是左右孩子都不为空，返回最小深度 + 1 即可
    return 1 + min_depth
};
```

### 111 二叉树的最小深度 简单

[原链接](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

**示例 1：**

![image](https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg)

```
输入：root = [3,9,20,null,null,15,7]  
输出：2
```
 
**示例 2：**

```
输入：root = [2,null,3,null,4,null,5,null,6]  
输出：5
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。