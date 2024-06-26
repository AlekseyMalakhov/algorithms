/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5


*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const createTree = (arr) => {
    let root = null;

    const arrOfNodes = [];

    for (let i = 0; i < arr.length; i++) {
        let node = null;
        if (arr[i]) {
            node = new TreeNode(arr[i], null, null);
        }
        arrOfNodes.push(node);
    }
    // console.log(arrOfNodes);

    for (let i = 0; i < arrOfNodes.length; i++) {
        const node = arrOfNodes[i];
        if (node) {
            const left = arrOfNodes[i * 2 + 1];
            const right = arrOfNodes[i * 2 + 2];
            if (left) {
                node.left = left;
            }
            if (right) {
                node.right = right;
            }
        }
    }

    root = arrOfNodes[0];
    return root;
};

const tree = createTree([3, 9, 20, null, null, 15, 7]);
// console.log(tree);

console.log(minDepth(tree));

var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);

    if (leftDepth && rightDepth) {
        return Math.min(leftDepth, rightDepth) + 1;
    } else if (leftDepth) {
        return leftDepth + 1;
    } else {
        return rightDepth + 1;
    }
};
