/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as
 the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of 
 all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
 

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of
 the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.

Constraints:

    m == image.length
    n == image[i].length
    1 <= m, n <= 50
    0 <= image[i][j], color < 216
    0 <= sr < m
    0 <= sc < n
*/

var floodFill = function (image, sr, sc, color) {
    const selectedCellColor = image[sr][sc];

    const paint = (r, c) => {
        const cell = image[r][c];
        if (cell === color) {
            return;
        }
        if (cell === selectedCellColor) {
            const top = image[r - 1] ? image[r - 1][c] : undefined;
            const bottom = image[r + 1] ? image[r + 1][c] : undefined;
            const left = image[r][c - 1];
            const right = image[r][c + 1];
            if (cell !== color) {
                image[r][c] = color;
            }
            if (top !== undefined && top !== color) {
                paint(r - 1, c);
            }
            if (bottom !== undefined && bottom !== color) {
                paint(r + 1, c);
            }
            if (left !== undefined && left !== color) {
                paint(r, c - 1);
            }
            if (right !== undefined && right !== color) {
                paint(r, c + 1);
            }
        }
    };

    paint(sr, sc);
    return image;
};

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ],
        1,
        1,
        2
    )
);

console.log(
    floodFill(
        [
            [0, 0, 0],
            [0, 0, 0],
        ],

        0,
        0,
        0
    )
);
