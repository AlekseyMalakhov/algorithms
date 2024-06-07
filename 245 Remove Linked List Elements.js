/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head. 

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:
    The number of nodes in the list is in the range [0, 104].
    1 <= Node.val <= 50
    0 <= val <= 50
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
        console.log(h?.val);
        h = h?.next;
    }
};

var removeElements = function (head, val) {
    let dummyHead = new ListNode(null, head);
    //console.log(dummyHead);

    let prev = dummyHead;
    let current = head;

    while (current) {
        if (current === head) {
            if (current.val === val) {
                const next = head.next;
                head = next;
                current = head;
                prev.next = current;
            } else {
                prev = current;
                current = current.next;
            }
        } else {
            // console.log("start");
            // console.log("prev:", prev);
            // console.log("current:", current);
            if (current.val === val) {
                const next = current.next;
                prev.next = next;
                current = next;
            } else {
                prev = current;
                current = current.next;
            }
            // console.log("end");
            // console.log("prev:", prev);
            // console.log("current:", current);
            // console.log("-----------------");
        }
    }

    return head;
};

const ll1 = createLinkedList([7, 7, 7, 7, 7]);

const ll1reversed = removeElements(ll1, 7);

consoleLogLinkedList(ll1reversed, 12);
