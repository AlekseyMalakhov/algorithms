/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
The first node is considered odd, and the second node is even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity. 

Example 1:
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4] 

Constraints:
    The number of nodes in the linked list is in the range [0, 104].
    -106 <= Node.val <= 106

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

var oddEvenList = function (head) {
    //let dummyHead = new ListNode(null, head);
    //let oddHead = head;
    if (head === null) {
        return null;
    }
    let oddTail = head;
    let evenHead = head.next;
    let evenTail = evenHead;
    let current = head;

    let index = 1;

    while (current) {
        // console.log("current:", current);
        if (current === head) {
            current = current.next;
            index++;
        } else if (current === evenHead) {
            current = current.next;
            index++;
        } else {
            if (index % 2 === 0) {
                //it's even
                evenTail.next = current;
                const next = current.next;
                evenTail = current;
                current = next;
            } else {
                //it's odd
                oddTail.next = current;
                const next = current.next;
                oddTail = current;
                current = next;
            }
            index++;
        }
    }

    oddTail.next = evenHead;
    if (evenTail) {
        evenTail.next = null;
    }
    return head;
};

const ll1 = createLinkedList([]);

const ll1reversed = oddEvenList(ll1, 7);

consoleLogLinkedList(ll1reversed, 12);
