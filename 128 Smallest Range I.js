/*
You are given an integer array nums and an integer k.
In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range 
[-k, k]. You can apply this operation at most once for each index i.
The score of nums is the difference between the maximum and minimum elements in nums.
Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

 
Example 1:

Input: nums = [1], k = 0
Output: 0
Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

Example 2:

Input: nums = [0,10], k = 2
Output: 6
Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.

Example 3:

Input: nums = [1,3,6], k = 3
Output: 0
Explanation: Change nums to be [4, 4, 4]. The score is max(nums) - min(nums) = 4 - 4 = 0.

 
Constraints:
    1 <= nums.length <= 104
    0 <= nums[i] <= 104
    0 <= k <= 104
*/

var smallestRangeI = function (nums, k) {
    let max = null;
    let min = null;

    for (let i = 0; i < nums.length; i++) {
        if (min === null) {
            min = nums[i];
        }
        if (max === null) {
            max = nums[i];
        }
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    const diff = max - min;

    if (max === min) {
        return 0;
    }

    if (diff >= 2 * k) {
        return max - k - (min + k);
    }

    const mid = Math.floor(diff / 2);
    if (diff % 2 === 0) {
        return max - mid - (min + mid);
    } else {
        return max - mid - (min + mid + 1);
    }
};

// console.log(smallestRangeI([1], 0));
// console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1, 3, 6], 3));
console.log(smallestRangeI([7, 8, 8], 5)); //0
console.log(smallestRangeI([5, 6, 4], 5)); //0
