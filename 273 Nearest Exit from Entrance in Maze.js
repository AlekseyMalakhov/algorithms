var nearestExit = function (maze, entrance) {
    let min = -1;
    const visited = Array(maze.length);

    for (let i = 0; i < maze.length; i++) {
        const arr = Array(maze[0].length).fill(false);
        visited[i] = arr;
    }

    let found = false;

    const init = {
        step: 0,
        node: entrance,
    };
    const queue = [init];

    while (!found && queue.length > 0) {
        // console.log("--------------------------");
        const item = queue.shift();
        //console.log("item:", item);
        const { node, step } = item;

        const i = node[0];
        const j = node[1];

        //if this node doesn't exist - the previous one is the exit
        if (!maze[i] || !maze[i][j]) {
            if (i !== entrance[0] || j !== entrance[1]) {
                if (step !== 1) {
                    // console.log("node:", node + " - node does not exist");
                    // console.log("step:", step);
                    found = true;
                    min = step - 1;
                }
            }
        } else {
            //if this node has been visited - don't use it, if this node is a wall - don't use it
            if (!found && !visited[i][j] && maze[i][j] !== "+") {
                // console.log("node:", node + " - we can work with it");
                // console.log("step:", step);
                visited[i][j] = true;

                //walk top
                const top = {
                    step: step + 1,
                    node: [i - 1, j],
                };

                //walk bottom
                const bottom = {
                    step: step + 1,
                    node: [i + 1, j],
                };

                //walk left
                const left = {
                    step: step + 1,
                    node: [i, j - 1],
                };

                //walk right
                const right = {
                    step: step + 1,
                    node: [i, j + 1],
                };

                queue.push(top);
                queue.push(bottom);
                queue.push(left);
                queue.push(right);
            }
        }
    }

    return min;
};

// const maze = [
//     ["+", "+", ".", "+"],
//     [".", ".", ".", "+"],
//     ["+", "+", "+", "."],
// ];
// const entrance = [1, 2];

// console.log(nearestExit(maze, entrance));

// const maze2 = [
//     ["+", "+", "+"],
//     [".", ".", "."],
//     ["+", "+", "+"],
// ];
// const entrance2 = [1, 0];

// console.log(nearestExit(maze2, entrance2));

const maze3 = [[".", "+"]];
const entrance3 = [0, 0];

console.log(nearestExit(maze3, entrance3));

// const maze4 = [
//     [".", ".", ".", ".", ".", "+", ".", ".", "."],
//     [".", "+", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", "+", ".", "+", ".", "+", ".", "+"],
//     [".", ".", ".", ".", "+", ".", ".", ".", "."],
//     [".", ".", ".", ".", "+", "+", ".", ".", "."],
//     ["+", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", "+", ".", ".", ".", ".", "."],
//     [".", ".", ".", "+", ".", ".", ".", ".", "+"],
//     ["+", ".", ".", "+", ".", "+", "+", ".", "."],
// ];
// const entrance4 = [8, 4];

// console.log(nearestExit(maze4, entrance4));
