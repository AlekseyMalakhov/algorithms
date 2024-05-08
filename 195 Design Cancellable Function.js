/*
Sometimes you have a long running task, and you may wish to cancel it before it completes. To help with this goal,
 write a function cancellable that accepts a generator object and returns an array of two values: a cancel function and a promise.
You may assume the generator function will only yield promises. It is your function's responsibility to pass the values resolved by the 
promise back to the generator. If the promise rejects, your function should throw that error back to the generator.
If the cancel callback is called before the generator is done, your function should throw an error back to the generator. 
That error should be the string "Cancelled" (Not an Error object). If the error was caught, the returned promise should 
resolve with the next value that was yielded or returned. Otherwise, the promise should reject with the thrown error. No more code should be executed.
When the generator is done, the promise your function returned should resolve the value the generator returned. 
If, however, the generator throws an error, the returned promise should reject with the error.
An example of how your code would be used:

function* tasks() {
  const val = yield new Promise(resolve => resolve(2 + 2));
  yield new Promise(resolve => setTimeout(resolve, 100));
  return val + 1; // calculation shouldn't be done.
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // logs "Cancelled" at t=50ms

If instead cancel() was not called or was called after t=100ms, the promise would have resolved 5. 

Example 1:

Input: 
generatorFunction = function*() { 
  return 42; 
}
cancelledAt = 100
Output: {"resolved": 42}
Explanation:
const generator = generatorFunction();
const [cancel, promise] = cancellable(generator);
setTimeout(cancel, 100);
promise.then(console.log); // resolves 42 at t=0ms

The generator immediately yields 42 and finishes. Because of that, the returned promise immediately resolves 42. Note that cancelling a 
finished generator does nothing.

Example 2:

Input:
generatorFunction = function*() { 
  const msg = yield new Promise(res => res("Hello")); 
  throw `Error: ${msg}`; 
}
cancelledAt = null
Output: {"rejected": "Error: Hello"}
Explanation:
A promise is yielded. The function handles this by waiting for it to resolve and then passes the resolved value back to the generator. 
Then an error is thrown which has the effect of causing the promise to reject with the same thrown error.

Example 3:

Input: 
generatorFunction = function*() { 
  yield new Promise(res => setTimeout(res, 200)); 
  return "Success"; 
}
cancelledAt = 100
Output: {"rejected": "Cancelled"}
Explanation:
While the function is waiting for the yielded promise to resolve, cancel() is called. This causes an error message to be sent back 
to the generator. Since this error is uncaught, the returned promise rejected with this error.

Example 4:

Input:
generatorFunction = function*() { 
  let result = 0; 
  yield new Promise(res => setTimeout(res, 100));
  result += yield new Promise(res => res(1)); 
  yield new Promise(res => setTimeout(res, 100)); 
  result += yield new Promise(res => res(1)); 
  return result;
}
cancelledAt = null
Output: {"resolved": 2}
Explanation:
4 promises are yielded. Two of those promises have their values added to the result. After 200ms, the generator finishes with 
a value of 2, and that value is resolved by the returned promise.

Example 5:

Input: 
generatorFunction = function*() { 
  let result = 0; 
  try { 
    yield new Promise(res => setTimeout(res, 100)); 
    result += yield new Promise(res => res(1)); 
    yield new Promise(res => setTimeout(res, 100)); 
    result += yield new Promise(res => res(1)); 
  } catch(e) { 
    return result; 
  } 
  return result; 
}
cancelledAt = 150
Output: {"resolved": 1}
Explanation:
The first two yielded promises resolve and cause the result to increment. However, at t=150ms, the generator is cancelled. 
The error sent to the generator is caught and the result is returned and finally resolved by the returned promise.

Example 6:

Input: 
generatorFunction = function*() { 
  try { 
    yield new Promise((resolve, reject) => reject("Promise Rejected")); 
  } catch(e) { 
    let a = yield new Promise(resolve => resolve(2));
    let b = yield new Promise(resolve => resolve(2)); 
    return a + b; 
  }; 
}
cancelledAt = null
Output: {"resolved": 4}
Explanation:
The first yielded promise immediately rejects. This error is caught. Because the generator hasn't been cancelled, 
execution continues as usual. It ends up resolving 2 + 2 = 4.

Constraints:
    cancelledAt == null or 0 <= cancelledAt <= 1000
    generatorFunction returns a generator object
*/

