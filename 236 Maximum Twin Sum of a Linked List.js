/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
    For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.
Given the head of a linked list with even length, return the maximum twin sum of the linked list. 

Example 1:

Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 

Example 2:

Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 

Example 3:

Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001. 

Constraints:
    The number of nodes in the list is an even integer in the range [2, 105].
    1 <= Node.val <= 105
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

var pairSum = function (head) {
    //1) Find the middle of the linked list using the fast and slow pointer technique from the previous article.
    let n = 0;
    let slow = head;
    let fast = head.next;

    let prevNodeBeforeMiddle = null;
    while (fast) {
        n++;
        prevNodeBeforeMiddle = slow;
        slow = slow?.next;
        fast = fast?.next?.next;
    }

    const middle = slow;
    //return middle;
    //2) Once at the middle of the linked list, perform a reversal. Basically, reverse only the second half of the list.

    /*
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
    */
    // // // console.log(prevNodeBeforeMiddle);
    // // // console.log(middle);

    let head2 = null;
    let curr = middle;
    while (curr) {
        const temp = curr.next; //save next
        curr.next = head2; //swap 1
        head2 = curr; //swap 2
        curr = temp; //move on
    }

    prevNodeBeforeMiddle.next = head2;

    // // console.log(head?.val);
    // // console.log(head?.next?.val);
    // // console.log(head?.next?.next?.val);
    // // console.log(head?.next?.next?.next?.val);
    // // console.log(head?.next?.next?.next?.next?.val);
    // // console.log(head?.next?.next?.next?.next?.next?.val);
    // // console.log(head?.next?.next?.next?.next?.next?.next?.val);
    // // console.log(head?.next?.next?.next?.next?.next?.next?.next?.val);

    // // // console.log(head2?.val);
    // // // console.log(head2?.next?.val);
    // // // console.log(head2?.next?.next?.val);
    // // // console.log(head2?.next?.next?.next?.val);
    // // // console.log(head2?.next?.next?.next?.next?.val);
    // // // console.log(head2?.next?.next?.next?.next?.next?.val);
    // // // console.log(head2?.next?.next?.next?.next?.next?.next?.val);
    // // // console.log(head2?.next?.next?.next?.next?.next?.next?.next?.val);

    //3) After reversing the second half, every node is spaced n / 2 apart from its pair node, where n is the number of nodes in the list which we can find from step 1.
    let p1 = head;
    let p2 = head;
    for (let i = 0; i < n; i++) {
        p2 = p2.next;
    }

    let maxSum = -Infinity;
    while (p2) {
        // console.log("p1:", p1?.val);
        // console.log("p2:", p2?.val);

        if (p1?.val !== undefined && p2?.val !== undefined) {
            const sum = p1?.val + p2?.val;
            // // console.log("sum:", sum);
            if (sum > maxSum) {
                maxSum = sum;
            }
        }

        p1 = p1.next;
        p2 = p2.next;
        // console.log("---------");
    }

    return maxSum;

    //4) With that in mind, create another fast pointer n / 2 ahead of slow. Now, just iterate n / 2 times from head to find every pair sum slow.val + fast.val.
};

const ll1 = createLinkedList([5, 4, 2, 1]);
const ll2 = createLinkedList([4, 2, 2, 3]);
const ll3 = createLinkedList([1, 100000]);

// console.log(pairSum(ll1));

// // // console.log(ll1?.val);
// // // console.log(ll1?.next?.val);
// // // console.log(ll1?.next?.next?.val);
// // // console.log(ll1?.next?.next?.next?.val);
// // // console.log(ll1?.next?.next?.next?.next?.val);
// // // console.log(ll1?.next?.next?.next?.next?.next?.val);
// // // console.log(ll1?.next?.next?.next?.next?.next?.next?.val);
// // // console.log(ll1?.next?.next?.next?.next?.next?.next?.next?.val);
