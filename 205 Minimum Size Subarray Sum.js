/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead. 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/

var minSubArrayLen = function (target, nums) {
    const sumArr = [];

    let l = 0;
    let min = Infinity;
    let currLength = 0;

    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            sumArr.push(nums[i]);
            curr = nums[i];
        } else {
            curr = curr + nums[i];
            sumArr.push(curr);
        }
    }

    // console.log("🚀 ~ minSubArrayLen ~ sumArr:", sumArr);

    for (let i = 0; i < nums.length; i++) {
        let leftArg = 0;
        if (sumArr[l - 1] !== undefined) {
            leftArg = sumArr[l - 1];
        }
        let sum = sumArr[i] - leftArg;

        if (sum >= target) {
            while (l <= i && sum >= target) {
                currLength = i - l + 1;
                // console.log("🚀 ~ minSubArrayLen ~ currLength:", currLength);
                if (currLength < min) {
                    min = currLength;
                }
                l++;
                currLength--;
                let leftArg = 0;
                if (sumArr[l - 1] !== undefined) {
                    leftArg = sumArr[l - 1];
                }
                sum = sumArr[i] - leftArg;
                // console.log("🚀 ~ minSubArrayLen ~ sum in while loop:", sum);
            }
        }

        //we will move the right border of window (i)
        //when sum gets >= target we will check the length
        //if length is less then min - we update the min
        //increasing right is definetly well be all rigth, but length will be increasin,
        //let's try to move left. May be we will still get >- then target but with less length
        // if sum gets >= target then increasing right is definetly well be all rigth, but length will be increasin,
        //let's try to move left. May be we will still get >- then target but with less length
        //if sum gets < target, then definetely moving left will only decrease the sum. So let's move rigth
        //...
        //if right came to the end, and sum >= target, then we can try to move left to get even less length with
        //still sum >= target
        //if sum still >= target let's move left again may be we will find lesser length
        //if sum gets < target then definetely moving left will only decrease the sum.
        //so we can return

        //console.log("nums[i] = " + nums[i]);
        // console.log("🚀 ~ minSubArrayLen ~ sum:", sum);
        //console.log("----");
    }

    if (min === Infinity) {
        return 0;
    }
    return min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));

console.log(minSubArrayLen(80, [10, 5, 13, 4, 8, 4, 5, 11, 14, 9, 16, 10, 20, 8]));
