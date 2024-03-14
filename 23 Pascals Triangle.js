/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]

*/

var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const arr = [];
    arr[0] = 1;
    arr[i] = 1;
    if (i > 1) {
      for (let k = 1; k <= i - 1; k++) {
        // console.log("res");
        // console.log("i " + i);
        // console.log("k " + k);
        // console.log(res[i - 1][k]);
        // console.log(res[i - 1][k - 1]);
        arr[k] = res[i - 1][k] + res[i - 1][k - 1];
      }
    }
    res.push(arr);
  }
  return res;
};

console.log(generate(1));
//console.log(generate(3));
//console.log(generate(5));
