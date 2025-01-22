/*
You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the 
board (i.e. board[n - 1][0]) and alternating direction each row.

You start on square 1 of the board. In each move, starting from square curr, do the following:

    Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
        This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
    If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
    The game ends when you reach the square n2.

A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. 
Squares 1 and n2 do not have a snake or ladder.

Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or 
ladder, you do not follow the subsequent snake or ladder.

    For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. You follow the ladder to square 
    3, but do not follow the subsequent ladder to 4.

Return the least number of moves required to reach the square n2. If it is not possible to reach the square, return -1.
 
Example 1:
Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation: 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.

Example 2:
Input: board = [[-1,-1],[-1,3]]
Output: 1

Constraints:
    n == board.length == board[i].length
    2 <= n <= 20
    board[i][j] is either -1 or in the range [1, n2].
    The squares labeled 1 and n2 do not have any ladders or snakes.
*/

var snakesAndLadders = function (board) {
    //create array
    const arr = [];

    let direction = "lr";
    for (let i = board.length - 1; i >= 0; i--) {
        const row = board[i];
        if (direction === "rl") {
            for (let j = row.length - 1; j >= 0; j--) {
                arr.push(row[j]);
            }
            direction = "lr";
        } else {
            for (let j = 0; j < row.length; j++) {
                arr.push(row[j]);
            }
            direction = "rl";
        }
    }

    //prepare calculation

    const queue = [];
    queue.push({
        node: 0,
        step: 0,
    });

    const visited = Array(arr.length).fill(false);
    //console.log("visited:", visited);
    let found = false;
    let res = -1;

    //debug
    let sdsfd = 0;
    //end debug
    while (queue.length !== 0 && !found) {
        // //debug
        sdsfd++;
        if (sdsfd > 10) {
            return;
        }
        // //end debug
        //console.log("-----------------------------");
        const { node, step } = queue.shift();
        visited[node] = true;
        //console.log("visited:", visited);

        // console.log("node:", node);
        // console.log("step:", step);

        for (let i = 1; i <= 6; i++) {
            let newNode = node + i;
            if (arr[newNode] - 1 !== node) {
                if (arr[newNode] !== -1) {
                    newNode = arr[newNode] - 1;
                }

                if (newNode === arr.length - 1) {
                    // //console.log("--------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!------------------------------");
                    found = true;
                    res = step + 1;
                }

                if (!visited[newNode]) {
                    queue.push({
                        node: newNode,
                        step: step + 1,
                    });
                }
            }
        }

        console.log(JSON.stringify(queue));
    }

    return res;
};

// const board = [
//     [-1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1],
//     [-1, 35, -1, -1, 13, -1],
//     [-1, -1, -1, -1, -1, -1],
//     [-1, 15, -1, -1, -1, -1],
// ];

// const board = [
//     [-1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1],
// ];

// const board = [
//     [-1, -1, -1, -1],
//     [-1, -1, -1, -1],
//     [-1, -1, -1, -1],
//     [-1, -1, -1, -1],
// ];

// const board = [
//     [17, 18, 19, 20],
//     [16, 15, 14, 13],
//     [9, 10, 11, 12],
//     [8, 7, 6, 5],
//     [1, 2, 3, 4],
// ];

// const board = [
//     [1, 1, -1],
//     [1, 1, 1],
//     [-1, 1, 1],
// ];

// const board = [
//     [-1, -1, 19, 10, -1],
//     [2, -1, -1, 6, -1],
//     [-1, 17, -1, 19, -1],
//     [25, -1, 20, -1, -1],
//     [-1, -1, -1, -1, 15],
// ];

const arr = [-1, -1, -1, -1, -1, 8, 18, 11, 4, 2, -1, -1, 12, -1, -1, 20, 2, 18, -1, -1, -1, 15, -1, 10, -1];

// const board = [
//     [-1, 10, -1, 15, -1],
//     [-1, -1, 18, 2, 20],
//     [-1, -1, 12, -1, -1],
//     [2, 4, 11, 18, 8],
//     [-1, -1, -1, -1, -1],
// ];

// const board = [
//     [-1, -1],
//     [-1, 3],
// ];

// const board = [
//     [-1, 4, -1],
//     [6, 2, 6],
//     [-1, 3, -1],
// ];

// const board = [
//     [1, 1, -1],
//     [1, 1, 1],
//     [-1, 1, 1],
// ];

// const board = [
//     [-1, -1, -1, -1, -1],
//     [-1, -1, -1, 6, -1],
//     [10, -1, -1, -1, -1],
//     [-1, 18, -1, -1, -1],
//     [-1, -1, -1, -1, -1],
// ];

// const board = [
//     [-1, -1, 128, -1, -1, -1, 136, -1, -1, -1, 109, -1],
//     [-1, -1, -1, -1, -1, 103, -1, -1, 56, 10, -1, -1],
//     [-1, -1, -1, -1, -1, -1, 116, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1, 50, -1, 67, 107],
//     [-1, 40, -1, -1, -1, 20, -1, 59, -1, 67, -1, -1],
//     [-1, -1, -1, -1, -1, -1, 112, 133, 111, -1, -1, -1],
//     [-1, -1, 112, -1, 74, -1, -1, -1, -1, -1, -1, -1],
//     [23, -1, 115, -1, 129, 126, -1, -1, -1, -1, -1, -1],
//     [106, 143, 81, -1, -1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1, 26, 102, 1, 29],
//     [26, -1, -1, -1, -1, -1, -1, -1, 27, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
// ];

const board = [
    [-1, 231, -1, 173, -1, -1, 46, 39, 30, -1, -1, -1, -1, -1, -1, 172, -1],
    [287, -1, -1, -1, -1, -1, -1, -1, -1, 66, -1, 205, -1, 28, -1, -1, -1],
    [141, -1, -1, -1, 43, -1, -1, 200, -1, -1, -1, 147, -1, 224, -1, -1, -1],
    [215, 89, 231, 80, 12, 214, 25, -1, -1, -1, -1, -1, 281, -1, 133, 237, -1],
    [-1, -1, -1, -1, 55, -1, 177, 172, -1, -1, -1, -1, -1, 284, 229, -1, -1],
    [-1, 45, 112, -1, -1, 33, -1, -1, -1, -1, -1, -1, -1, -1, -1, 178, 266],
    [-1, 128, -1, -1, 191, 219, -1, 140, -1, -1, -1, -1, -1, -1, 141, -1, -1],
    [-1, 105, -1, -1, -1, -1, -1, 173, -1, -1, -1, -1, -1, -1, -1, 181, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 78, 219, -1, 56, -1, 117, -1, -1, 88, -1, 44, 103, -1, 243],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 233, -1, 218, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [201, 136, -1, -1, -1, -1, -1, -1, -1, -1, -1, 184, 68, -1, -1, 107, -1],
    [-1, -1, -1, -1, -1, 185, -1, -1, -1, -1, 52, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 52, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];

console.log(snakesAndLadders(board));
