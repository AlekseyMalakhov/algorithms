/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. 
Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

    MyLinkedList() Initializes the MyLinkedList object.
    int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
    void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, 
    the new node will be the first node of the linked list.
    void addAtTail(int val) Append a node of value val as the last element of the linked list.
    void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. 
    If index equals the length of the linked list, the node will be appended to the end of the linked list. 
    If index is greater than the length, the node will not be inserted.
    void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3

 

Constraints:

    0 <= index, val <= 1000
    Please do not use the built-in LinkedList library.
    At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
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

var MyLinkedList = function () {
    this.head = null;
    this.dummyNode = {
        val: null,
        next: this.head,
    };
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let current = this.head;

    for (let i = 0; i <= index; i++) {
        if (!current) {
            return -1;
        }
        if (i === index) {
            return current.val;
        } else {
            current = current.next;
        }
    }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    if (val !== undefined) {
        const newNode = {
            val,
            next: null,
        };
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
    }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (val !== undefined) {
        const newNode = {
            val,
            next: null,
        };
        let prev = this.dummyNode;
        let current = this.head;
        while (current) {
            prev = current;
            current = current.next;
        }
        prev.next = newNode;
        if (this.head === null) {
            this.head = newNode;
        }
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (val !== undefined) {
        let prev = this.dummyNode;
        let current = this.head;

        const newNode = {
            val,
            next: null,
        };

        for (let i = 0; i <= index; i++) {
            if (i === index) {
                if (!prev) {
                    return;
                }
                prev.next = newNode;
                newNode.next = current;
                if (index === 0) {
                    this.head = newNode;
                }
            } else {
                prev = current;
                current = current?.next;
            }
        }
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    let prev = this.dummyNode;
    let current = this.head;

    for (let i = 0; i <= index; i++) {
        if (i === index) {
            if (!prev) {
                return;
            }
            const next = current?.next;
            prev.next = next;
            if (index === 0) {
                this.head = next;
            }
        } else {
            prev = current;
            current = current?.next;
        }
    }
};

//Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();

obj.addAtHead();
obj.addAtTail(5);
// obj.addAtTail(2);
// obj.addAtHead(12);
//obj.addAtIndex(0, 22);
//obj.deleteAtIndex(3);
// var param_1 = obj.get(0);
// console.log("param_1:", param_1);

console.log("obj: " + JSON.stringify(obj, null, 2));
consoleLogLinkedList(obj.head, 10);
