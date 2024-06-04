/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, 
and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]

Constraints:
    The number of nodes in the list is n.
    1 <= n <= 500
    -500 <= Node.val <= 500
    1 <= left <= right <= n 
Follow up: Could you do it in one pass?
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

var reverseBetween = function (head, left, right) {
    let headLeft = head;
    let headRight = head;
    let prevNodeBeforeLeft = head;
    for (let i = 1; i < right; i++) {
        if (i <= left - 1) {
            prevNodeBeforeLeft = headLeft;
        }
        if (i < left) {
            headLeft = headLeft.next;
        }
        headRight = headRight.next;
    }
    const nextNodeAfterRight = headRight.next;
    console.log("prevNodeBeforeLeft:", prevNodeBeforeLeft);
    // console.log("nextNodeAfterRight:", nextNodeAfterRight);
    // console.log("headLeft:", headLeft);
    // console.log("headRight:", headRight);

    let head2 = headLeft;
    let curr = head2.next;
    head2.next = nextNodeAfterRight; //left node will become the end and will connect to the rest of the list
    while (curr && curr !== nextNodeAfterRight) {
        // console.log("before swap");
        // console.log("head2:", head2?.val);
        // console.log("curr:", curr?.val);
        const temp = curr?.next; //save next
        // console.log("temp:", temp?.val);
        curr.next = head2; //swap 1
        head2 = curr; //swap 2
        if (prevNodeBeforeLeft !== headLeft) {
            prevNodeBeforeLeft.next = head2; //connect the left part of the list to the head of reversed list
        } else {
            head = head2;
        }
        curr = temp; //move on.
        // console.log("after swap");
        // console.log("head2:", head2?.val);
        // console.log("curr:", curr?.val);
        // console.log("temp:", temp?.val);
        // console.log("--------------------------");
    }

    return head;
};

const ll1 = createLinkedList([1, 2, 3, 4, 5]);
//const ll1 = createLinkedList([5]);
//const ll1 = createLinkedList([3, 5]);

const ll1reversed = reverseBetween(ll1, 2, 4);
//const ll1reversed = reverseBetween(ll1, 1, 1);
//const ll1reversed = reverseBetween(ll1, 1, 2);

console.log(ll1reversed?.val);
console.log(ll1reversed?.next?.val);
console.log(ll1reversed?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
