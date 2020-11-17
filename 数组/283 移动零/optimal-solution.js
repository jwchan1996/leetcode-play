/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  // 双指针 
  // index、i 两个指针，其中 index 为慢指针，一次循环 i 元素不为 0 则与左边元素交换 
  let index = 0
  for (let i = 0; i < nums.length; i++ ) {
      if (nums[i] !== 0) {
          let temp = nums[i]
          nums[i] = nums[index]
          // 不为 0 的元素交换到在 慢指针 对应的下标元素
          nums[index] = temp
          index++ 
      } 
  }
};