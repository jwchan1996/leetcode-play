# 移动零

> 解题思路

- 双指针 

index、i 两个指针，其中 index 为慢指针，记录非零值移动后的下标，最后将 index 后的所有元素置零

![image](https://pic.leetcode-cn.com/9669b4ffb158eaeeee6f0cd66a70f24411575edab1ab8a037c4c9084b1c743f5-283_1.gif)

需要两次遍历

```javascript
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
```

- 最优解

![image](https://pic.leetcode-cn.com/36d1ac5d689101cbf9947465e94753c626eab7fcb736ae2175f5d87ebc85fdf0-283_2.gif)

需要一次遍历

判断 index 下标元素与 i 下标元素，当 i 元素不等于 0，则交换到左边，等于 0 的元素交换到右边

```javascript
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
```

### 283 移动零 简单

[原链接](https://leetcode-cn.com/problems/move-zeroes/)

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例:**

```
输入: [0,1,0,3,12]  
输出: [1,3,12,0,0]
```

**说明:**

必须在原数组上操作，不能拷贝额外的数组。  
尽量减少操作次数。