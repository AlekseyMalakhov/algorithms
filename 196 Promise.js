//Promise polyfill

function MyPromise(func) {
    let status = "pending";
    this.then = function (funcThen, funcCatch) {
        let result;
        function resolve(res) {
            result = funcThen(res);
            status = "resolved";
        }
        function reject(res) {
            if (funcCatch !== undefined) {
                result = funcCatch(res);
            } else {
                result = res;
                status = "rejected";
            }
        }

        func(resolve, reject);

        return new MyPromise((resolve, reject) => {
            if (status === "resolved") {
                resolve(result);
            }
            if (status === "rejected") {
                reject(result);
            }
        });
    };
    this.catch = function (funcCatch) {};
    this.finally = function (funcFinally) {};
}

const promise = new MyPromise((resolve, reject) => {
    resolve(25);
});

//console.log(promise);

promise
    .then(
        (res) => {
            console.log("resolved " + res);
            return res + 10;
        }
        // (res) => {
        //     console.log("reject " + res);
        //     return "ololo it was rejected";
        // }
    )
    .then((res) => console.log("second then = " + res))
    .catch((res) => console.log("reject lala" + res));

console.log("-----------------");

/*
const normalPromise = new Promise((resolve, reject) => {
    resolve(27);
});
normalPromise
    .then((res) => {
        console.log("resolved normal " + res);
        // (res) => console.log("reject normal " + res)
        return "lala";
    })
    .catch((res) => {
        console.log("reject normal in catch " + res);
        return "lala";
    })
    .finally((res) => console.log("result in finally normal " + res));
    */
