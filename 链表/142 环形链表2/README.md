# 环形链表2

> 解题思路

快慢指针，慢指针每次走一步，快指针每次走两步，如果是环形则会相遇  
进入下一步，找到环的入口  

思路：

![image.png](https://i.loli.net/2020/11/16/t9R8rFnYUValhd5.png)

x = n ( z + y ) + z  
↑ 上面这条公式是由 快指针走的路程是慢指针走的路程的两倍推演出来的  
让一个指针走一遍 x 这段路
另一个指针走一遍 n ( z + y ) + z 这段路  
两个指针相遇的节点 就是 环的入口

[分析](https://cloud.tencent.com/developer/article/1680926)

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
 * @return {ListNode}
 */
const detectCycle = head => {
  // 链表不为空且形成环至少要有两个节点
  if (!head || !head.next) {
      return null
  }
  // 快慢指针
  let slow = head
  let fast = head
  // 判断快指针指向不为空，则可继续往前走
  while (fast && fast.next) {
      slow = slow.next  // 慢指针每次走一步
      fast = fast.next.next  // 快指针每次走两步
      // 如果快指针抵达末尾，则链表没环
      if (!fast || !fast.next) {
          return null
      }
      // 如果有环，快指针会经过环追上慢指针，会在某一时刻指向的节点相等
      if (slow === fast) {
          break
      }
  }

  // 快指针经过环之后追上慢指针的相遇节点
  let meetNode = slow
  // 慢指针重新指向列表头
  slow = head
  // 快指针指向当前相遇节点
  fast = meetNode
  // 头节点到环的入口的距离 等于 相遇节点在环内走 n 圈最终到入口的距离
  while (slow !== fast) {
      slow = slow.next  // 每次走一步
      fast = fast.next  // 每次走一步
  }
  // 找到环的入口
  return slow
};
```

### 142 环形链表2 中等

[原链接](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

给定一个链表，返回链表开始入环的第一个节点。如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

**进阶：**

你是否可以使用 O(1) 空间解决此题？

**示例 1：**

```
输入：head = [3,2,0,-4], pos = 1  
输出：返回索引为 1 的链表节点  
解释：链表中有一个环，其尾部连接到第二个节点。
```
  
**示例 2：**

```
输入：head = [1,2], pos = 0  
输出：返回索引为 0 的链表节点  
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3**：

```
输入：head = [1], pos = -1  
输出：返回 null  
解释：链表中没有环。
```