var cancellable = function (generator) {
    function cancel() {}

    function run(nextStep) {
        //run should return a Main Promise
        return new Promise((resolve, reject) => {
            if (!nextStep) {
                //if it is the first next
                //we return a promise
                const prom = generator.next();
                //now we should run this promise and check what happens
                prom.then((res) => {}).catch((err) => {});
            }
        });
    }

    const promise = run();

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
