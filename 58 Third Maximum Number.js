/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
 
Follow up: Can you find an O(n) solution?
*/

var thirdMax = function (nums) {
    let max1 = null;
    let max2 = null;
    let max3 = null;
    for (let i = 0; i < nums.length; i++) {
        //console.log("check = " + nums[i]);
        if (nums[i] !== max1 && nums[i] !== max2 && nums[i] !== max3) {
            if (nums[i] > max1 || max1 === null) {
                //console.log("here1");
                const tempMax2 = max2;
                max2 = max1;
                max3 = tempMax2;
                max1 = nums[i];
            } else if ((nums[i] > max2 && nums[i] < max1) || max2 === null) {
                //console.log("here2");
                max3 = max2;
                max2 = nums[i];
            } else if ((nums[i] > max3 && nums[i] < max2) || max3 === null) {
                //console.log("here3");
                max3 = nums[i];
            }
        }
        // console.log("max1 = " + max1);
        // console.log("max2 = " + max2);
        // console.log("max3 = " + max3);
    }
    // console.log("max1 = " + max1);
    // console.log("max2 = " + max2);
    // console.log("max3 = " + max3);
    if (max3 !== null) {
        return max3;
    } else {
        return max1;
    }
};

//console.log(thirdMax([3, 2, 1]));
//console.log(thirdMax([1, 2]));
//console.log(thirdMax([2, 2, 3, 1]));

//console.log(thirdMax([1, 2, -2147483648]));
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));

//another solution but a little bit slower
/*
var thirdMax = function(nums) {
    let count =nums.sort((a,b)=>b-a);
    let unqiue=[... new Set(count)]
    return unqiue.length <3 ? unqiue[0] : unqiue[2] ;
};
*/
