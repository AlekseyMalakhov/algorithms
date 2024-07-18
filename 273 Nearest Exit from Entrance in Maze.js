/*
You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+').
You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you 
cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that 
is at the border of the maze. The entrance does not count as an exit.
Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists. 

Example 1:
Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
Output: 1
Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
Initially, you are at the entrance cell [1,2].
- You can reach [1,0] by moving 2 steps left.
- You can reach [0,2] by moving 1 step up.
It is impossible to reach [2,3] from the entrance.
Thus, the nearest exit is [0,2], which is 1 step away.

Example 2:
Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
Output: 2
Explanation: There is 1 exit in this maze at [1,2].
[1,0] does not count as an exit since it is the entrance cell.
Initially, you are at the entrance cell [1,0].
- You can reach [1,2] by moving 2 steps right.
Thus, the nearest exit is [1,2], which is 2 steps away.

Example 3:
Input: maze = [[".","+"]], entrance = [0,0]
Output: -1
Explanation: There are no exits in this maze.
*/

var nearestExit = function (maze, entrance) {
    /*
    For every point we should try to go right, left, top and bottom
    On every step we should mark this point as visited and aff 1 to the step
    Whenever we found an exit we update the min number of steps
    then we return. On every return we mark this node as NOT visited and reduce the
    amount of steps by 1
    If we found rout as 1 - it will be the shortest - no point to serach another one
    */
    let min = Infinity;
    let currentSteps = 0;
    const visited = Array(maze.length);

    for (let i = 0; i < maze.length; i++) {
        const arr = Array(maze[0].length).fill(false);
        visited[i] = arr;
    }

    const step = (node) => {
        // console.log("--------------------------");
        // console.log("node:", node);

        const i = node[0];
        const j = node[1];

        //if this node doesn't exist - the previous one is the exit
        if (!maze[i] || !maze[i][j]) {
            // console.log("node:", node + " - node does not exist");
            return true;
        }

        //if this node has been visited - don't use it
        if (visited[i][j]) {
            // console.log("node:", node + " - node has been visited");
            return false;
        }

        //if this node is a wall - don't use it
        if (maze[i][j] === "+") {
            // console.log("node:", node + " - this is a wall");
            return false;
        }

        //else - walk this node
        // console.log("node:", node + " - we can walk this node");
        visited[i][j] = true;
        currentSteps++;
        // console.log("node:", node + " - current steps = " + currentSteps);
        //walk top
        // console.log("node:", node + " - go top");
        const resTop = step([i - 1, j]);

        //walk bottom
        // console.log("node:", node + " - go bottom");
        const resBottom = step([i + 1, j]);

        //walk left
        // console.log("node:", node + " - go left");
        const resLeft = step([i, j - 1]);

        //walk right
        // console.log("node:", node + " - go right");
        const resRight = step([i, j + 1]);

        // console.log("resTop:", resTop);
        // console.log("resBottom:", resBottom);
        // console.log("resLeft:", resLeft);
        // console.log("resRight:", resRight);
        // console.log("currentSteps:", currentSteps);

        if (resTop || resBottom || resLeft || resRight) {
            // console.log("entrance:", entrance);
            if (currentSteps < min && (i !== entrance[0] || j !== entrance[1])) {
                //update min steps if this node is not an entrance
                // console.log("node:", node + " - we finish with this node and one of the directions was true - update min");
                min = currentSteps;
                // console.log("node:", node + " - new min is " + min);
            }
        }

        visited[i][j] = false;
        currentSteps--;
        // console.log("node:", node + " - finish with this node. Remove step. currentSteps = " + currentSteps);
        // console.log("----------------------------------------------------------------------------------");
    };

    const p1 = entrance[0];
    const p2 = entrance[1];
    visited[p1][p2] = true;
    // //console.log("visited:", visited);
    //step(entrance);

    //walk top
    // console.log("start - go top");
    step([p1 - 1, p2]);

    //walk bottom
    // console.log("start - go bottom");
    step([p1 + 1, p2]);

    //walk left
    // console.log("start - go left");
    step([p1, p2 - 1]);

    //walk right
    // console.log("start - go right");
    step([p1, p2 + 1]);

    return min === Infinity ? -1 : min;
};

const maze = [
    ["+", "+", ".", "+"],
    [".", ".", ".", "+"],
    ["+", "+", "+", "."],
];
const entrance = [1, 2];

// console.log(nearestExit(maze, entrance));

const maze2 = [
    ["+", "+", "+"],
    [".", ".", "."],
    ["+", "+", "+"],
];
const entrance2 = [1, 0];

// console.log(nearestExit(maze2, entrance2));

const maze3 = [[".", "+"]];
const entrance3 = [0, 0];

// console.log(nearestExit(maze3, entrance3));

const maze4 = [
    [".", ".", ".", ".", ".", "+", ".", ".", "."],
    [".", "+", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "+", ".", "+", ".", "+", ".", "+"],
    [".", ".", ".", ".", "+", ".", ".", ".", "."],
    [".", ".", ".", ".", "+", "+", ".", ".", "."],
    ["+", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "+", ".", ".", ".", ".", "."],
    [".", ".", ".", "+", ".", ".", ".", ".", "+"],
    ["+", ".", ".", "+", ".", "+", "+", ".", "."],
];
const entrance4 = [8, 4];

console.log(nearestExit(maze4, entrance4));
