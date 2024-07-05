/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. 
It is guaranteed that the new value does not exist in the original BST.
Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them. 

Example 1:

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:

Example 2:

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

Example 3:

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5] 

Constraints:
    The number of nodes in the tree will be in the range [0, 104].
    -108 <= Node.val <= 108
    All the values Node.val are unique.
    -108 <= val <= 108
    It's guaranteed that val does not exist in the original BST.
*/

var insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }

    //base case - insertion
    //if left and right are null it means we are at the leaf
    if (root.left === null && root.right === null) {
        // console.log("base case leaf");
        //if val is less then root.val - add it to the left
        if (val < root.val) {
            // console.log("add to left");
            root.left = insertIntoBST(null, val);
        } else if (val > root.val) {
            // console.log("add to right");
            //if val is more then root.val - add it to the right
            root.right = insertIntoBST(null, val);
        }
        // console.log(JSON.stringify(root));
        return root;
    }
    //base case - insertion
    if (root.left === null && root.right !== null) {
        // console.log("base case left empty");
        //if root.left is null and root right is not null - it means we have a possibility to add our val here
        if (val < root.val) {
            //if val is less then root.val, then we can easilty drop it here - root.right in any case will be bigger - otherwise it would not be a BST
            root.left = insertIntoBST(null, val);
        } else {
            //else go deeper
            root.right = insertIntoBST(root.right, val);
        }
        return root;
    }
    //base case - insertion
    //if root. right is null and root.left is not - it means we have a chance to add our val here
    if (root.right === null && root.left !== null) {
        // console.log("base case right empty");
        //if val is more then root.val  - we can add it to the right. Left in any case will be less - because it's a BST
        if (val > root.val) {
            root.right = insertIntoBST(null, val);
        } else {
            //else go deeper
            root.left = insertIntoBST(root.left, val);
        }
        return root;
    }

    //when previous cases do not fit
    //usual case
    if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val);
    }

    // console.log("root: " + JSON.stringify(root, null, 2));
    return root;
};
