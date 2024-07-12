/*
You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
Return the number of connected components in the graph. 

Example 1:
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Example 2:
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1 

Constraints:
    1 <= n <= 2000
    1 <= edges.length <= 5000
    edges[i].length == 2
    0 <= ai <= bi < n
    ai != bi
    There are no repeated edges.
*/

var countComponents = function (n, edges) {
    const checked = Array(n).fill(false);
    // console.log("checked:", checked);

    const connections = [];

    for (const edge of edges) {
        const point1 = edge[0];
        const point2 = edge[1];

        if (!connections[point1]) {
            connections[point1] = [];
        }
        connections[point1].push(point2);

        if (!connections[point2]) {
            connections[point2] = [];
        }
        connections[point2].push(point1);
    }

    // console.log("connections:", connections);

    const searchForLimit = (node) => {
        //console.log("node:", node);
        //if we take node - make it checked
        checked[node] = true;

        //get the list of connections for a current node
        const directions = connections[node];
        //console.log("node = " + node + ", " + "directions:", directions);
        if (!directions) {
            //it's a node without neighbor
            return;
        }

        for (const direction of directions) {
            const isChecked = checked[direction];

            if (!isChecked) {
                //if this node has not been checked before - check it
                searchForLimit(direction);
            }
        }
    };

    let found = 0;
    //start from the node 0
    let baseNode = 0;

    while (baseNode !== -1) {
        found++;
        searchForLimit(baseNode);
        //after we checked for the whole graph from the current baseNode
        //we should check - if there are any not checked nodes still available
        //if there is some - grab the first available and start from the start
        baseNode = checked.findIndex((item) => !item);
        //if no base node found it means we checked the whole graph and all possible
        //isles found
    }

    // console.log(checked);

    return found;
};

// console.log(
// countComponents(5, [
// [0, 1],
// [1, 2],
// [3, 4],
// ])
// );

console.log(
    countComponents(4, [
        [2, 3],
        [1, 2],
        [1, 3],
    ])
);
