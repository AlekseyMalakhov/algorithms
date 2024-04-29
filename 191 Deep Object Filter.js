/*
Given an object or an array obj and a function fn, return a filtered object or array filteredObject. 

Function deepFilter should perform a deep filter operation on the obj. The deep filter operation should 
remove properties for which the output of the filter function fn is false, as well as any empty objects or 
arrays that remain after the keys have been removed.

If the deep filter operation results in an empty object or array, with no remaining properties, deepFilter 
should return undefined to indicate that there is no valid data left in the filteredObject.

Example 1:

Input: 
obj = [-5, -4, -3, -2, -1, 0, 1], 
fn = (x) => x > 0
Output: [1]
Explanation: All values that were not greater than 0 were removed.

Example 2:

Input: 
obj = {"a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": {"a": 1}}, 
fn = (x) => typeof x === "string"
Output: {"b":"2","d":"4"}
Explanation: All keys with values that were not a string were removed. When the object keys were removed during the filtering process, 
any resulting empty objects were also removed.

Example 3:

Input: 
obj = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]], 
fn = (x) => x > 0
Output: [[5,10]]
Explanation: All values that were not greater than 0 were removed. When the values were removed during the filtering process, any 
resulting empty arrays were also removed.

Example 4:

Input: 
obj = [[[[5]]]], 
fn = (x) => Array.isArray(x)
Output: undefined

Constraints:
    fn is a function that returns a boolean value
    obj is a valid JSON object or array
    2 <= JSON.stringify(obj).length <= 105
*/

const getType = (val) => {
    if (val === null) {
        return "primitive";
    }
    if (Array.isArray(val)) {
        return "array";
    }
    if (typeof val === "object") {
        return "object";
    }
    return "primitive";
};

var deepFilter = function (obj, fn) {
    const type = getType(obj);

    if (type === "array") {
        const newArr = [];
        for (let i = 0; i < obj.length; i++) {
            if (obj[i] !== undefined) {
                const res = deepFilter(obj[i], fn);
                if (res !== undefined) {
                    newArr.push(res);
                }
            }
        }
        if (newArr.length === 0) {
            return undefined;
        }
        return newArr;
    }

    if (type === "object") {
        const newObj = {};
        for (let x in obj) {
            if (obj[x] !== undefined) {
                const res = deepFilter(obj[x], fn);
                if (res !== undefined) {
                    newObj[x] = res;
                }
            }
        }
        if (Object.keys(newObj).length === 0) {
            return undefined;
        }
        return newObj;
    }

    if (type === "primitive") {
        if (fn(obj)) {
            return obj;
        }
        return undefined;
    }
};

const data = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]];
const fn1 = (x) => x > 0;
console.log(deepFilter(data, fn1));
// console.log(deepFilter())
// console.log(deepFilter())
// console.log(deepFilter())
