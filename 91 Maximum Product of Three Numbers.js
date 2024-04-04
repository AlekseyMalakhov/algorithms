/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:

Input: nums = [1,2,3]
Output: 6

Example 2:

Input: nums = [1,2,3,4]
Output: 24

Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:

    3 <= nums.length <= 104
    -1000 <= nums[i] <= 1000
*/

var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let case1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    let case2 = nums[0] * nums[1] * nums[nums.length - 1];
    return Math.max(case1, case2);
};

//console.log(maximumProduct([1, 2, 3]));
// console.log(maximumProduct([1, 2, 3, 4]));
// console.log(maximumProduct([-1, -2, -3]));
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
//console.log(maximumProduct([0, 0, 0]));
