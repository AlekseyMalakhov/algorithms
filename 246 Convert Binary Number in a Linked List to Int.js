/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.
 
Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0


Constraints:
    The Linked List is not empty.
    Number of nodes will not exceed 30.
    Each node's value is either 0 or 1.
*/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const createLinkedList = (arr) => {
    //create a pointer to the head which we will return later
    const head = new ListNode(arr[0], null);
    //save this pointer into a temporary variable
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        //create pointer to a new node
        const nextNode = new ListNode(arr[i], null);
        //assign this pointer to a previous next property
        prev.next = nextNode;
        //make this new node as previous
        prev = nextNode;
    }
    return head;
};

const consoleLogLinkedList = (head, n) => {
    let h = head;
    for (let i = 1; i <= n; i++) {
        // console.log(h?.val);
        h = h?.next;
    }
};

var getDecimalValue = function (head) {
    let length = 0;
    let current = head;
    while (current) {
        current = current.next;
        length++;
    }
    // //console.log(length);
    current = head;
    let sum = 0;
    let power = length - 1;
    while (current) {
        // console.log("sum init:", sum);
        sum = sum + current.val * 2 ** power;
        // console.log("power:", power);
        // console.log("current:", current.val);
        // console.log(2 ** power);
        // console.log(sum);
        // console.log("-----------------------------");
        current = current.next;
        power--;
    }
    console.log(sum);
    return sum;
};

const ll1 = createLinkedList([0]);

const ll1reversed = getDecimalValue(ll1, 7);

consoleLogLinkedList(ll1reversed, 12);
