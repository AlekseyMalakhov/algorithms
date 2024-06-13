/*
Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop 
operations on an initially empty stack, or false otherwise.

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2. 

Constraints:
    1 <= pushed.length <= 1000
    0 <= pushed[i] <= 1000
    All the elements of pushed are unique.
    popped.length == pushed.length
    popped is a permutation of pushed.
*/

var validateStackSequences = function (pushed, popped) {
    // let poppedIndex = 0;
    // let pushedIndex = 0;
    const stack = [];
    let pushedItem = pushed.shift();
    let poppedItem = popped.shift();
    stack.push(pushedItem);

    //let i = 0;
    while (stack.length > 0) {
        // console.log("stack:", stack);
        // console.log("popped:", popped);
        // console.log("pushed:", pushed);
        let last = stack[stack.length - 1];
        // console.log("last:", last);
        // console.log("poppedItem:", poppedItem);
        if (poppedItem === last) {
            while (poppedItem === last && stack.length > 0) {
                // console.log("They are the same! " + poppedItem + " is really popped! Move to the next");
                stack.pop();
                last = stack[stack.length - 1];
                poppedItem = popped.shift();
            }
        } else {
            if (pushed.length === 0) {
                return false;
            }
        }
        if (pushed.length > 0) {
            pushedItem = pushed.shift();
            stack.push(pushedItem);
        }
        // console.log("now stack:", stack);

        // if (pushedItem === undefined) {
        //     return;
        // }
        // console.log("--------------------------");
        // i++;
        // if (i > 8) {
        //     return;
        // }
    }

    return true;
    // // // console.log("poppedIndex:", poppedIndex);
    // // // console.log("pushedIndex:", pushedIndex);
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));

console.log(validateStackSequences([2, 1, 0], [1, 2, 0])); //true
