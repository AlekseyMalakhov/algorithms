var cancellable = function (generator) {
    function cancel() {
        //If the cancel callback is called before the generator is done, your function should throw an error back to the generator
        generator.throw("Cancelled");
    }

    function getPromise() {
        //run should return a Main Promise
        return new Promise((resolve, reject) => {
            const run = (valToNext) => {
                try {
                    //run next with the previous value
                    const nextStep = generator.next(valToNext);
                    //we get nextStep {"value":{},"done":false}
                    //value contains a promise which we should run
                    if (!nextStep.done) {
                        //if generator is not done, yield the next value
                        nextStep.value
                            .then((res) => {
                                //put result into the next next()
                                run(res);
                            })
                            .catch((err) => {
                                //If the promise rejects, function should throw that error back to the generator
                                generator.throw(err);
                            });
                    } else {
                        // if gen is done - return the value gen returned
                        resolve(nextStep.value);
                    }
                } catch (error) {
                    //If the generator throws an error, the returned promise should reject with the error.
                    reject(error);
                }
            };
            run();
        });
    }

    const promise = getPromise();

    return [cancel, promise];
};

function* tasks() {
    const val = yield new Promise((resolve) => resolve(2 + 2));
    //console.log("we got value = " + val);
    yield new Promise((resolve) => setTimeout(() => resolve("ekeke"), 100));
    return val + 1;
}
const [cancel, promise] = cancellable(tasks());
//setTimeout(cancel, 150);
promise.then((res) => console.log("Top then says = " + res)).catch((err) => console.log("Top catch says = " + err)); // logs "Cancelled" at t=50ms
