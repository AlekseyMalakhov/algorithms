/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's. 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 
Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
    0 <= k <= nums.length
*/

//1 1 0 0 1 1 1 0
var longestOnes = function (nums, k) {
    let flipsLeft = k;
    let max = 0;

    let left = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        // console.log("step = " + i);
        // console.log("left = " + left + ", right = " + i);
        const d = nums[i];
        if (d === 1) {
            curr++;
        } else {
            //if it is 0, then we can flip it if k > 0
            if (flipsLeft > 0) {
                //console.log("flip position " + i);
                flipsLeft--;
                curr++;
            } else {
                //if there is no more flipsLeft, we can't include this right in our window
                //we need more flipsLeft to do it. Let's move left until we found one
                if (k > 0) {
                    //if there is possibility to find flipsLeft - try it
                    while (left < i && flipsLeft === 0) {
                        if (nums[left] === 0) {
                            //it means this left was flipped - then flip it back and get one flip
                            flipsLeft++;
                            //move forward because this left is no longer 1
                        }
                        left++;
                        curr--;
                    }
                    //if we finally found one flipsLeft - use it on this right
                    if (flipsLeft > 0) {
                        ////console.log("flip position " + i);
                        flipsLeft--;
                        curr++;
                    }
                } else {
                    //if there is no k at all - then create a new window and start again
                    left = i;
                    curr = 0;
                }
            }
        }
        if (curr > max) {
            max = curr;
        }
        //console.log("flipsLeft = " + flipsLeft);
        //console.log("current = " + curr);
        //console.log("-----------------------");
    }
    return max;
};

//console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0));
console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0));

//[0, 0,  1, 1, 0, 0, 1, 1, 1, 0, 1,  1,   0,  0,  0,  1,  1,  1,  1]
//[0, 1,  2, 3, 4, 5, 6, 7, 8, 9, 10, 11,  12, 13, 14, 15, 16, 17, 18]

//[0, 0, 1, 1, 1, 0, 0]
//[0, 1, 2, 3, 4, 5, 6]
