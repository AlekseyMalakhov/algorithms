/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false

 Constraints:

    1 <= n <= 231 - 1

*/
var isHappy = function (n) {
  let obj = {}; // keep track of sums to prevent infinite loop
  let sum = n;

  while (sum !== 1) {
    let arr = [];
    if (sum >= 10) {
      let tempSum = 0;
      arr = sum.toString().split("");
      for (let i = 0; i < arr.length; i++) {
        tempSum = tempSum + Math.pow(arr[i], 2);
      }
      sum = tempSum;
    } else {
      sum = Math.pow(sum, 2);
    }
    if (!obj[sum]) {
      obj[sum] = true;
    } else {
      return false;
    }
  }
  return sum === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
