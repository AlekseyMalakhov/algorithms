/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
There are a lot of sorting algorithms. And none of them has O(n) complexity. For example buble sort is O(n^2). And the best ones are )(n*logn)
*/

var sortedSquares = function (nums) {
    if (nums.length === 1) {
        const n = nums[0] ** 2;
        const arr = [];
        arr.push(n);
        return arr;
    }
    const arr = [];

    if (nums[0] <= 0 && nums[nums.length - 1] > 0) {
        //if starts from negative and moves to positive

        let theLastNegativeIndex = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0 && nums[i + 1] >= 0) {
                //then i is the last negative number
                theLastNegativeIndex = i;
            }
        }

        let left = theLastNegativeIndex;
        let right = theLastNegativeIndex + 1;

        while (left >= 0 || right < nums.length) {
            const l = nums[left];
            const r = nums[right];
            // console.log(l);
            // console.log(r);
            // console.log("------------------");

            if (Math.abs(l) > Math.abs(r) || l === undefined) {
                arr.push(r ** 2);
                right++;
            }
            if (Math.abs(l) < Math.abs(r) || r === undefined) {
                arr.push(l ** 2);
                left--;
            }
            if (Math.abs(l) === Math.abs(r)) {
                arr.push(l ** 2);
                arr.push(r ** 2);
                left--;
                right++;
            }
        }
    }

    //if both are negative
    else if (nums[0] < 0 && nums[nums.length - 1] <= 0) {
        for (let i = 0; i < nums.length; i++) {
            arr[nums.length - 1 - i] = nums[i] ** 2;
        }
    }

    //if both are positive
    else if (nums[0] >= 0 && nums[nums.length - 1] > 0) {
        for (let i = 0; i < nums.length; i++) {
            arr[i] = nums[i] ** 2;
        }
    }

    return arr;
};

// console.log(sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000])); //[0,0,25,49,99980001,100000000,100000000]
// console.log(sortedSquares([-5, -3, -2, -1])); //[1,4,9,25]
console.log(sortedSquares([-4, -1, 0, 3, 10])); //[1,4,9,25]
