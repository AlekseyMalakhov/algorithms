/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums. 

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15. 

Constraints:
    1 <= nums.length <= 100
    1 <= nums[i] <= 100
*/

var sumOfUnique = function (nums) {
    const map = new Map();

    for (let n of nums) {
        if (!map.has(n)) {
            map.set(n, 1);
        } else {
            const curr = map.get(n);
            map.set(n, curr + 1);
        }
    }

    let sum = 0;

    for (const [key, val] of map) {
        if (val === 1) {
            sum = sum + key;
        }
    }

    return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
