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