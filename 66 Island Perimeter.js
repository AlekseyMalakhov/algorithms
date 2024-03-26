/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and 
there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. 
One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example 1:

Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

Example 2:

Input: grid = [[1]]
Output: 4

Example 3:

Input: grid = [[1,0]]
Output: 4

Constraints:

    row == grid.length
    col == grid[i].length
    1 <= row, col <= 100
    grid[i][j] is 0 or 1.
    There is exactly one island in grid.
*/

var islandPerimeter = function (grid) {
    const getNeighbors = (i, j) => {
        let neighbors = 0;
        //check top
        if (grid[i][j - 1]) {
            neighbors++;
        }
        //check bottom
        if (grid[i][j + 1]) {
            neighbors++;
        }
        //check left
        if (grid[i - 1] && grid[i - 1][j]) {
            neighbors++;
        }
        //check right
        if (grid[i + 1] && grid[i + 1][j]) {
            neighbors++;
        }
        return neighbors;
    };

    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        const arr = grid[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 1) {
                const neighbors = getNeighbors(i, j);
                const sides = 4 - neighbors;
                perimeter = perimeter + sides;
            }
        }
    }
    return perimeter;
};

console.log(
    islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
    ])
);
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
