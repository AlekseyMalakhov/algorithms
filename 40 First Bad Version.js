/*
You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. 
Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

Constraints:
    1 <= bad <= n <= 231 - 1

*/

const arr = [
    {
        v: 1,
        bad: false,
    },
    {
        v: 2,
        bad: false,
    },
    {
        v: 3,
        bad: false,
    },
    {
        v: 4,
        bad: true,
    },
    {
        v: 5,
        bad: true,
    },
];

const isBad = (n) => {
    console.log("Api call " + n);
    if (n >= 4) {
        return true;
    }
    return false;
};

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0;
        let right = n;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                //it means all the right are bad now so check the left side
                right = mid - 1;
            } else {
                //it means all the left are good now so check the right side
                left = mid + 1;
            }
        }

        return left;
    };
};

const check = solution(isBad);

//console.log(check(1));
//console.log(check(2));
// console.log("---------------------------------");
//console.log(check(3));
//console.log("---------------------------------");
//console.log(check(4));
// console.log("---------------------------------");
console.log(check(5));
// console.log("---------------------------------");
//console.log(check(6));
