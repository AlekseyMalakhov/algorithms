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
    let temp = 0;
    let max = null;
    let min = null;
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        const check1 = nums[i];
        console.log("check1 = " + check1 + ", i = " + i);
        for (let j = i + 1; j < nums.length; j++) {
            const check2 = nums[j];
            console.log("check2 begin = " + check2 + ", j = " + j);
            if (max === null && min === null) {
                if (check2 === check1 - 1) {
                    //console.log("check2 init = " + check2);
                    max = check1;
                    min = check2;
                }
                if (check2 === check1 + 1) {
                    //console.log("check2 init = " + check2);
                    max = check2;
                    min = check1;
                }
                if (check2 === check1) {
                    //console.log("check2 equal init = " + check2);
                    max = check2;
                    min = check2;
                }
                temp = 2;
            } else {
                if (max === min) {
                    if (check2 === check1 - 1) {
                        //console.log("check2 init = " + check2);
                        max = check1;
                        min = check2;
                    }
                    if (check2 === check1 + 1) {
                        //console.log("check2 init = " + check2);
                        max = check2;
                        min = check1;
                    }
                }
                if (check2 === max || check2 === min) {
                    console.log("check2 found = " + check2);
                    temp++;
                    if (check2 === check1 - 1) {
                        max = check1;
                        min = check2;
                    }
                    if (check2 === check1 + 1) {
                        //-1 === -2 + 1
                        max = check2; //-1
                        min = check1; // - 2
                    }
                }
            }
        }
        // console.log("max = " + max);
        // console.log("min = " + min);
        // console.log("temp = " + temp);
        console.log("---------------------");
        if (temp > length && max !== min) {
            length = temp;
        }
        temp = 0;
        max = null;
        min = null;
    }
    return length;
};

//console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
//console.log(findLHS([1, 2, 3, 4]));
//console.log(findLHS([1, 1, 1, 1]));

//console.log(findLHS([1, 4, 1, 3, 1, -14, 1, -13]));

//console.log(findLHS([1, 2, 1, 3, 0, 0, 2, 2, 1, 3, 3]));

//console.log(findLHS([-3, -1, -1, -1, -3, -2]));

//console.log(findLHS([2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 0, 0, 3, 1, -1, 0, 1, 1, 0, 0, 1, 1, 2, 2, 2, 0, 1, 2, 2, 3, 2]));

console.log(findLHS([2, 3, 1, 1, 1]));
