/*
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33

Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).

Constraints:
    -231 <= n <= 231 - 1
Follow up: Could you solve it without loops/recursion?
*/
const logBase = (n, base) => Math.log(n) / Math.log(base);

/*
//first solution
var isPowerOfThree = function (n) {
    // const res = Number(logBase(n, 3).toFixed(13));
    // return Number.isInteger(res);
};
*/
//second solution
//speed is almost identical
var isPowerOfThree = function (n) {
    let pow = 0;
    let res = Math.pow(3, pow);
    while (res < n) {
        pow++;
        res = Math.pow(3, pow);
    }
    return res === n;
};

//third solution
//speed is the same as the second one
var isPowerOfThree = function (n) {
    while (n > 1) {
        n = n / 3;
    }
    return n === 1;
};

//the forth solution - this one is slightly slower then the others
var isPowerOfThree = function (n) {
    //3^19 = 1162261467
    return n > 0 && 1162261467 % n === 0;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(43046720));
