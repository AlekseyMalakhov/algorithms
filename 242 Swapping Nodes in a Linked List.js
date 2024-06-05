/*
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed). 

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5] 

Constraints:
    The number of nodes in the list is n.
    1 <= k <= n <= 105
    0 <= Node.val <= 100
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

var swapNodes = function (head, k) {
    //get the length of the list
    let length = 0;
    let node = head;
    while (node) {
        length++;
        node = node.next;
    }
    // console.log("length:", length);
    if (length === 1) {
        return head;
    }
    node = head;

    //to make code cleaner let's add a sentinel head node
    let sentinelHead = new ListNode(null);
    sentinelHead.next = head;
    // //console.log(sentinelHead);

    let prevNodeCurr = sentinelHead;
    let prevNode1 = sentinelHead;
    let prevNode2 = sentinelHead;
    let node1 = null;
    let node2 = null;
    const endIndex = length - k + 1;

    // console.log("endIndex:", endIndex);

    for (let i = 1; i <= length; i++) {
        // console.log("check i = " + i);
        if (i === 1) {
            prevNodeCurr = sentinelHead;
            node = head;
        } else {
            prevNodeCurr = node;
            node = node.next;
        }
        if (i === k) {
            prevNode1 = prevNodeCurr;
            node1 = node;
        }
        if (i === endIndex) {
            prevNode2 = prevNodeCurr;
            node2 = node;
        }
        // console.log("------------------");
    }

    // console.log("prevNode1:", prevNode1);
    // console.log("node1:", node1.val);
    // console.log("prevNode2:", prevNode2.val);
    // console.log("node2:", node2.val);

    if (node1 !== prevNode2) {
        //connect prevNode1 to the node2
        //connect node2 to the node1.next
        //connect prevNode2 to node1
        //connect node1 to node2.next
        prevNode1.next = node2;
        const temp = node2.next;
        node2.next = node1.next;
        prevNode2.next = node1;
        node1.next = temp;
    } else {
        //connect prevNode1 to the node2
        //connect node2 to the node1
        //connect node1 to the node2.next
        prevNode1.next = node2;
        const temp = node2.next;
        node2.next = node1;
        node1.next = temp;
    }

    return sentinelHead.next;
};

const ll1 = createLinkedList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]);

const ll1reversed = swapNodes(ll1, 5);

// console.log(ll1reversed?.val);
// console.log(ll1reversed?.next?.val);
// console.log(ll1reversed?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
