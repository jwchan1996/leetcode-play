/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  // 双指针 
  // index、i 两个指针，其中 index 为慢指针，记录非零值移动后的下标，最后将 index 后的所有元素置零
  let index = 0
  for (let i = 0; i < nums.length; i++ ) {
      if (nums[i] !== 0) {
          nums[index] = nums[i]
          index++
      }
  }

  // index 后的元素置零
  while (index < nums.length) {
      nums[index] = 0
      index++
  }
};