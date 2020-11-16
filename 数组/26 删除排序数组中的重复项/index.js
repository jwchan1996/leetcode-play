/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  // 思路：按顺序对第一个元素依次与下一个元素做相等比较，相等则取右边元素赋值为左边元素，用来确定数组元素的唯一值
  //      直到出现不相等元素，则确定左边元素是唯一值，需要保留
  //      依次递增对下一个元素进行比较，最终循环结束，index 变量则记录了修改后有用数组的最后一个元素下标
  let index = 0
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[index] == nums[i+1]) {
          nums[index] = nums[i+1]
      } else {
          nums[index+1] = nums[i+1]
          index++
      }
  }
  return index + 1
};