/*
Given a deeply nested object or array obj, return the object obj with any undefined values replaced by null.

undefined values are handled differently than null values when objects are converted to a JSON string using JSON.stringify(). 
This function helps ensure serialized data is free of unexpected errors.

Example 1:

Input: obj = {"a": undefined, "b": 3}
Output: {"a": null, "b": 3}
Explanation: The value for obj.a has been changed from undefined to null

Example 2:

Input: obj = {"a": undefined, "b": ["a", undefined]}
Output: {"a": null,"b": ["a", null]}
Explanation: The values for obj.a and obj.b[1] have been changed from undefined to null

Constraints:
    obj is a valid JSON object or array
    2 <= JSON.stringify(obj).length <= 105
*/

const getType = (val) => {
    if (val === null) {
        return "null";
    }
    if (val === undefined) {
        return "undefined";
    }
    if (Array.isArray(val)) {
        return "array";
    } else {
        if (typeof val === "object") {
            return "object";
        }
        // if (typeof val === "function") {
        //     return "function";
        // }
        return "primitive";
    }
};

var undefinedToNull = function (obj) {
    const type = getType(obj);

    if (type === "array") {
        const newArr = [];
        for (let i = 0; i < obj.length; i++) {
            const res = undefinedToNull(obj[i]);
            newArr.push(res);
        }
        return newArr;
    }

    if (type === "object") {
        const newObj = {};
        for (let x in obj) {
            const res = undefinedToNull(obj[x]);
            newObj[x] = res;
        }
        return newObj;
    }

    if (type === "primitive" || type === "null") {
        return obj;
    }

    if (type === "undefined") {
        return null;
    }
};

console.log(undefinedToNull({ a: undefined, b: 3 }));
console.log(undefinedToNull({ a: undefined, b: ["a", undefined] }));
