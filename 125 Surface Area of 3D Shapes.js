/*
You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).
After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.
Return the total surface area of the resulting shapes.
Note: The bottom face of each shape counts toward its surface area.

Example 1:

Input: grid = [[1,2],[3,4]]
Output: 34

Example 2:

Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 32

Example 3:

Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
Output: 46

Constraints:
    n == grid.length == grid[i].length
    1 <= n <= 50
    0 <= grid[i][j] <= 50
*/

var surfaceArea = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const height = grid[i][j];
            const north = grid[i - 1] ? grid[i - 1][j] : null;
            const south = grid[i + 1] ? grid[i + 1][j] : null;
            const east = grid[i][j + 1];
            const west = grid[i][j - 1];
            if (height !== 0) {
                res = res + 2; //top and bottom
                if (!north) {
                    //if nothing is here - take full area
                    res = res + height;
                } else {
                    //if something is covering us
                    if (north < height) {
                        //if it is lower - take only remaining area
                        res = res + height - north;
                    }
                    //if it is higher - there is no area to expose
                }
                if (!south) {
                    res = res + height;
                } else {
                    if (south < height) {
                        res = res + height - south;
                    }
                }
                if (!east) {
                    res = res + height;
                } else {
                    if (east < height) {
                        res = res + height - east;
                    }
                }
                if (!west) {
                    res = res + height;
                } else {
                    if (west < height) {
                        res = res + height - west;
                    }
                }
            }
        }
    }
    return res;
};

console.log(
    surfaceArea([
        [1, 2],
        [3, 4],
    ])
);
console.log("---------------");
console.log(
    surfaceArea([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ])
);
console.log("---------------");
console.log(
    surfaceArea([
        [2, 2, 2],
        [2, 1, 2],
        [2, 2, 2],
    ])
);
