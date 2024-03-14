/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

    For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

 
Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

    0 <= x <= 231 - 1

*/

var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  let left = 0;
  let right = 46341; //max possible square root
  let middle = Math.floor((right + left) / 2);
  let oldMiddle = 0;
  while (x !== middle * middle) {
    if (x < middle * middle) {
      right = middle;
    } else {
      left = middle;
    }
    oldMiddle = middle;
    middle = Math.floor((right + left) / 2);

    if (middle < 0 || oldMiddle === middle) {
      break;
    }
  }
  return middle;
};

console.log(mySqrt(0));
console.log(mySqrt(4));
console.log(mySqrt(16));
console.log(mySqrt(8));
console.log(mySqrt(2140000000));
console.log(mySqrt(2147483647));
console.log(mySqrt(822779234));
