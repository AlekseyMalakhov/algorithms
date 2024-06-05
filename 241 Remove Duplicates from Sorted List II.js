/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. 
Return the linked list sorted as well. 

Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3] 

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
    let prevNormal = null;
    let current = head;

    while (current) {
        if (current.val !== current?.next?.val) {
            //if next value is not the same as the current then current value becomes prevNormal
            prevNormal = current;
        } else {
            //is next value is the same as the current value, we search for the next not current
            //and make a shortcut connecting previous normal value to
            //the next notcurrent one
            while (current.val === current?.next?.val) {
                current = current.next;
            }
            if (prevNormal) {
                prevNormal.next = current.next;
            } else {
                head = current.next;
            }
            // console.log("shotcut");
        }
        // console.log("prevNormal:", prevNormal?.val);
        // console.log("current:", current?.val);
        // console.log("---------------------");
        //the we move on
        current = current.next;
    }
    return head;
};

const ll1 = createLinkedList([1, 2, 3, 3, 4, 4, 5]);

const ll1reversed = deleteDuplicates(ll1, 1);

// console.log(ll1reversed?.val);
// console.log(ll1reversed?.next?.val);
// console.log(ll1reversed?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
// console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
