/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0

Constraints:

    0 <= num <= 231 - 1

Follow up: Could you do it without any loop/recursion in O(1) runtime?

*/

var addDigits = function (num) {
  let n = num;
  while (n > 9) {
    const arr = n.toString().split("");
    n = arr.reduce((acc, curr) => Number(acc) + Number(curr));
  }
  return n;
};

console.log(addDigits(38));
console.log(addDigits(0));

/* ???
var addDigits = function(num) {
    if(num === 0) return 0;
    let res = num % 9;
    return res || 9;
};
*/
