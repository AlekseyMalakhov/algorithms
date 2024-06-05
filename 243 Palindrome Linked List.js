/*
Given the head of a singly linked list, return true if it is a
palindrome
or false otherwise. 

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false 

Constraints:
    The number of nodes in the list is in the range [1, 105].
    0 <= Node.val <= 9
 
Follow up: Could you do it in O(n) time and O(1) space?
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

var isPalindrome = function (head) {
    /*
    //let's find the middle
    let slow = head;
    let fast = head.next;

    while (fast) {
        slow = slow.next;
        fast = fast.next?.next;
    }

    console.log(slow.val);

    const head2 = slow;
    //let's reverse the 2nd half of the list

    let newHead = head2;
    let current = newHead.next;

    while (current) {
        const temp = current.next;
        current.next = newHead;
        newHead = current;
        current = temp;
    }

    // return newHead;
    */

    const arr = [];

    let node = head;

    while (node) {
        arr.push(node.val);
        node = node.next;
    }

    const arrRev = arr.toReversed();

    for (let i = 0; i < arr.length; i++) {
        const n1 = arr[i];
        const n2 = arrRev[i];
        if (n1 !== n2) {
            return false;
        }
    }
    return true;
};

const ll1 = createLinkedList([1, 2, 3, 4, 5]);

const ll1reversed = isPalindrome(ll1, 5);

console.log(ll1reversed?.val);
console.log(ll1reversed?.next?.val);
console.log(ll1reversed?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.val);
console.log(ll1reversed?.next?.next?.next?.next?.next?.next?.next?.val);
