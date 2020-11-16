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