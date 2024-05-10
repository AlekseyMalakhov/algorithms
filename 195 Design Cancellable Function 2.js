var cancellable = function (generator) {
    let cancelResult;
    let cancelResultError;
    function cancel() {
        //If the cancel callback is called before the generator is done, your function should throw an error back to the generator
        let res;
        try {
            res = generator.throw("Cancelled");
            cancelResult = res.value;
            console.log("cancel result threw and was caught in generator = " + cancelResult);
        } catch (error) {
            // const res = generator.return("Cancelled");
            console.log("error = " + error);
            cancelResultError = error;
            console.log("cancel result threw and was MOT caught in generator = " + cancelResultError);
        }
    }

    function getPromise() {
        //run should return a Main Promise
        return new Promise((resolve, reject) => {
            const run = (valToNext) => {
                if (cancelResultError !== undefined) {
                    //console.log("hehe");
                    reject(cancelResultError);
                    return;
                }
                try {
                    //run next with the previous value
                    const nextStep = generator.next(valToNext);
                    //we get nextStep {"value":{},"done":false}
                    //value contains a promise which we should run
                    if (!nextStep.done) {
                        console.log(nextStep);
                        console.log("we are here 8");
                        //if generator is not done, yield the next value
                        nextStep.value
                            .then((res) => {
                                //put result into the next next()
                                console.log("we are here 4");
                                run(res);
                            })
                            .catch((err) => {
                                //If the promise rejects, function should throw that error back to the generator
                                console.log("we are here 1");
                                const res = generator.throw(err);
                                res.value
                                    .then((res) => {
                                        //put result into the next next()
                                        console.log("we are here 6");
                                        run(res);
                                    })
                                    .catch((err) => {
                                        console.log("we are here 7");
                                        generator.throw(err);
                                    });
                                //console.log(res.value);
                                //and try to start again
                            });
                    } else {
                        // if gen is done - return the value gen returned
                        if (cancelResult === undefined) {
                            console.log("we are here 10");
                            resolve(nextStep.value);
                        } else {
                            console.log("we are here 11");
                            resolve(cancelResult);
                        }
                    }
                } catch (error) {
                    //If the generator throws an error, the returned promise should reject with the error.
                    //console.log(error);
                    console.log("we are here 2");
                    reject(error);
                }
            };
            run();
        });
    }

    const promise = getPromise();

    return [cancel, promise];
};

/*
function* tasks() {
    const val = yield new Promise((resolve) => resolve(2 + 2));
    yield new Promise((resolve) => setTimeout(() => resolve("ekeke"), 100));
    return val + 1;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs "Cancelled" at t=50ms
*/

/*
function* tasks() {
    return 42;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 100);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs "42"
*/

/*
function* tasks() {
    const msg = yield new Promise((res) => res("Hello"));
    throw `Error: ${msg}`;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, null);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs ""Error: Hello""
*/

/*
function* tasks() {
    let result = 0;
    yield new Promise((res) => setTimeout(res, 100));
    result += yield new Promise((res) => res(1));
    yield new Promise((res) => setTimeout(res, 100));
    result += yield new Promise((res) => res(1));
    return result;
}
const [cancel, promise] = cancellable(tasks());
//setTimeout(cancel, null);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs ""Error: Hello""
*/

/*
function* tasks() {
    let result = 0;
    try {
        yield new Promise((res) => setTimeout(res, 100));
        result += yield new Promise((res) => res(1));
        yield new Promise((res) => setTimeout(res, 100));
        result += yield new Promise((res) => res(1));
    } catch (e) {
        return result;
    }
    return result;
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 150);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs ""Error: Hello""
*/

/*
function* tasks() {
    try {
        yield new Promise((resolve, reject) => reject("Promise Rejected"));
    } catch (e) {
        let a = yield new Promise((resolve) => resolve(2));
        console.log("a = " + a);
        let b = yield new Promise((resolve) => resolve(2));
        console.log("a = " + a);
        console.log("b = " + b);
        return a + b;
    }
}
const [cancel, promise] = cancellable(tasks());
//setTimeout(cancel, 150);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs "Cancelled" at t=50ms
*/

function* tasks() {
    console.log("we start the promise");
    yield new Promise((res) => {
        setTimeout(res, 200);
    });
    return "Success";
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 100);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs "Cancelled" at t=50ms