var cancellable = function (generator) {
    let cancelResult;
    const cancel = () => {
        console.log("canc");
        const res = generator.throw("leleel123");
        cancelResult = res.value;
        console.log("this res I got in cancel " + JSON.stringify(res));
    };
    let p = 0;

    const run = (nextStep) => {
        console.log("nextStep = " + JSON.stringify(nextStep));
        //run always returns a promise
        return new Promise((resolve, reject) => {
            //if there are some tasks in a list
            if (!nextStep.done) {
                //run the promise
                nextStep.value.then((res) => {
                    //get the new value
                    console.log("P " + p + " is finished");
                    console.log("res P" + p + " = " + res);
                    try {
                        //get next promise in the list
                        console.log("Call generators next()");
                        const nextGenStep = generator.next(res);
                        p++;
                        console.log("P = " + p);
                        //create a new promise with this result
                        if (cancelResult !== undefined) {
                            console.log("we go here " + cancelResult);
                            resolve(cancelResult);
                        } else {
                            run(nextGenStep)
                                .then((res) => resolve(res))
                                .catch((err) => reject(err));
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            } else {
                if (nextStep.value === undefined) {
                    reject("Cancelled");
                } else {
                    resolve(nextStep.value);
                }
            }
            console.log("-------------------------------------");
        });
    };

    //we come to the first yield in promise
    p++;
    console.log("Call generators next()");
    const nextStep = generator.next(); //next step is a promise, because this generator returns a promise
    console.log("P = " + p);
    const promise = run(nextStep); //then we run next step

    return [cancel, promise];
};

/*
Step by step execution
1) run generator function - come to the first yield
2) yeild1 retuns a new Promise(res => setTimeout(res, 100)) to nextStep. Lets call it P1
3) nextStep is put into the run function with nextStep
4) we create a new promise and return it to the outer world. Let's call it Main Promise
5) in the outer world we run Main Promise using .catch(). Main Promise begins executing
6) we execute function inside the promise - as nextStep.done (means P1) is not true we execute it
using.then() method. We get result from the P1 promise - it's undefined
7) We continue to execute generator. Call it with next(). yeild2 returns new Promise(res => res(1)) let's call it P2
8)P2 is put into run function and executed using then()
9) run creates a new promice which in this case NOT RETURN TO ANYWHERE. We need it only to execute using then
10) So we execute it using then() P2.done is false so we run the P2 using then(). res of P2 returns to the then
and now we see that res = 1.
11) We run the generator again using next(). In next we provide result of P2 means 1 so in generator 1 is assign
to result variable and now result in generator = 1.
12) we come to the yield3 and it returns new Promise(res => setTimeout(res, 100)); let's call it P3
13) We pass it to the run function and run it using then()
14) As p3 done is false we create a new Promice and run it using previously called then()
15) We call P3.then() and get res which is undefined
16) We provide this result to the next() generator function
17) this result is not assigned to anything
18) We come to the yeild4 which returns new Promise(res => res(1)); we will call it P4
19) We run p4 in run using then, but p4.done is true so we call reject with word "Cancelled"
20) Reject through the promises goes up to the Main Promise and catch it saying "Top catch says = Cancelled"
So we see, cancel not influence generator execution in any way. We want calling cancel in our run function
will generate an error which will be caught in th generator itself thus ending in return of result which is 1

so FIND A WAY TO GENERATE ERROR IN THE GENERATOR FROM THE OUTSIDE of THE GENERATOR
I think it should be a .throw() method

So when cancel function is fired it should insert a throw in the suspended generator
Ok. by throwing the error we managed to stop generator execution and 
activate catch branch

But how to return this value back to promise? In our promice we continue to execute P4 and return Cancel instead of result from generator


A return statement in a generator, when executed, will make the generator finish (i.e. the done property of the object returned by it will be set to true). 
If a value is returned, it will be set as the value property of the object returned by the generator.


*/

/*
function* tasks() {
    const val = yield new Promise((resolve) => resolve(2 + 2));
    //console.log("we got value = " + val);
    yield new Promise((resolve) => setTimeout(() => resolve("ekeke"), 100));
    return val + 1;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // logs "Cancelled" at t=50ms
*/
/*
function* tasks() {
    return 42;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 100);
promise.catch(console.log); // logs "Cancelled" at t=50ms
*/
/*
function* tasks() {
    const msg = yield new Promise((res) => res("Hello"));
    throw `Error: ${msg}`;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, null);
promise.catch(console.log); // logs "Cancelled" at t=50ms
*/

function* tasks() {
    let result = 0;
    try {
        yield new Promise((res) => setTimeout(res, 100));
        result += yield new Promise((res) => res(1));
        console.log("this code is executing 1");
        yield new Promise((res) => setTimeout(res, 100));
        console.log("this code is executing 2");
        result += yield new Promise((res) => res(1));
    } catch (e) {
        console.log("keke error = " + e);
        console.log("result in generator = " + result);
        return result;
    }
    return result;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 150);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs "Cancelled" at t=50ms
