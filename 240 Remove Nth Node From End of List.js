/*
Given the head of a linked list, remove the nth node from the end of the list and return its head. 

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1] 

Constraints:
    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz 

Follow up: Could you do this in one pass?
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

var removeNthFromEnd = function (head, n) {
    //get length
    let length = 0;
    let node = head;
    while (node) {
        length++;
        node = node.next;
    }

    //find node index
    const index = length - n + 1;

    //select the previous node and the index node

    let prev = null;
    let selected = head;
    for (let i = 1; i !== index; i++) {
        prev = selected;
        selected = selected.next;
    }

    //select next node
    const next = selected.next;
    //connect previous node to the next node
    if (prev) {
        prev.next = next;
    } else {
        head = next;
    }
    // console.log("prev:", prev);
    // console.log("selected:", selected);
    return head;
};

const ll1 = createLinkedList([1, 2]);

const ll1reversed = removeNthFromEnd(ll1, 1);

console.log(ll1reversed?.val);
console.log(ll1reversed?.next?.val);
console.log(ll1reversed?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
