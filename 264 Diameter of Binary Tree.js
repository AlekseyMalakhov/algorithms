/*
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them. 

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1 

Constraints:
    The number of nodes in the tree is in the range [1, 104].
    -100 <= Node.val <= 100
*/

var diameterOfBinaryTree = function (root1) {
    let max = -Infinity;

    const check = (root, r) => {
        if (root === null) {
            return 0;
        }

        //for current node calculate length of a current branch
        //get the length of children branches
        let left = check(root.left);
        let right = check(root.right);

        // console.log("for the root of " + root.val);
        // console.log("left:", left);
        // console.log("right:", right);

        //calculate the length of branches passing through the current node
        const sum = left + right;
        // console.log("sum:", sum);

        //update max
        if (sum > max) {
            // console.log("max is updated");
            max = sum;
        }

        //select the longest out of branches
        //and return the length of the longest branch + itself

        let localMax = Math.max(left, right) + 1;
        if (r) {
            //root does not have back edge
            // console.log("this is root - remove one edge");
            localMax = localMax - 1;
        }
        // console.log("we return localMax:", localMax);

        // console.log("---------------------");
        return localMax;
    };

    check(root1, true);

    return max;
};
