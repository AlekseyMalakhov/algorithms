/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise. 

Example 1:

Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.

Example 2:

Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.

Constraints:
    1 <= path.length <= 104
    path[i] is either 'N', 'S', 'E', or 'W'.
*/

var isPathCrossing = function (path) {
    const coords = {};

    let x = 0;
    let y = 0;

    const initCoords = JSON.stringify([x, y]);
    coords[initCoords] = true;

    for (let i = 0; i < path.length; i++) {
        const step = path[i];

        switch (step) {
            case "N":
                y++;
                break;
            case "E":
                x++;
                break;
            case "S":
                y--;
                break;
            case "W":
                x--;
                break;
        }

        const newCoords = JSON.stringify([x, y]);
        if (coords[newCoords] === undefined) {
            coords[newCoords] = true;
        } else {
            return true;
        }
        //console.log(coords);
    }
    //console.log(coords);
    return false;
};

console.log(isPathCrossing("NES"));
console.log(isPathCrossing("NESWW"));
