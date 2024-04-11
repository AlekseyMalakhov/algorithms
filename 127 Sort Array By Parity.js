/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition. 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]


Constraints:
    1 <= nums.length <= 5000
    0 <= nums[i] <= 5000
*/

//usual solution
/*
var sortArrayByParity = function (nums) {
    const arrEven = [];
    const arrOdd = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            arrEven.push(nums[i]);
        } else {
            arrOdd.push(nums[i]);
        }
    }
    return arrEven.concat(arrOdd);
};
*/

//with two pointers solution - no difference in speed
const checkOddOrEven = (n) => {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

var sortArrayByParity = function (nums) {
    let evenIndex = null;

    for (let i = 0; i < nums.length; i++) {
        const current = checkOddOrEven(nums[i]);
        if (i === 0) {
            if (current === "even") {
                evenIndex = 0;
            }
        } else {
            if (current === "even") {
                if (evenIndex === null) {
                    //move it to 0 position
                    const temp = nums[0];
                    nums[0] = nums[i];
                    nums[i] = temp;
                    evenIndex = 0;
                } else {
                    //move it to next to evenIndex position
                    const temp = nums[evenIndex + 1];
                    nums[evenIndex + 1] = nums[i];
                    nums[i] = temp;
                    evenIndex = evenIndex + 1;
                }
            }
        }
    }

    return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
