/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0. 

Example 1:

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0 

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 50
    grid[i][j] is either 0 or 1.

*/

var maxAreaOfIsland = function (grid) {
    /*
    We should walk along the matrix. Every element of the matrix is a node. We should keep track of nodes
    which we have checked and mark them as checked somewhere.
    Whenever we find a "1" node which we haven't checked before it means it is the start of the island.
    We begin to check it's neighbors recursively and mark them as checked. When all neighbors are checked
    it means the island is found.
    We increment island count, return to the start of the island, and continue traversing matrix searching
    for a "1" node which have not been checked before    
    */

    let islands = 0;
    const checked = Array(grid.length);
    console.log("checked:", checked);

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        checked[i] = Array(row.length).fill(false);
        for (let j = 0; j < row.length; j++) {
            const node = row[j];
            if (node === 1) {
                checked[i][j] = true;
                //console.log("Found 1 at i = " + i + ", j = " + j);
            }
        }
        // console.log("i = " + i);
        // console.log(checked[i]);
        // console.log("----------");
    }
    console.log(checked);
    return islands;
};

const grid1 = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid1));

// const grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]];
// console.log(maxAreaOfIsland(grid2));

const check = [
    [false, false, true, false, false, false, false, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, true, true, true, false, false, false],
    [false, true, true, false, true, false, false, false, false, false, false, false, false],
    [false, true, false, false, true, true, false, false, true, false, true, false, false],
    [false, true, false, false, true, true, false, false, true, true, true, false, false],
    [false, false, false, false, false, false, false, false, false, false, true, false, false],
    [false, false, false, false, false, false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, false, true, true, false, false, false, false],
];
