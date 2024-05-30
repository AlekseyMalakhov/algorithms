/*
Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1. 

Example 1:

Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

Example 2:

Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once. 

Constraints:
    1 <= nums.length <= 2000
    0 <= nums[i] <= 1000
*/

var largestUniqueNumber = function (nums) {
    const ints = {};
    for (let int of nums) {
        if (ints[int] === undefined) {
            ints[int] = 1;
        } else {
            ints[int]++;
        }
    }

    const once = [];

    for (let x in ints) {
        if (ints[x] === 1) {
            once.push(Number(x));
        }
    }

    if (once.length === 0) {
        return -1;
    }

    let max = -Infinity;

    for (let int of once) {
        if (int > max) {
            max = int;
        }
    }

    return max;
};

// console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]));
// console.log(largestUniqueNumber([9, 9, 8, 8]));
console.log(largestUniqueNumber([397, 513, 784, 485, 253, 360, 924, 37, 97, 624, 743, 203, 406, 77, 23, 123, 748, 309, 230, 669]));
