/*
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array). 

Example 1:

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2] 

Constraints:
    n == grid.length == grid[i].length
    1 <= n <= 200
    1 <= grid[i][j] <= 105
*/

var equalPairs = function (grid) {
    const rows = {};
    const columns = {};

    const cols = [];
    for (let i = 0; i < grid.length; i++) {
        //rows
        const row = grid[i];
        const rowStr = JSON.stringify(row);
        //console.log("rowStr:", rowStr);
        if (rows[rowStr] === undefined) {
            rows[rowStr] = 1;
        } else {
            rows[rowStr]++;
        }

        //columns
        for (let j = 0; j < row.length; j++) {
            if (i === 0) {
                cols[j] = [];
            }
            cols[j][i] = row[j];
        }
    }

    for (let i = 0; i < cols.length; i++) {
        const col = cols[i];
        const colStr = JSON.stringify(col);
        if (columns[colStr] === undefined) {
            columns[colStr] = 1;
        } else {
            columns[colStr]++;
        }
    }
    //console.log("cols:", cols);
    //console.log("rows:", rows);
    //console.log("columns:", columns);

    let pairs = 0;
    for (const x in rows) {
        const n1 = rows[x];
        if (columns[x] !== undefined) {
            const n2 = columns[x];
            const res = n1 * n2;
            pairs = pairs + res;
        }
    }

    return pairs;
};

console.log(
    equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
    ])
);

console.log(
    equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
    ])
);
