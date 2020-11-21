# 两数之和

> 解题思路

- 暴力枚举

循环数组两两相加，需要两次循环嵌套  
时间复杂度 O(n^2)，空间复杂度 O(1)

- 哈希表

哈希表键值对储存循环过的值，只需要一次循环  
时间复杂度 O(n)，空间复杂度 O(n)

其中，暴力枚举的方式时间复杂度较高的原因是寻找 `target - x` 的时间复杂度过高。因此，我们需要一种更优秀的方法，能够快速寻找数组中是否存在目标元素。如果存在，我们需要找出它的索引。

使用哈希表，可以将寻找 `target - x` 的时间复杂度降低到从 O(n) 降低到 O(1)。

这样我们创建一个哈希表，对于每一个 `x`，我们首先查询哈希表中是否存在 `target - x`，然后将 `x` 插入到哈希表中，即可保证不会让 `x` 和自己匹配。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力枚举
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
```

```javascript
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
```

### 1 两数之和 简单

[原链接](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9  
所以返回 [0, 1]
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。