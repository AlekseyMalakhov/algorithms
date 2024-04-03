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
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        const check = nums[i];
        if (!obj[check]) {
            obj[check] = {
                valMin: 1,
                valMax: 1,
                real: true,
            };
        } else {
            obj[check].valMin++;
            obj[check].valMax++;
            obj[check].real = true;
        }

        if (!obj[check - 1]) {
            obj[check - 1] = {
                valMin: 0,
                valMax: 1,
                real: false,
            };
        } else {
            obj[check - 1].valMax++;
        }

        if (!obj[check + 1]) {
            obj[check + 1] = {
                valMin: 1,
                valMax: 0,
                real: false,
            };
        } else {
            obj[check + 1].valMin++;
        }
    }

    console.log(obj);

    let min = 0;
    let max = 0;
    for (x in obj) {
        const check = obj[x];
        if (check.real && check.valMin !== check.valMax) {
            if (check.valMin < min) {
                min = check.valMin;
            }
            if (check.valMax > max) {
                max = check.valMax;
            }
        }
    }

    return Math.max(min, max);
};

var findLHS1 = function (nums) {
    let maxCount = 0;

    let numsMap = new Map();

    for (const num of nums) {
        if (numsMap.get(num)) {
            numsMap.set(num, numsMap.get(num) + 1);
        } else {
            numsMap.set(num, 1);
        }
    }

    console.log(numsMap);
    for (const [key, value] of numsMap) {
        if (numsMap.get(key + 1)) {
            const sum = value + numsMap.get(key + 1);

            maxCount = sum > maxCount ? sum : maxCount;
        }
    }

    return maxCount;
};

//console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); //5
console.log("---------------");
//console.log(findLHS1([1, 3, 2, 2, 5, 2, 3, 7])); //5
//console.log(findLHS([1, 2, 3, 4])); //2
//console.log(findLHS([1, 1, 1, 1])); //0

//console.log(findLHS([1, 4, 1, 3, 1, -14, 1, -13])); //2

//console.log(findLHS([1, 2, 1, 3, 0, 0, 2, 2, 1, 3, 3])); //6

//console.log(findLHS([-3, -1, -1, -1, -3, -2])); //4

//console.log(findLHS([2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 0, 0, 3, 1, -1, 0, 1, 1, 0, 0, 1, 1, 2, 2, 2, 0, 1, 2, 2, 3, 2])); //20

console.log(findLHS([2, 3, 1, 1, 1])); //4
console.log(findLHS1([2, 3, 1, 1, 1])); //4
