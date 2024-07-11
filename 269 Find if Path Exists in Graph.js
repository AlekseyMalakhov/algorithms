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
let n = 0;
const checkCalls = () => {
    n++;
    console.log("Recursive function call = " + n);
};

var validPath = function (n, edges, source, destination) {
    // // console.log("start");
    //check edge case
    if (edges.length === 0 && source === 0 && destination === 0) {
        return true;
    }

    //let's create a list of directions for every point
    const routesForPoint = [];
    const edgesWithBackRoutes = [];

    for (const val of edges) {
        const valReversed = [val[1], val[0]];
        edgesWithBackRoutes.push(val);
        edgesWithBackRoutes.push(valReversed);

        //and at the same time check if there is a direct route
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

    // // console.log("edgesWithBackRoutes:", edgesWithBackRoutes);

    // // console.log("edgesWithBackRoutes ready");

    // // console.log("routesForPoint:", routesForPoint);
    // // console.log("routesForPoint ready");
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
    const used = new Map();

    //when we put route into stack we will at the same time put it into used object

    let record = 5;

    const checkRoutes = (prevPoint, point) => {
        // console.log("--------------------New checkRoutes call------------------------");
        //debug
        // if (path.length > record) {
        //     record = record * 2;
        // //     // console.log("record = " + record);
        // }
        //end debug
        // console.log("point:", point);
        const routes = routesForPoint[point];
        for (const route of routes) {
            // console.log("point: " + point + " - " + "route:", route);
            //console.log("used:", used);
            const isUsed = used.has(route);
            // console.log("point: " + point + " - " + "isUsed:", isUsed);
            if (!isUsed && route[1] !== prevPoint) {
                //if this route does not lead back to the previous point
                //add this route to the path
                // console.log("point: " + point + " - " + "good route found " + route);
                path.push(route);
                used.set(route, true);
                //create new point to go
                const newPoint = route[1];
                //update previous point
                const newPrevPoint = point;
                // console.log("point: " + point + " - " + "prevPoint:", newPrevPoint);
                // console.log("point: " + point + " - " + "newPoint:", newPoint);
                if (newPoint === destination) {
                    // console.log("point: " + point + " - " + "-------------this is destination!------------");
                    return true;
                } else {
                    // console.log("point: " + point + " - " + "Run new checkRoutes with prevPoint = " + newPrevPoint + ", and point = " + newPoint);

                    //normal solution
                    const res = checkRoutes(newPrevPoint, newPoint);
                    // console.log("point: " + point + " - " + "Finish checkRoutes with prevPoint = " + newPrevPoint + ", and point = " + newPoint);
                    if (res) {
                        return true;
                    } else {
                        //this route we recently added is wrong. Remove it from stack
                        const wrongPath = path.pop();
                        // console.log("point: " + point + " - " + "wrongPath --------------:", wrongPath);
                    }
                }
            }
        }
        //if we checked all routes but have not found correct one, probably
        //this route is wrong
        // console.log("point: " + point + " - " + "this rout is wrong");
        return false;
    };

    const res = checkRoutes(null, source);
    // // console.log(path);
    return res;
};

var validPath2 = function (n, edges, source, destination) {
    let g = new Array(n);
    for (let i = 0; i < n; i++) g[i] = [];
    for (let i of edges) {
        g[i[0]].push(i[1]);
        g[i[1]].push(i[0]);
    }
    console.log("g:", g); //this is the same as my routesForPoint
    // [ [ 1, 2, 3 ], [ 0 ], [ 0, 4 ], [ 0 ], [ 2 ] ]

    let vis = new Array(n).fill(0); //handle visited
    rec(source, g, vis);
    return vis[destination];
};

var rec = (node, g, vis) => {
    vis[node] = 1; //mark the node as visited. Similar as my used.set(route, true);
    for (let i of g[node]) {
        //iterate along the possible routes for the current node. Similar to my for (const route of routes) {
        if (!vis[i]) rec(i, g, vis); //similar to mine  if (!isUsed && route[1] !== prevPoint) { -
    }
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

console.log(
    validPath2(
        5,
        [
            [0, 1],
            [0, 2],
            [0, 3],
            [2, 4],
        ],
        0,
        4
    )
);

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

// import { edges } from "./edges.js";
// console.log(validPath2(200000, edges, 0, 199999));
