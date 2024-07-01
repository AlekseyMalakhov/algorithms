/*
Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b. 

Example 1:

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

Example 2:

Input: root = [1,null,2,null,0,3]
Output: 3 

Constraints:
    The number of nodes in the tree is in the range [2, 5000].
    0 <= Node.val <= 105
*/
/*
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
    // // console.log(arrOfNodes);

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
*/

/*
var maxAncestorDiff = function (root1) {
    const check = (root) => {
        if (root === null) {
            return null;
        }
        let left = check(root.left); //{max: 5, min: 1} || null
        let right = check(root.right);

        let max;
        let min;

        if (left === null && right === null) {
            //base case (means leaf)
            // console.log("base case");
            max = root.val;
            min = root.val;
        } else if (left && right) {
            //two branches intersection
            
            //1) select who from branches has bigger max/min - they are your children. Select who from children is stronger and use him
            const max1 = Math.max(left.max, left.min, right.max, right.min);
            const min1 = Math.min(left.max, left.min, right.max, right.min);
            //2) Select who is stronger - strongest from your children or you
            max = Math.max(root.val, max1);
            min = Math.min(root.val, min1);
            
            //select both branches with you - who is stronger

        } else if (left === null && right) {
            //compare yourself and right
            max = Math.max(root.val, right.max, right.min);
            min = Math.min(root.val, right.max, right.min);
        } else if (right === null && left) {
            //compare yourself and left
            max = Math.max(root.val, left.max, left.min);
            min = Math.min(root.val, left.max, left.min);
        }

        // console.log("root val = " + root.val);
        // console.log(JSON.stringify({ max, min }));

        return {
            max,
            min,
        };
    };

    const res = check(root1);
    return Math.abs(res.max - res.min);
};
*/

var maxAncestorDiff = function (root1) {
    const check = (root, max, min) => {
        if (root === null) {
            return null;
        }

        //on the way down calculate the min a max for the current branch/path
        const newMax = Math.max(root.val, max);
        const newMin = Math.min(root.val, min);

        // console.log("for root val = ", root.val);
        // console.log("newMax:", newMax);
        // console.log("newMin:", newMin);

        //on the way up we calculate the difference
        let left = check(root.left, newMax, newMin);
        let right = check(root.right, newMax, newMin);
        // console.log("left:", left);
        // console.log("right:", right);

        //and return the maximum diff of your val, right and left
        if (left === null) {
            left = 0;
        }
        if (right === null) {
            right = 0;
        }
        const diff = Math.abs(newMax - newMin);
        // console.log("diff:", diff);
        const result = Math.max(diff, left, right);
        // console.log("result:", result);
        // console.log("------------------------------------");
        return result;
    };
    const res = check(root1, -Infinity, Infinity);
    return res;
};

//const tree = createTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]);
// //console.log(tree);

// //console.log(maxAncestorDiff(tree));
