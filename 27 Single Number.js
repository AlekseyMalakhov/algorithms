/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 
Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1
 
Constraints:
    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.
*/

//at first let's try to solve it without bitwise operators
/*
var singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    // first item
    if (i === 0 && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
    // middle item
    if (i !== 0 && nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
    //last item
    if (i === nums.length - 1 && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
};
*/

//in this case all complexity will be O(2n), because we make two passes.
//First for sorting and then for finding single item

//can we find the single item in one pass?

//probably we can using bitwise arithmetic

var singleNumber = function (nums) {
  // Initialize the unique number...
  let uniqNum = 0;
  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
    console.log("uniqNum ^ nums[idx] = " + uniqNum + " ^ " + nums[idx]);
    // Concept of XOR...
    uniqNum = uniqNum ^ nums[idx];
    console.log("uniqNum = " + uniqNum);
  }
  return uniqNum; // Return the unique number...
};

//I don't understand the magic how it works but probably it works somehow like this
//[2, 2, 1]
//0 ^ 2 = 2
//0 ^ 2 ^ 2 = 0
//0 ^ 1 = 1

//[4, 1, 2, 1, 2]
//0 ^ 4 = 4
//4 ^ 1 ^ 2 ^ 1 = 4 ^ 2
//4 ^ 1 ^ 2 ^ 1 ^ 2 = 4

// console.log(singleNumber([1, 2, 2, 3, 3]));
// console.log(singleNumber([1, 1, 2, 3, 3]));
// console.log(singleNumber([1, 1, 2, 2, 3]));
console.log(singleNumber([5, 8, 10, 5, 10]));
