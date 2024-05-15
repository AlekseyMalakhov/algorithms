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

const getNewArr = (str) => {
    const arr = [];
    let arrN = 0;
    let objN = 0;
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        temp = temp + letter;
        if (letter === "[") {
            //array begins
            arrN++;
        }
        if (letter === "{") {
            //array begins
            objN++;
        }

        if (letter === "]") {
            //array finishes
            arrN--;
            //if all nested arrays are closed - push it in the newArr
            if (arrN === 0 && objN === 0) {
                arr.push(temp);
                temp = "";
            }
        }
        if (letter === "}") {
            //object finishes
            objN--;
            //if all nested objects are closed - push it in the newArr
            if (arrN === 0 && objN === 0) {
                arr.push(temp);
                temp = "";
            }
        }
    }
    if (temp !== "" && temp !== "\r\n") {
        arr.push(temp);
    }
    return arr;
};

var jsonParse = function (str) {
    const recursion = (dataStr) => {
        let strPart = dataStr.trim();
        if (strPart[0] === ",") {
            //remove unnecessary comma
            strPart = strPart.slice(1);
            strPart = strPart.trim();
        }
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
                //console.log("some check");
                //console.log(newStr.split(","));
                //const newArr = newStr.split(",").map((item) => recursion(item));
                const newArr = getNewArr(newStr);
                console.log("newArr = ");
                console.log(newArr);
                return newArr.map((item) => recursion(item));
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
                //const newArr = newStr.split(",");
                const newArr = getNewArr(newStr);

                console.log("newArr for Obj = ");
                console.log(newArr);
                const newObj = {};
                for (let i = 0; i < newArr.length; i++) {
                    let parts = newArr[i].trim();
                    if (parts[0] === ",") {
                        //remove unnecessary comma
                        parts = parts.slice(1);
                    }
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

        console.log("strPart as primitive");
        console.log(strPart);

        if (strPart === "null") {
            return null;
        }
        if (strPart !== "") {
            //return Number(strPart);
            return strPart;
        }
        //return strPart;
    };

    return recursion(str);
};

/*
var jsonParse = function (str) {
    let strPart = str.trim();
};
*/

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