/*
Write code that enhances all arrays such that you can call the upperBound() method on any array and it will return the last index of a given target number. 
nums is a sorted ascending array of numbers that may contain duplicates. If the target number is not found in the array, return -1.
 

Example 1:

Input: nums = [3,4,5], target = 5
Output: 2
Explanation: Last index of target value is 2

Example 2:

Input: nums = [1,4,5], target = 2
Output: -1
Explanation: Because there is no digit 2 in the array, return -1.

Example 3:

Input: nums = [3,4,6,6,6,6,7], target = 6
Output: 5
Explanation: Last index of target value is 5

Constraints:
    1 <= nums.length <= 104
    -104 <= nums[i], target <= 104
    nums is sorted in ascending order.
 
Follow up: Can you write an algorithm with O(log n) runtime complexity?
*/

Array.prototype.upperBound = function (target) {
    let left = 0;
    let right = this.length - 1;

    let res = null;
    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (this[middle] === target) {
            //if we hit the right target
            res = middle;
            break;
        }
        if (this[middle] < target) {
            //then target is on the right
            left = middle + 1;
        }
        if (this[middle] > target) {
            //then target is on the left
            right = middle - 1;
        }
    }

    if (res === null) {
        res = left;
    }
    if (this[res] !== target) {
        return -1;
    }

    while (res < this.length) {
        res++;
        if (this[res] !== target) {
            res--;
            return res;
        }
    }
    return res;
};

console.log([3, 4, 5].upperBound(5)); // 2
console.log([1, 4, 5].upperBound(2)); // -1
console.log([3, 4, 6, 6, 6, 6, 7].upperBound(6)); // 5
