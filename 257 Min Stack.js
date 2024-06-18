/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:
    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function. 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2 

Constraints:
    -231 <= val <= 231 - 1
    Methods pop, top and getMin operations will always be called on non-empty stacks.
    At most 3 * 104 calls will be made to push, pop, top, and getMin.
*/

var MinStack = function () {
    this.arrOfMins = [];
    this.min = Infinity;
    this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (val !== undefined) {
        if (val <= this.min || this.min === undefined) {
            this.min = val;
            this.arrOfMins.push(this.min);
        }
        this.stack.push(val);
        // console.log("arrOfMins:", this.arrOfMins);

        // console.log("stack:", this.stack);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const last = this.stack.pop();
    if (last === this.min) {
        this.arrOfMins.pop();
        this.min = this.arrOfMins[this.arrOfMins.length - 1];
    }
    // // console.log("stack:", this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

var obj = new MinStack();
//["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
//[[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]
//[null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483647,null,-2147483648,-2147483648,null,2147483647]

console.log(obj.push(2147483646)); //und
console.log(obj.push(2147483646)); //und
console.log(obj.push(2147483647)); //und
console.log(obj.top()); //2147483647
console.log(obj.pop()); //und
console.log(obj.getMin()); //2147483646
console.log(obj.pop()); //und
console.log(obj.getMin()); //2147483646
console.log(obj.pop()); //und
console.log(obj.push(2147483647)); //null
console.log(obj.top()); //2147483647
console.log(obj.getMin()); //2147483647

// console.log(obj.push(-2147483648));
// console.log(obj.top());
// console.log(obj.getMin());
// console.log(obj.pop());
// console.log(obj.getMin());

// console.log(obj.push(-3));
// console.log(obj.getMin());
// console.log(obj.pop());
// console.log(obj.top());
// console.log(obj.getMin());
