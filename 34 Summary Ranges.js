/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

    "a->b" if a != b
    "a" if a == b


Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"


Constraints:

    0 <= nums.length <= 20
    -231 <= nums[i] <= 231 - 1
    All the values of nums are unique.
    nums is sorted in ascending order.

*/

var summaryRanges = function (nums) {
  const arr = [];
  let temp = [];
  if (nums.length === 1) {
    return [nums[0].toString()];
  }

  const fillArr = () => {
    if (temp.length === 1) {
      arr.push(temp[0]);
    } else {
      const str = temp[0] + "->" + temp[temp.length - 1];
      arr.push(str);
    }
  };
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      temp.push(nums[i].toString());
    } else {
      if (nums[i] - nums[i - 1] !== 1) {
        //current item is not in the current range
        //push the temp into arr
        fillArr();
        //clean the temp for the next range
        temp = [];
        //push the current item into temp
        temp.push(nums[i].toString());
      } else {
        //this item is in the array
        temp.push(nums[i].toString());
      }
      if (i === nums.length - 1) {
        //is the item is the last one
        fillArr();
      }
    }
  }
  return arr;
};

console.log(summaryRanges([-1]));
console.log(summaryRanges([1, 2]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
