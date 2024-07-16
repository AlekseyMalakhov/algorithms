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
    let maxArea = 0;
    const checked = Array(grid.length);

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        checked[i] = Array(row.length).fill(false);
    }

    const calculateArea = (area, coords) => {
        const i = coords[0];
        const j = coords[1];

        if (!grid[i] || !grid[i][j]) {
            //if node === 0 || undefined
            return 0;
        }

        if (checked[i][j]) {
            //if node === 1 but has already been checked
            return 0;
        }

        //else check it
        checked[i][j] = true;
        //add it to the area
        area++;
        //calculate area of neighbors
        const leftArea = calculateArea(0, [i, j - 1]);
        const rightArea = calculateArea(0, [i, j + 1]);
        const topArea = calculateArea(0, [i + 1, j]);
        const bottomArea = calculateArea(0, [i - 1, j]);
        //return the total area for this node
        return area + leftArea + rightArea + topArea + bottomArea;
    };

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const node = row[j];
            if (!checked[i][j] && node === 1) {
                //it's a start of a new island
                //let's search of the neighbors of the node and calculate it's area
                const area = calculateArea(0, [i, j]);
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    }

    return maxArea;
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

const grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]];
console.log(maxAreaOfIsland(grid2));

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
