/*
Given two values o1 and o2, return a boolean value indicating whether two values, o1 and o2, are deeply equal.
For two values to be deeply equal, the following conditions must be met:
    If both values are primitive types, they are deeply equal if they pass the === equality check.
    If both values are arrays, they are deeply equal if they have the same elements in the same order, 
        and each element is also deeply equal according to these conditions.
    If both values are objects, they are deeply equal if they have the same keys, and the associated values 
    for each key are also deeply equal according to these conditions.
You may assume both values are the output of JSON.parse. In other words, they are valid JSON.
Please solve it without using lodash's _.isEqual() function

 
Example 1:

Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
Output: true
Explanation: The keys and values match exactly.

Example 2:

Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.

Example 3:

Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.

Example 4:

Input: o1 = true, o2 = false
Output: false
Explanation: true !== false 

Constraints:
    1 <= JSON.stringify(o1).length <= 105
    1 <= JSON.stringify(o2).length <= 105
    maxNestingDepth <= 1000
*/

const getType = (val) => {
    if (val === null) {
        return "primitive";
    }
    if (Array.isArray(val)) {
        return "array";
    } else {
        if (typeof val === "object") {
            return "object";
        } else {
            return "primitive";
        }
    }
};

var areDeeplyEqual = function (o1, o2) {
    let type1 = getType(o1);
    let type2 = getType(o2);
    if (type1 !== type2) {
        return false;
    }
    if (type1 === "array") {
        //check length
        if (o1.length !== o2.length) {
            return false;
        } else {
            //check every item
            for (let i = 0; i < o1.length; i++) {
                const res = areDeeplyEqual(o1[i], o2[i]);
                if (!res) {
                    return false;
                }
            }
        }
    }
    if (type1 === "object") {
        //check every property
        for (let x in o1) {
            if (o2[x] === undefined) {
                //if property does not exist in the second object
                return false;
            }
            const res = areDeeplyEqual(o1[x], o2[x]);
            if (!res) {
                return false;
            }
        }
        for (let x in o2) {
            if (o1[x] === undefined) {
                //if property does not exist in the first object
                return false;
            }
        }
    }
    if (type1 === "primitive") {
        if (o1 !== o2) {
            return false;
        }
    }
    return true;
};

console.log(areDeeplyEqual({ x: 1, y: 2 }, { x: 1, y: 2 }));
console.log(areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 }));
console.log(areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] }));
console.log(areDeeplyEqual(true, false));
console.log(areDeeplyEqual({ x: 1 }, { x: 1, y: 2 }));
