/*
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
Given an integer n, return true if n is a perfect number, otherwise return false.

Example 1:

Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.

Example 2:

Input: num = 7
Output: false

Constraints:
    1 <= num <= 108

*/

var checkPerfectNumber = function (num) {
    const devisors = [];
    let check = 1;
    while (check <= Math.sqrt(num)) {
        if (num % check === 0) {
            devisors.push(check);
        }
        check++;
    }

    const devisors2 = [];
    for (let i = 0; i < devisors.length; i++) {
        if (devisors[i] !== num) {
            devisors2.push(devisors[i]);
            const pair = num / devisors[i];
            if (pair !== num) {
                devisors2.push(num / devisors[i]);
            }
        }
    }
    //console.log(devisors2);

    if (devisors2.length > 0) {
        const sum = devisors2.reduce((acc, item) => acc + item);
        return sum === num;
    }
    return false;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
console.log(checkPerfectNumber(1));
