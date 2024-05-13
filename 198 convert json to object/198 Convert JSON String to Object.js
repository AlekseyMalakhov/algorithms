import fs from "node:fs";

/*
Given a string str, return parsed JSON parsedStr. You may assume the str is a valid JSON string hence it only includes strings, numbers, arrays, objects,
 booleans, and null. str will not include invisible characters and escape characters. 

Please solve it without using the built-in JSON.parse method.
 

Example 1:
Input: str = '{"a":2,"b":[1,2,3]}'
Output: {"a":2,"b":[1,2,3]}
Explanation: Returns the object represented by the JSON string.

Example 2:
Input: str = 'true'
Output: true
Explanation: Primitive types are valid JSON.

Example 3:
Input: str = '[1,5,"false",{"a":2}]'
Output: [1,5,"false",{"a":2}]
Explanation: Returns the array represented by the JSON string. 

Constraints:
    str is a valid JSON string
    1 <= str.length <= 105
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

var jsonParse = function (str) {
    const recursion = (dataStr) => {
        const strPart = dataStr.trim();
        console.log("dataStr after trim");
        console.log(strPart);
        if (strPart[0] === "[" && strPart[strPart.length - 1] === "]") {
            console.log("array = ");
            console.log(strPart);
            //it's an array
            //remove first and last items in array
            const newStr = strPart.substring(1, strPart.length - 1);
            console.log("newStr");
            console.log(newStr);
            console.log(newStr.length);
            if (newStr.length > 0) {
                //if there are letters inside - split it to items and push them into the array
                console.log("some check");
                console.log(newStr.split(","));
                const newArr = newStr.split(",").map((item) => recursion(item));
                console.log("newArr = ");
                console.log(newArr);
                return newArr;
            } else {
                return [];
            }
        }
        if (strPart[0] === "{" && strPart[strPart.length - 1] === "}") {
            console.log("object = ");
            console.log(strPart);
            //it's an object
            //remove first and last items in array
            const newStr = strPart.substring(1, strPart.length - 1).trim();
            console.log("newStr");
            console.log(newStr);
            //console.log(newStr.length);
            if (newStr.length > 0) {
                //if there are letters inside - split it to items and push them into the object
                const newArr = newStr.split(",");
                console.log("newArr for Obj = ");
                console.log(newArr);
                const newObj = {};
                for (let i = 0; i < newArr.length; i++) {
                    const parts = newArr[i].trim();
                    console.log("parts");
                    console.log(parts);
                    const separator = parts.indexOf(":");
                    const keyStr = parts.slice(0, separator).trim();
                    const value = parts.slice(separator + 1, parts.length).trim();

                    const key = keyStr.substring(1, keyStr.length - 1);
                    console.log("key = " + key);
                    console.log("value = " + value);
                    newObj[key] = recursion(value);
                }
                return newObj;
            } else {
                return {};
            }
        }
        if (strPart[0] === '"' && strPart[strPart.length - 1] === '"') {
            console.log("string");
            const newStr = strPart.substring(1, strPart.length - 1);
            //it's a string
            return newStr;
        }
        if (strPart[0] === "'" && strPart[strPart.length - 1] === "'") {
            console.log("string after split");
            const newStr = strPart.substring(1, strPart.length - 1);
            //it's a string
            return newStr;
        }
        //it's a number or null
        //console.log(strPart);
        console.log("primitive");
        console.log(strPart[0]);
        console.log(strPart[strPart.length - 3]);
        if (strPart === "null") {
            return null;
        }
        return Number(strPart);
    };

    return recursion(str);
};

//check
let data = null;
try {
    data = fs.readFileSync("./check.json", "utf8");
    //console.log(data);
} catch (err) {
    console.error(err);
}

console.log(jsonParse(data));
console.log(JSON.parse(data));
