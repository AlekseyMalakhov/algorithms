/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 Follow up: Could you minimize the total number of operations done?
*/

var moveZeroes = function (nums) {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        //first of all let's find null for left pointer
        if (nums[i] === 0 && nums[left] !== 0) {
            //hold the most left 0
            left = i;
        }
        if (nums[i] !== 0 && nums[left] === 0) {
            //swap no-null with the most left zero
            nums[left] = nums[i];
            nums[i] = 0;
            left++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([1, 3, 0, 2, 5, 0, 7]));
console.log(moveZeroes([1, 3, 0, 0, 2, 5, 0, 7]));
console.log(moveZeroes([1, 3, 0, 0, 2, 5, 0, 7, 0, 0]));
console.log(moveZeroes([0]));
