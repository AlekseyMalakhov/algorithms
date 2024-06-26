/*
An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, 
and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and 
right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true

Example 2:

Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false

Example 3:

Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false

Constraints:
    rec1.length == 4
    rec2.length == 4
    -109 <= rec1[i], rec2[i] <= 109
    rec1 and rec2 represent a valid rectangle with a non-zero area.
*/

var isRectangleOverlap = function (rec1, rec2) {
    const r1x1 = rec1[0];
    const r1y1 = rec1[1];
    const r1x2 = rec1[2];
    const r1y2 = rec1[3];

    const r2x1 = rec2[0];
    const r2y1 = rec2[1];
    const r2x2 = rec2[2];
    const r2y2 = rec2[3];

    //return rec1[0] < rec2[2] && rec2[0] < rec1[2] && rec1[1] < rec2[3] && rec2[1] < rec1[3];
    return r1x1 < r2x2 && r2x1 < r1x2 && r1y1 < r2y2 && r2y1 < r1y2;
};
//[x1, y1, x2, y2]
// console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
// console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
// console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]));
// console.log(isRectangleOverlap([5, 15, 8, 18], [0, 3, 7, 9]));
//console.log(isRectangleOverlap([4, 4, 14, 7], [4, 3, 8, 8]));

console.log(isRectangleOverlap([-148, -790, 822, -718], [-560, 89, 504, 612]));
