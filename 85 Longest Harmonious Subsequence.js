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
    let length = 0;
    let max = 0;
    let min = 0;
    let lengthMax = 0;
    let lengthMin = 0;
    for (let i = 0; i < nums.length; i++) {
        const check1 = nums[i];
        //console.log("check1 = " + check1);
        max = check1 + 1;
        min = check1 - 1;
        let diff = false;
        for (let j = i + 1; j < nums.length; j++) {
            const check2 = nums[j];
            if (check2 === max) {
                diff = true;
                if (lengthMax === 0) {
                    //console.log("check2 = " + check2 + ", j = " + j + ", to max");
                    lengthMax++;
                }
                //console.log("check2 = " + check2 + ", j = " + j + ", to max");
                lengthMax++;
            }
            if (check2 === min) {
                diff = true;
                if (lengthMin === 0) {
                    lengthMin++;
                }
                lengthMin++;
            }
            if (check2 === check1) {
                if (lengthMin === 0) {
                    //console.log("check2 = " + check2 + ", j = " + j);
                    lengthMin++;
                }
                if (lengthMax === 0) {
                    //console.log("check2 = " + check2 + ", j = " + j + ", to max");
                    lengthMax++;
                }
                //console.log("check2 = " + check2 + ", j = " + j + ", to max");
                lengthMin++;
                lengthMax++;
            }
        }
        const temp = Math.max(lengthMax, lengthMin);
        // console.log("max = " + max);
        // console.log("min = " + min);
        // console.log("lengthMax = " + lengthMax);
        // console.log("lengthMin = " + lengthMin);
        //console.log("---------------------");
        if (temp > length && diff) {
            length = temp;
        }
        lengthMax = 0;
        lengthMin = 0;
    }
    return length;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); //5
console.log(findLHS([1, 2, 3, 4])); //2
console.log(findLHS([1, 1, 1, 1])); //0

console.log(findLHS([1, 4, 1, 3, 1, -14, 1, -13])); //2

console.log(findLHS([1, 2, 1, 3, 0, 0, 2, 2, 1, 3, 3])); //6

console.log(findLHS([-3, -1, -1, -1, -3, -2])); //4

console.log(findLHS([2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 0, 0, 3, 1, -1, 0, 1, 1, 0, 0, 1, 1, 2, 2, 2, 0, 1, 2, 2, 3, 2])); //20

console.log(findLHS([2, 3, 1, 1, 1])); //4
