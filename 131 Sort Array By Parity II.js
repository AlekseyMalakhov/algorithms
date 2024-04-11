/*
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition. 

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:

Input: nums = [2,3]
Output: [2,3]

Constraints:
    2 <= nums.length <= 2 * 104
    nums.length is even.
    Half of the integers in nums are even.
    0 <= nums[i] <= 1000

Follow Up: Could you solve it in-place?
*/

const checkOddOrEven = (n) => {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

var sortArrayByParityII = function (nums) {
    let badEvenPosition = [];
    let badOddPosition = [];

    for (let i = 0; i < nums.length; i++) {
        let checkN = checkOddOrEven(nums[i]);
        let checkI = checkOddOrEven(i);

        if (checkI === "even" && checkN === "odd") {
            //bad even position
            if (badOddPosition.length !== 0) {
                //try to fix
                const badItem = badOddPosition.shift();
                const temp = nums[badItem];
                nums[badItem] = nums[i];
                nums[i] = temp;
            } else {
                //if can't - save it for later use
                badEvenPosition.push(i);
            }
        }
        if (checkI === "odd" && checkN === "even") {
            //bad odd position
            if (badEvenPosition.length !== 0) {
                //try to fix
                const badItem = badEvenPosition.shift();
                const temp = nums[badItem];
                nums[badItem] = nums[i];
                nums[i] = temp;
            } else {
                //if can't - save it for later use
                badOddPosition.push(i);
            }
        }
    }
    return nums;
};

// console.log(sortArrayByParityII([4, 2, 5, 7]));
// console.log(sortArrayByParityII([2, 3]));
//console.log(sortArrayByParityII([3, 4])); //4,3
//console.log(sortArrayByParityII([1, 2, 3, 3, 2, 3, 0, 4])); //[2,1,4,3,2,3,0,3]
console.log(sortArrayByParityII([648, 831, 560, 986, 192, 424, 997, 829, 897, 843])); //[648,831,560,997,192,897,986,829,424,843]
