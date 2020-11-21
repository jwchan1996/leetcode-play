/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
// 哈希表
var twoSum = function(nums, target) {
  // 哈希表
  const hashMap = new Map()
  // 哈希表键值对对应关系 {nums[i] => i}
  for (let i = 0; i < nums.length; i++) {
      // 判断哈希表中是否有两数之和需要的数对应的键
      if (hashMap.has(target - nums[i])) {
          // 存在需要的键，则读取键对应的值，也就是数组下标返回
          return [hashMap.get(target - nums[i]), i]
      } else {
          // 不存在需要的键，则存储当前数组元素与下标作为哈希表键值对
          hashMap.set(nums[i], i)
      }
  }
};