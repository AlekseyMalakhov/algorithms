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
    const recursion = (strPart) => {
        if (strPart[0] === "[" && strPart[strPart.length - 1] === "]") {
            //it's an array
            //remove first and last items in array
            const newStr = strPart.substring(1, strPart.length - 1);
            if (newStr.length > 0) {
                //if there are letters inside - split it to items and push them into the array
                const newArr = newStr.split(",").map((item) => recursion(item));
                return newArr;
            } else {
                return [];
            }
        }
        return strPart;
    };

    return recursion(str);
};

console.log(jsonParse("[5]"));
console.log(JSON.parse("[5]"));
