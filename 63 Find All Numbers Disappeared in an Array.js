/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]


Constraints:
    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

/*
var findDisappearedNumbers = function (nums) {
    const n = nums.length;
    const arr = [];
    const set = new Set(nums);
    const numsArr = Array.from(set).sort((a, b) => a - b);
    let check = 1;
    let next = false;
    //console.log(numsArr);
    for (let i = 1; i <= n && check <= n; next ? i++ : i) {
        next = false;
        //console.log("i = " + i + ", check = " + check);
        if (numsArr[i - 1] === check) {
            //console.log("good");
            next = true;
        } else {
            arr.push(check);
        }
        check++;
    }

    return arr;
};

*/

/*
var findDisappearedNumbers = function (nums) {
    const n = nums.length;
    const arr = [];
    nums.sort((a, b) => a - b);
    console.log(nums);
    let check = 1;
    let i = 0;
    while (check !== n) {
        if (check === nums[i - 1]) {
            check++;
            i++;
        } else if (check){
            i++;
        }
    }
};
*/

/*
var findDisappearedNumbers = function (nums) {
    const n = nums.length;
    //sort
    nums.sort((a, b) => a - b);

    //remove duplicates
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }
    }

    //check another
    const arr = [];
    let p2 = 0;
    for (let i = 1; i <= n; i++) {
        console.log("lal");
        if (nums[p2] === i) {
            p2++;
        } else {
            arr.push(i);
        }
    }
    return arr;
};
*/

var findDisappearedNumbers = function (nums) {
    const arr = [];
    for (let i = 0; i <= nums.length; i++) {
        arr.push(false);
    }

    for (let i = 0; i <= nums.length; i++) {
        arr[nums[i]] = true;
    }

    const res = [];
    for (let i = 1; i < arr.length; i++) {
        if (!arr[i]) {
            res.push(i);
        }
    }
    return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));

console.log(findDisappearedNumbers([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]));

const x = [1, 2, 3, 4, 5, 7, 9, 10]; // nums - use p2
const y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //n - use i

const x1 = [1, 2, 3, 4, 5, false, 7, false, 9, 10]; // nums - use p2
const y1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //n - use i
