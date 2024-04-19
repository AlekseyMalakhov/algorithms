/*
Write a generator function that returns a generator object which yields the fibonacci sequence.
The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13. 

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted 

Constraints:
    0 <= callCount <= 50
*/

var fibGenerator = function* () {
    yield 0;
    yield 1;
    let nMinus2 = 0;
    let nMinus1 = 1;
    while (true) {
        const sum = nMinus1 + nMinus2;
        nMinus2 = nMinus1;
        nMinus1 = sum;
        yield sum;
    }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
console.log(gen.next().value); // 13
