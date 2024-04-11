/*
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 

Example 1:

Input: nums = [1,2,2,3]
Output: true

Example 2:

Input: nums = [6,5,4,4]
Output: true

Example 3:

Input: nums = [1,3,2]
Output: false
 

Constraints:
    1 <= nums.length <= 105
    -105 <= nums[i] <= 105
*/

var isMonotonic = function (nums) {
    let mode = null;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            mode = "increasing";
            break;
        }
        if (nums[i] < nums[i - 1]) {
            mode = "decreasing";
            break;
        }
    }
    if (mode === null) {
        return true;
    }
    if (mode === "increasing") {
        //increasing
        for (let i = 2; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) {
                return false;
            }
        }
        return true;
    }
    if (mode === "decreasing") {
        //decreasing
        for (let i = 2; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                return false;
            }
        }
        return true;
    }
};

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 1, 2]));
console.log(isMonotonic([1, 1, 1]));
