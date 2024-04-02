/*
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) 
for all i is maximized. Return the maximized sum.

Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.

Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

Constraints:
    1 <= n <= 104
    nums.length == 2 * n
    -104 <= nums[i] <= 104

*/
const createPairsOutOfFour = (input) => {
    const i1 = input[0];
    const i2 = input[1];
    const i3 = input[2];
    const i4 = input[3];

    // const s1 = Math.min(i1, i2) + Math.min(i3, i4);
    // const s2 = Math.min(i1, i3) + Math.min(i2, i4);
    // const s3 = Math.min(i1, i4) + Math.min(i2, i3);
    // return Math.max(s1, s2, s3);

    return [
        [
            [i1, i2],
            [i3, i4],
        ],
        [
            [i1, i3],
            [i2, i4],
        ],
        [
            [i1, i4],
            [i2, i3],
        ],
    ];
};

var arrayPairSum = function (nums) {
    const pairs = [];
    return createPairsOutOfFour(nums);
};

//console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([1, 2, 3, 4]));
//console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
