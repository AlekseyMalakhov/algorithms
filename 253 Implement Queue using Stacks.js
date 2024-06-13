/*
Implement a first in first out (FIFO) queue using only two stacks. 
The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:
    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:
    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively. You may simulate a stack using a 
    list or deque (double-ended queue) as long as you use only a stack's standard operations. 

Example 1:
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

Constraints:
    1 <= x <= 9
    At most 100 calls will be made to push, pop, peek, and empty.
    All the calls to pop and peek are valid. 

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
*/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const consoleLogLinkedList = (head, n) => {
    let h = head;
    for (let i = 1; i <= n; i++) {
        // // console.log(h?.val);
        h = h?.next;
    }
};

var MyQueue = function () {
    this.head = null;
    this.dummyHead = new ListNode(null, this.head);
    this.tail = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (x !== undefined) {
        const newNode = new ListNode(x, null);
        if (this.tail === null) {
            // console.log("here1");
            this.tail = newNode;
            this.head = this.tail;
            this.dummyHead.next = this.head;
        } else {
            // console.log("here2");
            // console.log("tail:", this.tail);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // console.log("head:", this.head);
    }
    // // //console.log("dummyHead:", this.dummyHead);
    //consoleLogLinkedList(this.head, 5);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.head === null) {
        return null;
    } else {
        const res = this.head.val;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            const nextHead = this.head.next;
            this.dummyHead.next = nextHead;
            this.head = nextHead;
        }
        // // console.log("dummyHead:", this.dummyHead);
        // console.log("head:", this.head);
        return res;
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.head?.val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.head === null;
};

//Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue();
// console.log(obj.push(1));
// console.log("-------------------");
// console.log(obj.pop());
// console.log("-------------------");
// console.log(obj.push(2));
// console.log("-------------------");
// console.log(obj.peek());
// // console.log(obj.pop());
// var param_3 = obj.peek();
// var param_4 = obj.empty();
