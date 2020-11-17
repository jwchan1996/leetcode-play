# 环形链表

> 解题思路

快慢指针，慢指针每次走一步，快指针每次走两步，如果是环形则会相遇

- 时间复杂度 O(n)
- 空间复杂度 O(1)

> 注意判断边界条件

- 比如链表环形至少需要两个节点  
- 比如没有环的话快指针最终会指向链表末尾（即 fast 为 null 或 fast.next 为 null）

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
  if (!head || !head.next) {
      return false
  }

  // 快慢指针（利用链表有环快慢指针必相遇的特点）
  let slow = head
  let fast = head

  // 如果链表有环，则继续往前走
  // 如果链表没有环，则最终快指针会抵达链表末端
  while (fast && fast.next) {
      // 慢指针每次往前走一步，慢指针每次往前走两步 
      slow = slow.next
      fast = fast.next.next
      // 如果链表有环，则会在某个时刻相遇，即快慢指针指向节点相等，返回 true
      if (slow === fast) {
          return true
      }
  }

  return false
};
```

### 141 环形链表 简单

[原链接](https://leetcode-cn.com/problems/linked-list-cycle/)

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

**进阶：**

你能用 O(1)（即，常量）内存解决此问题吗？

**示例 1：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1  
输出：true  
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2**：

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0  
输出：true  
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1  
输出：false  
解释：链表中没有环。
```