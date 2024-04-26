/*
Write a function that takes an object obj and returns a new immutable version of this object.
An immutable object is an object that can't be altered and will throw an error if any attempt is made to alter it.
There are three types of error messages that can be produced from this new object.
    Attempting to modify a key on the object will result in this error message: `Error Modifying: ${key}`.
    Attempting to modify an index on an array will result in this error message: `Error Modifying Index: ${index}`.
    Attempting to call a method that mutates an array will result in this error message: `Error Calling Method: ${methodName}`. 
    You may assume the only methods that can mutate an array are ['pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse'].
obj is a valid JSON object or array, meaning it is the output of JSON.parse().
Note that a string literal should be thrown, not an Error. 

Example 1:

Input: 
obj = {
  "x": 5
}
fn = (obj) => { 
  obj.x = 5;
  return obj.x;
}
Output: {"value": null, "error": "Error Modifying: x"}
Explanation: Attempting to modify a key on an object resuts in a thrown error. Note that it doesn't matter that the value was set to the same value as it was before.

Example 2:

Input: 
obj = [1, 2, 3]
fn = (arr) => { 
  arr[1] = {}; 
  return arr[2]; 
}
Output: {"value": null, "error": "Error Modifying Index: 1"}
Explanation: Attempting to modify an array results in a thrown error.

Example 3:

Input: 
obj = {
  "arr": [1, 2, 3]
}
fn = (obj) => { 
  obj.arr.push(4);
  return 42;
}
Output: { "value": null, "error": "Error Calling Method: push"}
Explanation: Calling a method that can result in a mutation results in a thrown error.

Example 4:

Input: 
obj = {
  "x": 2,
  "y": 2
}
fn = (obj) => { 
  return Object.keys(obj);
}
Output: {"value": ["x", "y"], "error": null}
Explanation: No mutations were attempted so the function returns as normal.

 

Constraints:
    obj is a valid JSON object or array
    2 <= JSON.stringify(obj).length <= 105
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
        }
        // if (typeof val === "function") {
        //     return "function";
        // }
        return "primitive";
    }
};

var makeImmutable = function (obj) {
    const handler = {
        get(target, prop, receiver) {
            const arrOfErrors = ["pop", "push", "shift", "unshift", "splice", "sort", "reverse"];
            if (Array.isArray(target) && arrOfErrors.includes(prop)) {
                return () => {
                    throw "Error Calling Method: " + prop;
                };
            } else {
                const type = getType(target[prop]);
                if (type === "primitive") {
                    return target[prop];
                }
                return new Proxy(target[prop], handler);
            }
        },
        set(target, prop, receiver) {
            if (Array.isArray(target)) {
                throw "Error Modifying Index: " + prop;
            } else {
                throw "Error Modifying: " + prop;
            }
        },
    };

    return new Proxy(obj, handler);
};

// const obj = makeImmutable({
//     x: 5,
//     w: () => {
//         console.log("I'm invoking");
//     },
// });
// // //console.log(obj.x);
// try {
//     console.log(obj.w());
// } catch (error) {
//     console.log(error);
//     //console.log(obj.x);
// }
// obj.x = 6; // throws "Error Modifying x"
// console.log(obj.x);

// const obj = makeImmutable([1, 2]);
// obj.push(7);
// //obj[1] = 7;

// const obj = {
//     x: 5,
// };
// const obj2 = makeImmutable(obj);
// const fn = (obj) => {
//     obj.x = 5;
//     return obj.x;
// };
// fn(obj2);

// const obj = makeImmutable({
//     arr: [1, 2, 3],
// });
// // //console.log(obj.x);
// const fn = (obj) => {
//     obj.arr.push(4);
//     return 42;
// };
// try {
//     fn(obj);
//     console.log(obj);
// } catch (error) {
//     console.log(error);
//     console.log(obj);
// }

// const obj = makeImmutable([1, 2, 3]);
// // //console.log(obj.x);
// const fn = (obj) => {
//     return typeof obj.push();
// };
// try {
//     fn(obj);
//     console.log(obj);
// } catch (error) {
//     console.log(error);
//     console.log(obj);
// }

//If you want to determine if your object method has been invoked or just accessed, you can wrap it in another function:
// const obj = {
//     someMethod: () => {
//         console.log("I'm invoking");
//     },
// };

// const handler = {
//     get(target, prop, receiver) {
//         if (prop === "someMethod") {
//             //here is a wrapper for your target[prop] method
//             return () => {
//                 console.log("This method is called! Do something!");
//                 target[prop]();
//             };
//         }
//     },
// };

// const proxyObj = new Proxy(obj, handler);

// proxyObj.someMethod; //nothing interesting - just access function literal
// proxyObj.someMethod(); //This method is called! Do something! I'm invoking
