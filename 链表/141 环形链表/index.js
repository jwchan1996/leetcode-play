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
const hasCycle = function(head) {
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