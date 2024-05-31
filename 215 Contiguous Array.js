/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1. 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 

Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
*/

var findMaxLength = function (nums) {
    let maxResult = 0;

    //the algorithm here is the following: we initialise the count veriable to 0
    //then we go to array. Every time we encounter 0 - we do count - 1, every time we
    //encounter 1, we do +1. So when we encounter the same counter twice, it means that between
    // this indexes we have equal number of 0s and 1s. Next our task is calculate the
    //different the same counter position and find the biggest gap between them

    let count = 0;
    let map = new Map();

    //add init position -1 which is 0
    map.set(-1, 0);

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n === 0) {
            count--;
        } else {
            count++;
        }
        map.set(i, count);
    }

    //lets create a new map where we will check which positions have the same count

    const map2 = new Map();

    for (let val of map) {
        const index = val[0];
        const count = val[1];

        let arr;
        if (!map2.has(count)) {
            arr = [index];
        } else {
            arr = map2.get(count);
            // // console.log(arr);
            arr.push(index);
        }
        map2.set(count, arr);
    }

    //now let's find what is the largest gap

    for (let val of map2) {
        const arr = val[1];
        if (arr.length > 1) {
            arr.sort((a, b) => a - b);
            const min = arr[0];
            const max = arr[arr.length - 1];
            const diff = max - min;
            if (diff > maxResult) {
                maxResult = diff;
            }
        }
    }

    // console.log("map:", map);
    // console.log("map2:", map2);

    return maxResult;
};

// console.log(findMaxLength([0, 1]));
// // // console.log(findMaxLength([0, 1, 0]));
// console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));

//[0, 1, 1, 0, 1, 1]
//[0, 1, 0, 0, 0, 1]
//[0, 0, 0, 0, 0, 0, 1, 1]
