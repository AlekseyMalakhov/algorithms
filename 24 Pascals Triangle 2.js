/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 
Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:

Input: rowIndex = 0
Output: [1]

Example 3:

Input: rowIndex = 1
Output: [1,1]

 
Constraints:

    0 <= rowIndex <= 33

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

*/

var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  const res = [];
  for (let i = 0; i <= rowIndex; i++) {
    const arr = [];
    arr[0] = 1;
    arr[i] = 1;
    if (i > 1) {
      for (let k = 1; k <= i - 1; k++) {
        arr[k] = res[i - 1][k] + res[i - 1][k - 1];
      }
    }
    res.push(arr);
  }
  return res[rowIndex];
};

console.log(getRow(3));
//console.log(generate(3));
//console.log(generate(5));
