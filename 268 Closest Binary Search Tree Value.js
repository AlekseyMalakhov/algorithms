/*
Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. 
If there are multiple answers, print the smallest.

Example 1:
Input: root = [4,2,5,1,3], target = 3.714286
Output: 4

Example 2:
Input: root = [1], target = 4.428571
Output: 1
 
Constraints:
    The number of nodes in the tree is in the range [1, 104].
    0 <= Node.val <= 109
    -109 <= target <= 109
*/

var closestValue = function (root, target) {
    console.log("-----------------------------------------------");
    console.log("root.left: " + root.left?.val);
    console.log("root.val: " + root.val);
    console.log("root.right: " + root.right?.val);
    if (!root) {
        return null;
    }

    if (root.val === target) {
        console.log("return root.val 1");
        return root.val;
    }

    //base case. We came to the end - probably this will be the closest one
    if (root.left === null && root.right === null) {
        console.log("return root.val 2");
        //we came to the leaf
        return root.val;
    }

    //OK. Now usual case
    //we came to the node. It has value. And it has right and left value
    //now we should determine: Either:
    //1) We select root.val and return it
    //2) We select root.right and return it
    //3) We select root.left and return it
    //4) We go to the left
    //5) We go to the right
    //what we do depends on values and target
    // So let's imagine cases:
    /*
    case 1: target 10

            13
          /    \
        8       16

    as we see, our target fits between root.val and left. If we go further to the left, we will
    only go further from these value. So in this case we should determine what is closer to 
    the target - 8 or 13

     case 2: target 14

            13
          /    \
        8       16

    as we see, our target fits between root.val and right. If we go further to the right, we will
    only go further from these value. So in this case we should determine what is closer to 
    the target - 13 or 16

    case 3: target 3

            13
          /    \
        8       16

    as we see, our target is less then left, so we should transverse further to the left in the hope
    to find smth closer. If there is nothing further to the left (left is leaf) so it means it will be
    the closest possible value

    case 4: target 25

            13
          /    \
        8       16

    as we see, our target is more then right, so we should transverse further to the right in the hope
    to find smth closer. If there is nothing further to the right (right is leaf) so it means it will be
    the closest possible value

    case 5: target 10

            13
              \
               16

    as we see, our target is less then root.val, and we don't have left. So we return root.val

    case 6: target 25

            13
          /    
        8       

    as we see, our target is more then root.val, and we don't have right. So we return root.val
    
    */

    //so let's implement all the cases above

    //case 5
    if (root.left === null && root.val > target) {
        console.log("case 5");
        return root.val;
    }

    //case 6
    if (root.right === null && root.val < target) {
        console.log("case 6");
        return root.val;
    }

    //case 1
    if (root.left?.val < target && root.val > target) {
        console.log("case 1");
        const diff1 = Math.abs(root.left.val - target);
        const diff2 = Math.abs(root.val.val - target);

        if (diff1 < diff2) {
            return root.left;
        } else {
            return root.val;
        }
    }

    //case 2
    if (root.right?.val > target && root.val < target) {
        console.log("case 2");
        const diff1 = Math.abs(root.right.val - target);
        const diff2 = Math.abs(root.val - target);

        if (diff1 < diff2) {
            return root.right;
        } else {
            return root.val;
        }
    }

    //case 3
    if (root.left?.val > target) {
        console.log("case 3");
        return closestValue(root.left, target);
    }

    //case 4
    if (root.right?.val < target) {
        console.log("case 4");
        return closestValue(root.right, target);
    }
};

/*

*/
