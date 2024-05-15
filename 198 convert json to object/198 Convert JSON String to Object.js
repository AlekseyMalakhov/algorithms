import fs from "node:fs";
import { allowedNodeEnvironmentFlags } from "node:process";

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

/*
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

*/
var jsonParse = function (str) {
    let strPart = str.trim();
    let result = null;
    let tempPropertyName = "";
    //placeholder for no value. As null and false can be used as values
    const noValue = Symbol();
    let tempValue = noValue;
    let type = null;

    //console.log(str);

    const getNullOrNumberOrString = (val) => {
        if (val[0] !== '"' && val[val.length - 1] !== '"') {
            //if the value is not inside parenthesis - it's either Number ot null
            if (val === "null") {
                return null;
            }
            if (val === "false") {
                return false;
            }
            if (val === "true") {
                return true;
            }
            return Number(val);
        }
        //if it's an object
        if (val[0] === "{" && val[val.length - 1] === "}") {
            return val;
        }
        //if it's an array
        if (val[0] === "[" && val[val.length - 1] === "]") {
            return val;
        }
        return val.replaceAll('"', "");
    };

    if (getNullOrNumberOrString(strPart) === null) {
        return null;
    }

    if (getNullOrNumberOrString(strPart) === true) {
        return true;
    }

    if (getNullOrNumberOrString(strPart) === false) {
        return false;
    }
    const n = getNullOrNumberOrString(strPart);
    if (typeof n === "number" && !isNaN(n)) {
        return n;
    }

    const getLengthOfObjectTask = (task) => {
        let objCount = 0;
        for (let i = 0; i < task.length; i++) {
            const letter = task[i];
            //console.log("letter = " + letter)
            if (letter === "{") {
                //found a new object
                objCount++;
            }
            if (letter === "}") {
                //found the end of some object

                objCount--;
                if (objCount === 0) {
                    //if it's 0 - it's the end of our object
                    //return length (position of } + 1)
                    return i + 1;
                }
                //else it was nested continue to search ours
            }
        }
        return task.length;
    };

    const getLengthOfArrayTask = (task) => {
        let arrCount = 0;
        for (let i = 0; i < task.length; i++) {
            const letter = task[i];
            //console.log("letter = " + letter)
            if (letter === "[") {
                //found a new array
                arrCount++;
            }
            if (letter === "]") {
                //found the end of some array

                arrCount--;
                if (arrCount === 0) {
                    //if it's 0 - it's the end of our array
                    //return length (position of } + 1)
                    return i + 1;
                }
                //else it was nested continue to search ours
            }
        }
        return task.length;
    };

    for (let i = 0; i < strPart.length; i++) {
        const letter = strPart[i];
        console.log("---------------------------");
        //console.log("letter = " + letter);
        //console.log("type = " + type);
        if (letter === "{" && type === null) {
            //object begins
            result = {};
            //let's parse object property name
            type = "object property name";
        } else if (letter === ":" && type === "object property name") {
            //object property name has been parsed - add it
            //trim and remove end string punctuations
            tempPropertyName = tempPropertyName.trim().replaceAll('"', "");
            result[tempPropertyName] = null;
            //let's parse object property value
            type = "object property value";
        } else if (letter === "," && type === "object property value") {
            //object property value has been parsed - add it
            //trim and remove end string punctuations
            if (tempPropertyName) {
                result[tempPropertyName] = getNullOrNumberOrString(tempValue);
            }
            tempPropertyName = "";
            tempValue = noValue;
            //let's parse object's next property name
            type = "object property name";
        } else if (type === "object property name") {
            //if we are parsing object property name
            tempPropertyName = tempPropertyName + letter;
        } else if (letter === "}" && type === "object property value") {
            //object parsing is finished
            //add whatever value we have now
            //trim and remove end string punctuations
            if (tempValue !== noValue) {
                tempValue = tempValue.trim();
                //console.log(tempValue);
                result[tempPropertyName] = getNullOrNumberOrString(tempValue);
            }
            //console.log(result);
            return result;
        } else if (type === "object property value") {
            //if we are parsing object property name
            if (letter === "{") {
                //we found a new object - parse it and return as result
                console.log("ololo we found a new object at position = " + i);

                const remainder = strPart.slice(i);
                console.log(remainder);
                console.log("remainder length = " + remainder.length);
                const taskLength = getLengthOfObjectTask(remainder);
                const task = strPart.slice(i, i + taskLength);
                console.log("taskLength = " + taskLength);

                const res = jsonParse(task);
                console.log(task);
                console.log(res);
                result[tempPropertyName] = res;
                tempPropertyName = "";
                tempValue = noValue;
                console.log("next position for i = " + (i + taskLength - 1));
                i = i + taskLength - 1;
            } else if (letter === "[") {
                //we found a new array - parse it and return as result
                console.log("olele we found a new array at position = " + i);
                const remainder = strPart.slice(i);
                console.log(remainder);
                console.log("remainder length = " + remainder.length);
                const taskLength = getLengthOfArrayTask(remainder);
                const task = strPart.slice(i, i + taskLength);
                console.log("taskLength = " + taskLength);

                const res = jsonParse(task);
                console.log(task);
                console.log(res);
                result[tempPropertyName] = res;
                tempPropertyName = "";
                tempValue = noValue;
                console.log("next position for i = " + (i + taskLength - 1));
                i = i + taskLength - 1;
            } else {
                //it's just primitive - continue add it
                if (tempValue === noValue) {
                    tempValue = "";
                }
                tempValue = tempValue + letter;
            }
        } else if (letter === "[" && type === null) {
            //array begins
            result = [];
            //let's parse array values
            type = "array value";
        } else if (type === "array value") {
            if (letter === "[") {
                //new array found - parse it and return as result
                console.log("olele we found a new array at position = " + i);
                const remainder = strPart.slice(i);
                console.log(remainder);
                console.log("remainder length = " + remainder.length);
                const taskLength = getLengthOfArrayTask(remainder);
                const task = strPart.slice(i, i + taskLength);
                console.log("taskLength = " + taskLength);

                const res = jsonParse(task);
                console.log(task);
                console.log(res);
                result.push(res);
                tempPropertyName = "";
                tempValue = noValue;
                console.log("next position for i = " + (i + taskLength - 1));
                i = i + taskLength - 1;
            } else if (letter === "{") {
                //new object found - parse it and return as result
                //we found a new object - parse it and return as result
                console.log("ololo we found a new object at position = " + i);

                const remainder = strPart.slice(i);
                console.log(remainder);
                console.log("remainder length = " + remainder.length);
                const taskLength = getLengthOfObjectTask(remainder);
                const task = strPart.slice(i, i + taskLength);
                console.log("taskLength = " + taskLength);

                const res = jsonParse(task);
                console.log(task);
                console.log(res);
                result.push(res);
                tempPropertyName = "";
                tempValue = noValue;
                console.log("next position for i = " + (i + taskLength - 1));
                i = i + taskLength - 1;
            } else if (letter === ",") {
                //array value has been parsed - add it
                //trim and remove end string punctuations
                if (tempValue !== noValue) {
                    tempValue = tempValue.trim();
                    tempValue = getNullOrNumberOrString(tempValue);
                    result.push(tempValue);
                    tempValue = noValue;
                }
            } else if (letter === "]") {
                //array parsing is finished
                //add whatever value we have now
                //trim and remove end string punctuations
                if (tempValue !== noValue) {
                    tempValue = tempValue.trim();
                    tempValue = getNullOrNumberOrString(tempValue);
                    result.push(tempValue);
                }
                return result;
            } else {
                //it's just primitive - continue add it
                if (tempValue === noValue) {
                    tempValue = "";
                }
                tempValue = tempValue + letter;
            }
        }
    }
    console.log("here2");
    return result;
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
