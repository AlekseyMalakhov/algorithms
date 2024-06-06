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

const consoleLogLinkedList = (head, n) => {
    let h = head;
    for (let i = 1; i <= n; i++) {
        console.log(h?.val);
        h = h?.next;
    }
};

var reverseEvenLengthGroups = function (head) {
    //initial state
    //it's better to start from a dummy node
    const dummyHead = new ListNode(null);
    dummyHead.next = head;
    let revGroupHead = null; // head of the group which is currently reversing
    let lastUneven = null; //last element in the previous uneven group where we will connect our reversed group head
    let temp = null; //temporary element which will become current on the next step
    let prev = null; //just prev element - just in case
    let tail = null; //first element in the group which has to be yet reversed. In the end it will become a tail of this group and
    //has to be connected to the last element of group to be reversed .next
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
        prev = current;
        console.log("prev:", prev);
        if (temp) {
            //if we have saved current element - use it
            current = temp;
        } else {
            current = current.next;
        }
        console.log("current:", current);
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

            if (groupNumber % 2 === 0) {
                //if group number is even - reverse the nodes
                //save next current in temp for not to lose it in reversing process
                temp = current.next;
                if (tail === null) {
                    console.log("tail is null");
                    console.log("temp:", temp);
                    //if tail is null - it means the group is yet to be reversed
                    //so make our current node a tail of this group. Later we will connect to
                    //thLastElementIn this group.next
                    tail = current;
                    //and to prevent circular reference in the end - tail.next should point to null
                    //if it is not true we will correct it later
                    tail.next = null;
                    console.log("tail:", tail);
                    //and at the same timefor the current step it will be a head of our
                    //reversing group
                    revGroupHead = current;
                    console.log("revGroupHead:", revGroupHead);
                    //Previous element will become lastUneven. To this element we will connect
                    //all the elements in this group during reversing process
                    lastUneven = prev;
                    console.log("lastUneven:", lastUneven);
                } else {
                    console.log("tail is not null");
                    //if tail is not null, it means we are already in the process of reversing
                    //first of all lets save the element we will go next after reversing this
                    //otherwise it may be lost
                    console.log("temp:", temp);
                    //then grab the current element and connect the head to it
                    current.next = revGroupHead;
                    //then make current a head of this reversing group
                    revGroupHead = current;
                    console.log("revGroupHead:", revGroupHead);
                    //then connect lastUneven to the new head
                    lastUneven.next = revGroupHead;
                    console.log("lastUneven:", lastUneven);
                    //if temp became null - it means it is the end of the list
                    if (temp === null) {
                        console.log("END___________________________END__________________________END");
                        current = null;
                    }
                }
            } else {
                //if current element does not belong to the reversing group it means it either a
                //just normal element or this is the first element of the group after the
                //reversed group so we should connect a tail of the reversed group to it
                console.log("uneven group");
                if (tail !== null) {
                    console.log("tail is not null");
                    //if tail is not null, it means there is not connected reversed group here
                    //so lets connect it and finish it
                    tail.next = current;
                    console.log("tail:", tail);
                    //and set to null all the variables which belong to the reversed group
                    temp = null;
                    tail = null;
                    revGroupHead = null;
                    lastUneven = null;
                }
            }
        }
        consoleLogLinkedList(ll1, 12);
        console.log("--------------------");
        if (n > 11) {
            return;
        }
    }
    return head;
};

const ll1 = createLinkedList([1, 1, 0, 6, 5]);

const ll1reversed = reverseEvenLengthGroups(ll1, 5);

//consoleLogLinkedList(ll1, 10);
