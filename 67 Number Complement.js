/*
The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

Given an integer num, return its complement.

Example 1:

Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:

Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

Constraints:
    1 <= num < 231

*/

var findComplement = function (num) {
    const bin = num.toString(2);
    let res = "";
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === "1") {
            res = res + "0";
        } else {
            res = res + "1";
        }
    }
    return parseInt(res, 2);
};

console.log(findComplement(5));
console.log(findComplement(1));