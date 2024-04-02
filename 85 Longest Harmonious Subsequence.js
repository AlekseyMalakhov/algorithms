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
    const arr = [...nums];
    arr.sort((a, b) => a - b);
    console.log(arr);
    const middle = Math.round(arr.length / 2);
    const median = arr[middle];
    //check median + 1
    let arrPlus = [];
    let arrPlusMin = null;
    let arrPlusMax = null;

    //check median - 1
    let arrMinus = [];
    let arrMinusMin = null;
    let arrMinusMax = null;

    for (let i = 0; i < nums.length; i++) {
        const diff = nums[i] - median;
        if (diff >= 0 && diff <= 1) {
            arrPlus.push(nums[i]);
            if (arrPlusMin === null) {
                arrPlusMin = nums[i];
            } else if (nums[i] < arrPlusMin) {
                arrPlusMin = nums[i];
            }
            if (arrPlusMax === null) {
                arrPlusMax = nums[i];
            } else if (nums[i] > arrPlusMax) {
                arrPlusMax = nums[i];
            }
        }
        if (diff <= 0 && diff >= -1) {
            arrMinus.push(nums[i]);
            if (arrMinusMin === null) {
                arrMinusMin = nums[i];
            } else if (nums[i] < arrMinusMin) {
                arrMinusMin = nums[i];
            }
            if (arrMinusMax === null) {
                arrMinusMax = nums[i];
            } else if (nums[i] > arrMinusMax) {
                arrMinusMax = nums[i];
            }
        }
    }
    if (arrPlusMin === arrPlusMax) {
        arrPlus = [];
    }
    if (arrMinusMin === arrMinusMax) {
        arrMinus = [];
    }
    return Math.max(arrPlus.length, arrMinus.length);
    // console.log(arrPlus);
    // console.log(arrPlusMin);
    // console.log(arrPlusMax);
    // console.log("-----------------");
    // console.log(arrMinus);
    // console.log(arrMinusMin);
    // console.log(arrMinusMax);
};

// console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
// console.log(findLHS([1, 2, 3, 4]));
// console.log(findLHS([1, 1, 1, 1]));

console.log(findLHS([1, 4, 1, 3, 1, -14, 1, -13]));
