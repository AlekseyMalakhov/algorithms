/*
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. 

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]

Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Example 2:
Input: nums = [1,2,3,4]
Output: 2

Example 3:
Input: nums = [1,1,1,1]
Output: 0

Constraints:
    1 <= nums.length <= 2 * 104
    -109 <= nums[i] <= 109
*/

var findLHS = function (nums) {
    let temp = 1;
    let max = null;
    let min = null;
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        const check1 = nums[i];
        console.log("check1 = " + check1);
        for (let j = i + 1; j < nums.length; j++) {
            const check2 = nums[j];
            const diff = Math.abs(check1 - check2);
            if (diff <= 1) {
                console.log("check2 = " + check2 + " matches");
                temp++;
                if (max === null && min === null) {
                    max = Math.max(check1, check2);
                    min = Math.min(check1, check2);
                }
                if (check2 > max) {
                    max = check2;
                }
                if (check2 < min) {
                    min = check2;
                }
            }
        }
        console.log("max = " + max);
        console.log("min = " + min);
        console.log("temp = " + temp);
        console.log("---------------------");
        if (temp > length && max !== min) {
            length = temp;
        }
        temp = 1;
        max = null;
        min = null;
    }
    return length;
};

//console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
//console.log(findLHS([1, 2, 3, 4]));
//console.log(findLHS([1, 1, 1, 1]));

// console.log(findLHS([1, 4, 1, 3, 1, -14, 1, -13]));

console.log(findLHS([1, 2, 1, 3, 0, 0, 2, 2, 1, 3, 3]));
