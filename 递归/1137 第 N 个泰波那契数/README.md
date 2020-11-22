# 第 N 个泰波那契数

> 解题思路

传统递归 + 剪枝

下面是传统递归写法爆栈超时了，因为有些递归的结果重复计算了
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n <= 0) {
        return 0
    }
    if (n == 1 || n == 2) {
        return 1
    }
    return tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1)
};
```

对递归结果进行存储，对于重复递归计算的结果直接读取即可，称为剪枝。

```javascript
/**
 * @param {number} n
 * @return {number}
 */

// 传统递归 + 剪枝
var tribonacci = function(n) {
    // 数组储存递归结果
    const arr = [0, 1, 1]
    // 递归函数，先去数组中找是否已有当前递归计算的结果
    const recursion = (n) => {
        // 数组有则直接读取
        if (arr[n] !== undefined) {
            return arr[n]
        } 
        // 数组没有则计算递归结果并存储到数组
        arr[n] = recursion(n - 1) + recursion(n - 2) + recursion(n - 3)
        return arr[n]
    }
    // 调用递归函数返回结果
    return recursion(n)
};
```

### 1137 第 N 个泰波那契数 简单 

[原链接](https://leetcode-cn.com/problems/n-th-tribonacci-number/)

泰波那契序列 Tn 定义如下：

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

**示例 1：**

```
输入：n = 4  
输出：4  
解释：  
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

**示例 2**：

```
输入：n = 25
输出：1389537
```

**提示：**

```
0 <= n <= 37  
答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-th-tribonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。