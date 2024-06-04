/*
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, 
where ⌊x⌋ denotes the largest integer less than or equal to x.
    For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively. 

Example 1:

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 

Example 2:

Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:

Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1. 

Constraints:
    The number of nodes in the list is in the range [1, 105].
    1 <= Node.val <= 105
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

var deleteMiddle = function (head) {
    //get the middle point a linked list
    let slow = head;
    let fast = head;
    let prevBeforeMiddle = head;
    let prevBeforePrev = head;
    let n = 0;

    while (slow) {
        n++;
        slow = slow.next;
    }

    if (n === 1) {
        return null;
    }

    slow = head;

    while (fast) {
        prevBeforePrev = prevBeforeMiddle;
        prevBeforeMiddle = slow;
        slow = slow.next;
        fast = fast?.next?.next;
    }
    // console.log("prevBeforePrev:", prevBeforePrev);
    // console.log("prevBeforeMiddle:", prevBeforeMiddle.val);
    // console.log("slow:", slow?.val);
    // console.log("n:", n);

    let middle = slow;
    let prev = prevBeforeMiddle;
    if (n % 2 !== 0) {
        middle = prevBeforeMiddle;
        prev = prevBeforePrev;
    }
    // console.log("middle:", middle.val);
    // console.log("prev:", prev.val);

    const next = middle?.next;
    prev.next = next;

    return head;
};
//For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
//        0, 1, 1, 2, and 2,
const ll1 = createLinkedList([1]);
//1 - prev
//2 - slow
//3 - prev
//4 - slow
//5 - prev

const ll1reversed = deleteMiddle(ll1);

console.log(ll1reversed?.val);
console.log(ll1reversed?.next?.val);
console.log(ll1reversed?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
