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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//Let's try to emulate Linked List in JS

/*
Every linked list element is an object with 2 properties:
val - value of the element
next - link to the next element

Last element has next property equal to null
*/

const arr = [1, 2, 3, 4, 5, 6];

const createLinkedList = (arr) => {
  //let's create an array of objects with next as null
  //and then connect them to each other

  const arrOfObj = [];
  for (let i = 0; i < arr.length; i++) {
    arrOfObj[i] = {
      val: arr[i],
      next: null,
    };
  }
  for (let i = 0; i < arr.length; i++) {
    arrOfObj[i].next = arrOfObj[i + 1];
  }

  //return head
  return arrOfObj[0];
};

const head1 = createLinkedList(arr);
console.log(head1.val);
console.log(head1.next.val);
console.log(head1.next.next.val);
console.log(head1.next.next.next.val);
console.log(head1.next.next.next.next.val);

//and now lets try to find the middle of a linked list

var middleNode = function (head) {
  //first of all let's determine the length of a linked list
  let length = 0;
  let nextVal = head;
  while (nextVal) {
    length++;
    nextVal = nextVal.next;
  }
  //console.log("length " + length);

  //find node index
  let nodeIndex = 0;
  if (length % 2 === 0) {
    //if length is even
    nodeIndex = length / 2;
  } else {
    nodeIndex = Math.round(length / 2) - 1;
  }
  //console.log("nodeIndex is " + nodeIndex);

  //find node value
  let node = head;
  for (let i = 0; i < nodeIndex; i++) {
    node = node.next;
  }
  return node;
};

console.log(middleNode(head1));
