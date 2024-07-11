/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
You want to determine if there is a valid path that exists from vertex source to vertex destination.
Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

Example 1:

Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

Example 2:

Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.

Constraints:

    1 <= n <= 2 * 105
    0 <= edges.length <= 2 * 105
    edges[i].length == 2
    0 <= ui, vi <= n - 1
    ui != vi
    0 <= source, destination <= n - 1
    There are no duplicate edges.
    There are no self edges.
*/

var validPath = function (n, edges, source, destination) {
    if (edges.length === 0 && source === 0 && destination === 0) {
        return true;
    }

    const routesForPoint = [];

    let result = false;

    for (const val of edges) {
        const valReversed = [val[1], val[0]];

        if ((val[1] === source && val[0] === destination) || (val[0] === source && val[1] === destination)) {
            return true;
        }

        const p1 = val[0];
        const p2 = val[1];
        if (routesForPoint[p1] === undefined) {
            routesForPoint[p1] = [];
        }
        if (routesForPoint[p2] === undefined) {
            routesForPoint[p2] = [];
        }
        routesForPoint[p1].push(val);
        routesForPoint[p2].push(valReversed);
    }

    const used = [];

    const checkRoutes = (prevPoint, point) => {
        const routes = routesForPoint[point];
        for (const route of routes) {
            const direction = route[1];
            const isUsed = used[direction];

            if (!isUsed && direction !== prevPoint) {
                used[direction] = true;
                const newPoint = direction;
                const newPrevPoint = point;
                if (newPoint === destination) {
                    result = true;
                } else {
                    checkRoutes(newPrevPoint, newPoint);
                }
            }
        }
        return false;
    };

    checkRoutes(null, source);
    return result;
};

// // console.log(
// // validPath(
// // 3,
// // [
// // [0, 1],
// // [1, 2],
// // [2, 0],
// // ],
// // 0,
// // 2
// // )
// // );

// console.log(
//     validPath(
//         6,
//         [
//             [0, 1],
//             [0, 2],
//             [3, 5],
//             [5, 4],
//             [4, 3],
//         ],
//         0,
//         5
//     )
// );

//const start = performance.now();
// console.log(
//     validPath(
//         5,
//         [
//             [0, 1],
//             [0, 2],
//             [0, 3],
//             [2, 4],
//         ],
//         0,
//         4
//     )
// );
// const end = performance.now();
//console.log(`Execution time: ${end - start} ms`);

// console.log(
// validPath2(
// 6,
// [
// [0, 1],
// [0, 3],
// [0, 5],
// [2, 5],
// [4, 2],
// [3, 2],
// ],
// 0,
// 4
// )
// );

// // console.log(validPath(1, [], 0, 0));

import { edges } from "./edges2.js";

const start = performance.now();

console.log(validPath(2498, edges, 0, 2497));

const end = performance.now();

console.log(`Execution time: ${end - start} ms`);
