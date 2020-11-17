# N叉树的前序遍历

> 解题思路

递归

> 注意判断边界条件

- 是否存在根节点

```javascript
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
```

### 589 N叉树的前序遍历表 简单

[原链接](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)

给定一个 N 叉树，返回其节点值的前序遍历。

例如，给定一个 3叉树 :

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/narytreeexample.png)

返回其前序遍历: [1,3,5,6,2,4]。

**说明:** 递归法很简单，你可以使用迭代法完成此题吗?