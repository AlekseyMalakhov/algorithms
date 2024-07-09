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
    //check edge case
    if (edges.length === 0 && source === 0 && destination === 0) {
        return true;
    }

    const edgesWithBackRoutes = [];
    for (const val of edges) {
        const valReversed = [val[1], val[0]];
        edgesWithBackRoutes.push(val);
        edgesWithBackRoutes.push(valReversed);

        //and at the same time check if there is a direct route
        if ((val[1] === source && val[0] === destination) || (val[0] === source && val[1] === destination)) {
            return true;
        }
    }

    // console.log("edgesWithBackRoutes:", edgesWithBackRoutes);

    //let's create a list of directions for every point
    const routesForPoint = [];
    for (let i = 0; i < n; i++) {
        const arr = [];
        for (const val of edgesWithBackRoutes) {
            if (val[0] === i) {
                arr.push(val);
            }
        }
        routesForPoint.push(arr);
    }
    // console.log("routesForPoint:", routesForPoint);
    /*
    routesForPoint: [
        [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ] ],
        [ [ 1, 0 ] ],
        [ [ 2, 0 ], [ 2, 4 ] ],
        [ [ 3, 0 ] ],
        [ [ 4, 2 ] ]
      ]
        */

    //create a stack for routes
    const path = [];

    //create an object to easily check if route is used
    const used = {};
    //when we put route into stack we will at the same time put it into used object

    const checkRoutes = (prevPoint, point) => {
        // console.log("--------------------New checkRoutes call------------------------");
        // console.log("point:", point);
        const routes = routesForPoint[point];
        for (const route of routes) {
            // console.log("route:", route);
            const isUsed = used[JSON.stringify(route)];
            if (!isUsed && route[1] !== prevPoint) {
                //if this route does not lead back to the previous point
                //add this route to the path
                // console.log("good route found " + route);
                path.push(route);
                used[JSON.stringify(route)] = true;
                //create new point to go
                const newPoint = route[1];
                //update previous point
                const newPrevPoint = point;
                // // console.log("prevPoint:", newPrevPoint);
                // // console.log("newPoint:", newPoint);
                if (newPoint === destination) {
                    // console.log("-------------this is destination!------------");
                    return true;
                } else {
                    // // console.log("Run new checkRoutes with prevPoint = " + newPrevPoint + ", and point = " + newPoint);
                    const res = checkRoutes(newPrevPoint, newPoint);
                    if (res) {
                        return true;
                    } else {
                        //this route we recently added is wrong. Remove it from stack
                        const wrongPath = path.pop();
                        // console.log("wrongPath --------------:", wrongPath);
                    }
                }
            }
        }
        //if we checked all routes but have not found correct one, probably
        //this route is wrong
        return false;
    };

    const res = checkRoutes(null, source);
    // console.log(path);
    return res;
};

// // // console.log(
// // //     validPath(
// // //         3,
// // //         [
// // //             [0, 1],
// // //             [1, 2],
// // //             [2, 0],
// // //         ],
// // //         0,
// // //         2
// // //     )
// // // );

// // console.log(
// //     validPath(
// //         6,
// //         [
// //             [0, 1],
// //             [0, 2],
// //             [3, 5],
// //             [5, 4],
// //             [4, 3],
// //         ],
// //         0,
// //         5
// //     )
// // );

// // console.log(
// //     validPath(
// //         5,
// //         [
// //             [0, 1],
// //             [0, 2],
// //             [0, 3],
// //             [2, 4],
// //         ],
// //         0,
// //         4
// //     )
// // );

// // console.log(
// //     validPath(
// //         6,
// //         [
// //             [0, 1],
// //             [0, 3],
// //             [0, 5],
// //             [2, 5],
// //             [4, 2],
// //             [3, 2],
// //         ],
// //         0,
// //         4
// //     )
// // );

// // console.log(validPath(1, [], 0, 0));

// console.log(
// validPath(
// 50,
// [
// [31, 5],
// [10, 46],
// [19, 31],
// [5, 1],
// [31, 28],
// [28, 29],
// [8, 26],
// [13, 23],
// [16, 34],
// [30, 1],
// [16, 18],
// [33, 46],
// [27, 35],
// [2, 25],
// [49, 33],
// [44, 19],
// [22, 26],
// [30, 13],
// [27, 12],
// [8, 16],
// [42, 13],
// [18, 3],
// [21, 20],
// [2, 17],
// [5, 48],
// [41, 37],
// [39, 37],
// [2, 11],
// [20, 26],
// [19, 43],
// [45, 7],
// [0, 21],
// [44, 23],
// [2, 39],
// [27, 36],
// [41, 48],
// [17, 42],
// [40, 32],
// [2, 28],
// [35, 38],
// [3, 9],
// [41, 30],
// [5, 11],
// [24, 22],
// [39, 5],
// [40, 31],
// [18, 35],
// [23, 39],
// [20, 24],
// [45, 12],
// ],
// 29,
// 46
// )
// );