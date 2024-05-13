/*
Batching multiple small queries into a single large query can be a useful optimization. Write a class QueryBatcher that implements this functionality.

The constructor should accept two parameters:

    An asynchronous function queryMultiple which accepts an array of string keys input. It will resolve with an array of values that is the same length as the input array. 
    Each index corresponds to the value associated with input[i]. You can assume the promise will never reject.
    A throttle time in milliseconds t.

The class has a single method.

    async getValue(key). Accepts a single string key and resolves with a single string value. The keys passed to this function should eventually get passed 
    to the queryMultiple function. queryMultiple should never be called consecutively within t milliseconds. The first time getValue is called, 
    queryMultiple should immediately be called with that single key. If after t milliseconds, getValue had been called again, all the passed keys 
    should be passed to queryMultiple and ultimately returned. You can assume every key passed to this method is unique.

The following diagram illustrates how the throttling algorithm works. Each rectangle represents 100ms. The throttle time is 400ms.

Throttle info
 

Example 1:

Input: 
queryMultiple = async function(keys) { 
  return keys.map(key => key + '!');
}
t = 100 
calls = [
 {"key": "a", "time": 10}, 
 {"key": "b", "time": 20}, 
 {"key": "c", "time": 30}
]
Output: [
 {"resolved": "a!", "time": 10},
 {"resolved": "b!", "time": 110},
 {"resolved": "c!", "time": 110}
]
Explanation:
const batcher = new QueryBatcher(queryMultiple, 100);
setTimeout(() => batcher.getValue('a'), 10); // "a!" at t=10ms
setTimeout(() => batcher.getValue('b'), 20); // "b!" at t=110ms
setTimeout(() => batcher.getValue('c'), 30); // "c!" at t=110ms

queryMultiple simply adds an "!" to the key
At t=10ms, getValue('a') is called, queryMultiple(['a']) is immediately called and the result is immediately returned.
At t=20ms, getValue('b') is called but the query is queued
At t=30ms, getValue('c') is called but the query is queued.
At t=110ms, queryMultiple(['a', 'b']) is called and the results are immediately returned.

Example 2:

Input: 
queryMultiple = async function(keys) {
  await new Promise(res => setTimeout(res, 100));
  return keys.map(key => key + '!');
}
t = 100
calls = [
 {"key": "a", "time": 10},
 {"key": "b", "time": 20},
 {"key": "c", "time": 30}
]
Output: [
  {"resolved": "a!", "time": 110},
  {"resolved": "b!", "time": 210},
  {"resolved": "c!", "time": 210}
]
Explanation:
This example is the same as example 1 except there is a 100ms delay in queryMultiple. The results are the same except the promises resolve 100ms later.

Example 3:

Input: 
queryMultiple = async function(keys) { 
  await new Promise(res => setTimeout(res, keys.length * 100)); 
  return keys.map(key => key + '!');
}
t = 100
calls = [
  {"key": "a", "time": 10}, 
  {"key": "b", "time": 20}, 
  {"key": "c", "time": 30}, 
  {"key": "d", "time": 40}, 
  {"key": "e", "time": 250}
  {"key": "f", "time": 300}
]
Output: [
  {"resolved":"a!","time":110},
  {"resolved":"e!","time":350},
  {"resolved":"b!","time":410},
  {"resolved":"c!","time":410},
  {"resolved":"d!","time":410},
  {"resolved":"f!","time":450}
]
Explanation:
queryMultiple(['a']) is called at t=10ms, it is resolved at t=110ms
queryMultiple(['b', 'c', 'd']) is called at t=110ms, it is resolved at 410ms
queryMultiple(['e']) is called at t=250ms, it is resolved at 350ms
queryMultiple(['f']) is called at t=350ms, it is resolved at 450ms
 

Constraints:

    0 <= t <= 1000
    0 <= calls.length <= 10
    1 <= key.length <= 100
    All keys are unique
*/

/**
 * @param {Function} queryMultiple
 * @param {number} t
 * @return {void}
 */
var QueryBatcher = function (queryMultiple, t) {
    this.queryMultiple = queryMultiple;
    this.t = t;
    this.buffer = [];
    this.working = false;
    this.checkBuffer = async function () {
        //create a copy of current buffer which we will work with
        // console.log(this.buffer);
        // console.log(this.t);
        const inProcess = [...this.buffer];
        //empty the buffer for the new tasks
        this.buffer = [];
        //handle current tasks
        if (inProcess.length > 0) {
            //start timeout again for the next tasks. Bind this to newly created batcher object otherwise it will get lost in setTimeout
            setTimeout(this.checkBuffer.bind(this), this.t);
            //create a list of values to pass to queryMultiple function
            const task = inProcess.map((item) => item.value);
            //get the result of queryMultiple working
            const resultArr = await this.queryMultiple(task);
            //resolve avery getValue call with its corresponding result
            for (let i = 0; i < inProcess.length; i++) {
                const resolve = inProcess[i].resolveThisVal;
                resolve(resultArr[i]);
            }
        } else {
            //if during execution of timer there were no new calls - stop working
            this.working = false;
        }
    };
};

/**
 * @param {string} key
 * @return {Promise<string>}
 */
QueryBatcher.prototype.getValue = async function (key) {
    //first start
    if (!this.working) {
        //start working, register timer for the next call
        this.working = true;
        setTimeout(this.checkBuffer.bind(this), this.t);
        //handle current task
        const task = [];
        task.push(key);
        const result = await this.queryMultiple(task);
        return result[0];
    }
    //call during working
    if (this.working) {
        //add call to the buffer
        return new Promise((resolve) => {
            const obj = {
                value: key,
                resolveThisVal: resolve,
            };
            this.buffer.push(obj);
        });
    }
};

async function queryMultiple(keys) {
    return keys.map((key) => key + "!");
}

const batcher = new QueryBatcher(queryMultiple, 100);
batcher.getValue("a").then(console.log); // resolves "a!" at t=0ms
batcher.getValue("b").then(console.log); // resolves "b!" at t=100ms
batcher.getValue("c").then(console.log); // resolves "c!" at t=100ms
