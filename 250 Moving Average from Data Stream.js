/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:

    MovingAverage(int size) Initializes the object with the size of the window size.
    double next(int val) Returns the moving average of the last size values of the stream. 

Example 1:

Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3 

Constraints:
    1 <= size <= 1000
    -105 <= val <= 105
    At most 104 calls will be made to next.
*/

const consoleLogDoubleLinkedList = (head, tail, n) => {
    // console.log("Check head");
    let h = head;
    for (let i = 1; i <= n; i++) {
        // console.log(h?.value);
        h = h?.next;
    }
    // console.log("Check tail");
    let t = tail;
    for (let i = 1; i <= n; i++) {
        // console.log(t?.value);
        t = t?.prev;
    }
};

function Node(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
}

/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.head = null;
    this.tail = null;
    this.size = size;
    this.length = 0;
    this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    //at first let add our node to our doubly linked list
    const node = new Node(val);
    if (this.head === null && this.tail === null) {
        this.head = node;
        this.tail = node;
    } else {
        if (this.head === this.tail) {
            // //console.log("here");
            // //console.log(JSON.stringify(this.head, null, 2));
            this.head.next = node;
            node.prev = this.head;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
    this.length++;
    this.sum = this.sum + val;

    // //console.log(this.length);
    //now let's check the length of a linked list. If it get's more then size - remove the first element
    if (this.length > this.size) {
        const newHead = this.head.next;
        this.sum = this.sum - this.head.value;
        newHead.prev = null;
        this.head = newHead;
        this.length--;
    }
    //console.log(this.head);
    //now calculate average
    // let sum = 0;
    // let current = this.head;
    // for (let i = 0; i < this.size; i++) {
    //     // console.log("current:", current);

    //     if (current === null) {
    //         // console.log("exit");
    //         return sum / Math.min(this.size, this.length);
    //     }
    //     sum = sum + current.value;
    //     // console.log("sum:", sum);
    //     current = current.next;
    // }

    // console.log("this.size:", this.size);
    // console.log("sum:", sum);
    return this.sum / Math.min(this.size, this.length);

    //consoleLogDoubleLinkedList(this.head, this.tail, 10);
    // console.log("--------------");
};

var obj = new MovingAverage(3);
console.log(obj.next(1));
console.log(obj.next(10));
console.log(obj.next(3));
console.log(obj.next(5));
