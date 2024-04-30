/*
Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are === to each other. 

Example 1:

Input: 
getInputs = () => [[2,2],[2,2],[1,2]]
fn = function (a, b) { return a + b; }
Output: [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
Explanation:
const inputs = getInputs();
const memoized = memoize(fn);
for (const arr of inputs) {
  memoized(...arr);
}

For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn().
For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required.
For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.

Example 2:

Input: 
getInputs = () => [[{},{}],[{},{}],[{},{}]] 
fn = function (a, b) { return ({...a, ...b}); }
Output: [{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]
Explanation:
Merging two empty objects will always result in an empty object. It may seem like there should only be 1 call to fn() because of cache-hits, 
however none of those objects are === to each other.

Example 3:

Input: 
getInputs = () => { const o = {}; return [[o,o],[o,o],[o,o]]; }
fn = function (a, b) { return ({...a, ...b}); }
Output: [{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]
Explanation:
Merging two empty objects will always result in an empty object. The 2nd and 3rd third function calls result in a cache-hit. 
This is because every object passed in is identical.
 

Constraints:
    1 <= inputs.length <= 105
    0 <= inputs.flat().length <= 105
    inputs[i][j] != NaN
*/

function memoize(fn) {
    const cache = new Map();
    //well it seems like we need a deeeep comparison of arguments. Shallow will not work
    //if we have a result for current arguments - we will return them

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

    //some random string which we will return if we can't find a property
    // Because null and undefined is a result as well so we should return them f we find them
    //but if we can't find even null or undefined - then we will return this special string which means "there is really really nothing found"
    const notFound = "Not Found - Rsbr7EflW9vW9vJxta2uCQekhgCoUkSr";

    const deepCompare = (args, cacheKey) => {
        //compare array of arguments and array of cache key
        //if true - return value corresponding to this key
        //console.log("check " + JSON.stringify(args));
        //console.log("compare with " + JSON.stringify(cacheKey));
        //check shallow as references
        if (args === cacheKey) {
            return true;
        }
        //else check deep
        const type1 = getType(args);
        const type2 = getType(cacheKey);
        //check types - they should be the same if it is the same value
        if (type1 !== type2 || typeof args !== typeof cacheKey) {
            return notFound;
        }
        if (type1 === "array") {
            //the length of array must be the same
            if (args.length !== cacheKey.length) {
                return notFound;
            }
            //iterate
            for (let i = 0; i < args.length; i++) {
                //console.log("this 1");
                const result = deepCompare(args[i], cacheKey[i]);
                //console.log("let's compare " + args[i] + " and " + cacheKey[i]);
                //console.log(result);
                if (result === notFound) {
                    return notFound;
                }
            }
            return true;
        }
        if (type1 === "object") {
            const length = Object.keys(args).length;
            //corner case {} {}
            if (length === 0 && Object.keys(cacheKey).length === 0) {
                return notFound;
            }

            // the number of properties must be the same
            if (length !== Object.keys(cacheKey).length) {
                return notFound;
            }
            //iterate
            for (let x in args) {
                //deep check
                const result = deepCompare(args[x], cacheKey[x]);
                if (result === notFound) {
                    return notFound;
                }
            }
            return true;
        }
        if (type1 === "primitive") {
            if (args !== cacheKey) {
                return notFound;
            }
        }
        return true;
    };

    const checkCache = (args, selectedCache) => {
        //console.log("check " + JSON.stringify(args));
        for (let x of selectedCache) {
            // console.log("start");
            // console.log("we are searching for " + args + " in cache");
            // console.log("we are cheking " + x[0]);
            // console.log(x[0]);
            //["a", 1],
            //check shallow as references
            if (args === x[0]) {
                return x[1];
            }
            //else check deep
            if (deepCompare(args, x[0]) === true) {
                return x[1];
            }
        }
        return notFound;
    };
    return function (...args) {
        //console.log(cache);
        let result = notFound;
        const length = args.length;
        //console.log("length = " + length);
        if (cache.has(length)) {
            const selectedCache = cache.get(length);
            result = checkCache(args, selectedCache);
        } else {
            cache.set(length, new Map());
        }
        if (result === notFound) {
            result = fn(...args);
            const selected = cache.get(length);
            selected.set(args, result);
        }
        return result;
    };
}

/*
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
*/

/*
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log("-------------------------22");
console.log(memoizedFn(2, 2)); // 4
console.log("-------------------------22");
console.log(memoizedFn(2, 2)); // 4
console.log("-------------------------12");
console.log(memoizedFn(1, 2)); // 3
console.log(callCount); // 2
*/

/*
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return { ...a, ...b };
});
console.log(memoizedFn({}, {})); // {}
console.log(memoizedFn({}, {})); // {}
console.log(memoizedFn({}, {})); // {}
console.log(callCount); // 3
*/

/*
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return { ...a, ...b };
});
const o = {};
console.log(memoizedFn(o, o)); // {}
console.log(memoizedFn(o, o)); // {}
console.log(memoizedFn(o, o)); // {}
console.log(callCount); // 3
*/

let callCount = 0;
const memoizedFn = memoize(function (a) {
    callCount += 1;
    return !!a;
});
console.log("----------null");
console.log(memoizedFn(null)); //
console.log("------------undefined");
console.log(memoizedFn(undefined)); //
console.log("-------------null");
console.log(memoizedFn(null)); //
console.log("------------undefined");
console.log(memoizedFn(undefined)); //
console.log("---------------");
console.log(callCount);
