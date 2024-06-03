/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node. 

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one. 

Constraints:
    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100
*/

//Definition for singly-linked list.
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head;
    // console.log("slow:", slow.val);
    let fast = head.next;
    // console.log("fast:", fast.val);

    while (fast) {
        slow = slow?.next;
        // console.log("slow:", slow?.val);
        fast = fast?.next?.next;
        // console.log("fast:", fast?.val);
        // console.log("------------");
    }

    return slow;
};

const ll1 = createLinkedList([1, 2, 3, 4, 5]);
const ll2 = createLinkedList([1, 2, 3, 4, 5, 6]);

// console.log(middleNode(ll1).val);
// //console.log(middleNode(ll2).val);
// // console.log(ll1.val);
// // console.log(ll1.next.val);
// // console.log(ll1.next.next.val);
// // console.log(ll1.next.next.next.val);
// // console.log(ll1.next.next.next.next.val);
