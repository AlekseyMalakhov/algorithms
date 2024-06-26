/*
Write a generator function that takes an integer n as an argument and returns a generator object which yields the factorial sequence.
The factorial sequence is defined by the relation n! = n * (n-1) * (n-2) * ... * 2 * 1​​​.
The factorial of 0 is defined as 1. 

Example 1:

Input: n = 5
Output: [1,2,6,24,120]
Explanation: 
const gen = factorial(5)
gen.next().value // 1
gen.next().value // 2
gen.next().value // 6
gen.next().value // 24
gen.next().value // 120

Example 2:

Input: n = 2
Output: [1,2]
Explanation: 
const gen = factorial(2) 
gen.next().value // 1 
gen.next().value // 2 

Example 3:

Input: n = 0
Output: [1]
Explanation: 
const gen = factorial(0) 
gen.next().value // 1 


Constraints:
    0 <= n <= 18
*/

function* factorial(n) {
    let count = 1;
    let res = 1;
    if (n === 0 || n === 1) {
        yield 1;
        return;
    }
    for (let i = 1; i <= n; i++) {
        res = res * count;
        count++;
        yield res;
    }
}

const gen = factorial(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
