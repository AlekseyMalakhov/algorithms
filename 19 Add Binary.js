/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 

Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.




*/

var addBinary = function (a, b) {
  const bigInt1 = BigInt("0b" + a);
  const bigInt2 = BigInt("0b" + b);
  const bigIntSum = bigInt1 + bigInt2;
  return bigIntSum.toString(2);
};

console.log(addBinary(11, 1));
console.log(addBinary(1010, 1011));
