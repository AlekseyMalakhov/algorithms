/*
You are given the head of a linked list.

The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form the sequence of the natural numbers (1, 2, 3, 4, ...). 
The length of a group is the number of nodes assigned to it. In other words,

    The 1st node is assigned to the first group.
    The 2nd and the 3rd nodes are assigned to the second group.
    The 4th, 5th, and 6th nodes are assigned to the third group, and so on.

Note that the length of the last group may be less than or equal to 1 + the length of the second to last group.
Reverse the nodes in each group with an even length, and return the head of the modified linked list.

Example 1:

Input: head = [5,2,6,3,9,1,7,3,8,4]
Output: [5,6,2,3,9,1,4,8,3,7]
Explanation:
- The length of the first group is 1, which is odd, hence no reversal occurs.
- The length of the second group is 2, which is even, hence the nodes are reversed.
- The length of the third group is 3, which is odd, hence no reversal occurs.
- The length of the last group is 4, which is even, hence the nodes are reversed.

Example 2:

Input: head = [1,1,0,6]
Output: [1,0,1,6]
Explanation:
- The length of the first group is 1. No reversal occurs.
- The length of the second group is 2. The nodes are reversed.
- The length of the last group is 1. No reversal occurs.

Example 3:

Input: head = [1,1,0,6,5]
Output: [1,0,1,5,6]
Explanation:
- The length of the first group is 1. No reversal occurs.
- The length of the second group is 2. The nodes are reversed.
- The length of the last group is 2. The nodes are reversed. 

Constraints:
    The number of nodes in the list is in the range [1, 105].
    0 <= Node.val <= 105
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

var reverseEvenLengthGroups = function (head) {
    //initial state
    //it's better to start from a dummy node
    const dummyHead = new ListNode(null);
    dummyHead.next = head;
    let current = dummyHead;
    let n = 0;

    let groupNumber = 1;
    let currentNumberOfItems = 0;
    // console.log("n:", n);
    // console.log("currentNumberOfItems:", currentNumberOfItems);
    // console.log("groupNumber:", groupNumber);
    // console.log("--------------------");

    //move item by item
    while (current) {
        //make step
        current = current.next;
        if (current !== null) {
            //if step is not the last one
            n++; //increase the item counter
            currentNumberOfItems++; //increase the current number of items in a group
            if (currentNumberOfItems > groupNumber) {
                //if the current number of items is more then required number of items for the current group
                //it means we went out of the boundary of the current group and should start a new group
                groupNumber++; // move to the next group
                currentNumberOfItems = 1; // current number of items in the new group is 1 - it's our item which
                //we consider now
            }
            console.log("n:", n);
            console.log("currentNumberOfItems:", currentNumberOfItems);
            console.log("groupNumber:", groupNumber);

            let even = false;
            if (groupNumber % 2 === 0) {
                even = true;
            }
            console.log("even:", even);
        }
        console.log("--------------------");
    }
};

const ll1 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const ll1reversed = reverseEvenLengthGroups(ll1, 5);

// console.log(ll1reversed?.val);
// console.log(ll1reversed?.next?.val);
// console.log(ll1reversed?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
