/*
Given the head of a singly linked list, reverse the list, and return the reversed list. 

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: [] 

Constraints:
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
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
/*
var reverseList = function (head) {
    let curr = head;
    let next = curr?.next;

    let newHead = curr;
    while (next) {
        curr = next;
        next = curr?.next;
        curr.next = newHead;
        newHead = curr;
    }
    return newHead;
};
*/

/*
var reverseList = function (head) {
    let newHead = head;
    let curr = newHead?.next;
    let next = curr?.next;
    if (newHead?.next) {
        newHead.next = null;
    }

    while (curr) {
        curr.next = newHead;
        newHead = curr;
        //move
        curr = next;
        next = next?.next;
    }
    return newHead;
};
*/

var reverseList = function (head) {
    let newHead = null;
    let curr = head;

    while (curr) {
        const temp = curr.next; //save next
        curr.next = newHead; //swap 1
        newHead = curr; //swap 2
        curr = temp; //move on
    }
    return newHead;
};

const ll1 = createLinkedList([1, 2, 3, 4, 5]);
const ll2 = createLinkedList([1, 2]);
const ll3 = createLinkedList([]);

const ll1reversed = reverseList(ll1);

console.log(ll1reversed?.val);
console.log(ll1reversed?.next?.val);
console.log(ll1reversed?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
