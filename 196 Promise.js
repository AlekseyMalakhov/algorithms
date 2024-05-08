//Promise polyfill
/*

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

/*
const normalPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(27), 50);
});
console.log(normalPromise);

normalPromise.then((res) => {
    console.log("resolved normal " + res);
});
*/

//state: pending, resolved, rejected

function MyPromise(func) {
    let status = "pending";
    let result;
    function resolve(onResolved, res) {
        //pass result to 1st then function
        result = onResolved(res);
        status = "resolved";
    }
    function reject(onRejected, res) {
        //pass result to 2nd then function
        result = onRejected(res);
        status = "rejected";
    }
    function rejectInNextCatch(res) {
        //pass rejected res to the next promise with catch
        result = res;
        status = "rejected";
    }
    this.then = function (onResolved, onRejected) {
        if (onRejected === undefined) {
            func(
                (res) => resolve(onResolved, res),
                (res) => rejectInNextCatch(res)
            );
        } else {
            func(
                (res) => resolve(onResolved, res),
                (res) => reject(onRejected, res)
            );
        }
        return new MyPromise((resProm, rejProm) => {
            if (status === "resolved") {
                resProm(result);
            }
            if (status === "rejected") {
                rejProm(result);
            }
        });
    };
    this.catch = function (onRejectedInCatch) {
        func(null, (res) => onRejectedInCatch(res));
    };
}

const myProm = new MyPromise((resProm, rejProm) => {
    rejProm(25);
});
//console.log(myProm);
myProm
    .then(
        (res) => {
            console.log("res resolved = " + res);
            return res + 10;
        }
        // (res) => {
        //     console.log("res rejected = " + res);
        //     return res + 10;
        // }
    )
    .catch((res) => {
        console.log("rejected in next catch = " + res);
    });
// .then(
//     (res) => console.log("second res = " + res),
//     (res) => console.log("second rejected = " + res)
// );
