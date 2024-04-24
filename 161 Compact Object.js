/*
Given an object or array obj, return a compact object.
A compact object is the same as the original object, except with keys containing falsy values removed. 
This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. 
A value is considered falsy when Boolean(value) returns false.
You may assume the obj is the output of JSON.parse. In other words, it is valid JSON. 

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 

Constraints:
    obj is a valid JSON object
    2 <= JSON.stringify(obj).length <= 106
*/
/*
var compactObject = function (obj, parent, parentType, id) {
    //console.log(obj.length);
    //if obj is array
    if (Array.isArray(obj)) {
        console.log(obj);
        //handle array
        for (let i = 0; i < obj.length; i++) {
            compactObject(obj[i], obj, "array", i);
        }
    } else {
        //check if value is object
        if (typeof obj === "object") {
            //handle object
            for (let x in obj) {
                compactObject(obj[x], obj, "object", x);
            }
        } else {
            //value is primitive
            //handle primitive
            //console.log(obj);
            if (!Boolean(obj)) {
                if (parentType === "array") {
                    //remove from parent array
                    parent.splice(id, 1);
                }
                if (parentType === "object") {
                    //remove from parent object
                    delete parent[id];
                }
            }
        }
    }
    return obj;
};
*/

var compactObject = function (obj) {
    if (obj !== null) {
        //if obj is array
        if (Array.isArray(obj)) {
            //handle array
            const newArr = [];
            for (let i = 0; i < obj.length; i++) {
                const res = compactObject(obj[i]);
                if (res) {
                    newArr.push(res);
                }
            }
            obj = newArr;
        } else {
            //check if value is object
            if (typeof obj === "object") {
                //handle object
                const newObj = {};
                for (let x in obj) {
                    const res = compactObject(obj[x]);
                    if (res) {
                        newObj[x] = res;
                    }
                }
                obj = newObj;
            } else {
                //value is primitive
                //handle primitive
                if (Boolean(obj)) {
                    return obj;
                }
            }
        }
        return obj;
    }
};

//console.log(compactObject([null, 0, false, 1]));
//console.log(compactObject({ a: null, b: [false, 1] }));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        arr.splice(i, 1);
    }
    if (arr[i] === 7) {
        arr.splice(i, 1);
    }
}
console.log(arr);

const obj = {
    keke: 1,
    dudu: 2,
    pepe: 3,
    lili: 4,
    wywy: 5,
    rara: 6,
    bobo: 7,
};

for (let x in obj) {
    if (obj[x] === 4) {
        delete obj[x];
    }
    if (obj[x] === 6) {
        delete obj[x];
    }
}
console.log(obj);
*/
