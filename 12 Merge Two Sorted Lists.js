/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.


*/

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

var mergeTwoLists = function (list1, list2) {
  let nextVal1 = list1;
  let nextVal2 = list2;
  const arr = [];
  while (nextVal1 || nextVal2) {
    if (nextVal1 && nextVal2) {
      if (nextVal1.val === nextVal2.val) {
        arr.push(nextVal1.val);
        arr.push(nextVal2.val);
        nextVal1 = nextVal1.next;
        nextVal2 = nextVal2.next;
      } else if (nextVal1.val < nextVal2.val) {
        arr.push(nextVal1.val);
        nextVal1 = nextVal1.next;
      } else if (nextVal2.val < nextVal1.val) {
        arr.push(nextVal2.val);
        nextVal2 = nextVal2.next;
      }
    } else if (!nextVal1 && nextVal2) {
      arr.push(nextVal2.val);
      nextVal2 = nextVal2.next;
    } else if (!nextVal2 && nextVal1) {
      arr.push(nextVal1.val);
      nextVal1 = nextVal1.next;
    }
  }
  console.log(arr);
  return createLinkedList(arr);
};

const arr1 = [1, 2, 4, 5];
const arr2 = [1, 3, 4];

const head1 = createLinkedList(arr1);
const head2 = createLinkedList(arr2);

console.log(mergeTwoLists(head1, head2));
