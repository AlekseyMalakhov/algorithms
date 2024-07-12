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
    //1) we should keep track of nodes which we already checked. Let's create an array af them with true/false values
    //it will have faster access then object or map
    const checked = Array(n).fill(false);
    // console.log("checked:", checked);

    //and we should prepare a list of connected nodes for every node;

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
    //2) We should walk along the edges recursively until we find a leaf.
    //every time ve find a leaf, we should return to the base node an go to another branch

    //3) After there is no more branches to walk to, we should add 1 to the list of available areas.

    //4) Then we should check if all the items in
    //the graph have been checked. If some of them has not been checked - it means there is some more
    //possible isolated areas. And we should check them.

    //From which node to start a new check? That is a question. Of corse we can search the checked array and start
    //from the first available unchecked node. But traversing array every time is not a good practice.
    //but in this case it's very short - maximum 2000 items. So we will travers it and if we get and time limit error -
    //we will figure out something new.

    const searchForLimit = (node) => {
        console.log("node:", node);
        //if we take node - make it checked
        checked[node] = true;

        //get the list of connections for a current node
        const directions = connections[node];
        console.log("node = " + node + ", " + "directions:", directions);

        //go along the directions and check if they are leafs

        // if (directions.length === 1 && checked[directions[0]]) {
        //     //if there is only one direction and it goes back to the checked node - it is a leaf
        //     return true;
        // }

        for (const direction of directions) {
            const isChecked = checked[direction];

            if (!isChecked) {
                //if this node has not been checked before - check it
                searchForLimit(direction);
                //we should keep track of nodes which belong to the same group. And when there is no such nodes - finish group
                //when we are in a node, we should determine that this node is the last node of a group
                //how can we do it?

                //in general we don't care about what searchForLimit functio will return
                //the most important is to check as much nodes as possible
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

    //now we should

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
