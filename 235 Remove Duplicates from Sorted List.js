/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. 

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]


Constraints:
    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.
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

var deleteDuplicates = function (head) {
    let curr = head;
    let next = curr?.next;

    while (next) {
        // console.log("start");
        // console.log("curr:", curr?.val);
        // console.log("curr.next:", curr?.next?.val);
        // console.log("next:", next?.val);
        if (curr.val === next.val) {
            //get the pointer to the next of next
            const nextOne = next?.next;
            //assign this pointer to the current next property
            //thus eliminating  next Node altogether
            curr.next = nextOne;
            next = nextOne;
        } else {
            // console.log("after changing");
            // console.log("curr:", curr?.val);
            // console.log("curr.next:", curr?.next?.val);
            // console.log("next:", next?.val);
            curr = curr?.next;
            next = curr?.next;
            // console.log("after moving");
            // console.log("curr:", curr?.val);
            // console.log("curr.next:", curr?.next?.val);
            // console.log("next:", next?.val);
            // console.log("-----------");
        }
    }

    return head;
};

const ll1 = createLinkedList([1, 1, 2]);
const ll2 = createLinkedList([1, 1, 2, 3, 3]);
const ll3 = createLinkedList([1, 1, 1]);

// console.log(deleteDuplicates(ll1));
// console.log(ll1.val);
// console.log(ll1.next.val);
// console.log(ll1.next?.next?.val);

// console.log(deleteDuplicates(ll2));
// console.log(ll2.val);
// console.log(ll2.next.val);
// console.log(ll2.next?.next?.val);
// console.log(ll2.next?.next?.next?.val);
// console.log(ll2.next?.next?.next?.next?.val);

console.log(deleteDuplicates(ll3));
console.log(ll3?.val);
console.log(ll3.next?.val);
console.log(ll3.next?.next?.val);
