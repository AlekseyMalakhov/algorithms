/*
Given the root of a binary tree, return the sum of values of its deepest leaves. 

Example 1:

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19 

Constraints:
    The number of nodes in the tree is in the range [1, 104].
    1 <= Node.val <= 100
*/

var deepestLeavesSum = function (root) {
    let queue = [root];
    let level = 0;
    const arr = [];

    while (queue.length) {
        let nextQueue = [];
        arr[level] = [];
        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];

            arr[level].push(node.val);

            // put the next level onto the queue
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }
        level++;
        queue = nextQueue;
    }

    const deepest = arr[level - 1];
    // console.log("deepest:", deepest);
    return deepest.reduce((a, b) => a + b);
};
