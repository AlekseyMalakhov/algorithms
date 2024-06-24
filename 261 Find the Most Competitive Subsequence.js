/*
Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.
An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.
We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, 
subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more competitive than [1,3,5]
 because the first position they differ is at the final number, and 4 is less than 5. 

Example 1:
Input: nums = [3,5,2,6], k = 2
Output: [2,6]
Explanation: Among the set of every possible subsequence: {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]}, [2,6] is the most competitive.

Example 2:
Input: nums = [2,4,3,3,5,4,9,6], k = 4
Output: [2,3,3,4] 

Constraints:
    1 <= nums.length <= 105
    0 <= nums[i] <= 109
    1 <= k <= nums.length
*/

/*
var mostCompetitive = function (nums, k) {
    const stack = [];

    let min = Infinity;
    let minPos = 0;

    for (let i = 0; i < nums.length - k + 1; i++) {
        const n = nums[i];
        if (n < min) {
            min = n;
            minPos = i;
        }
    }
    // console.log("min:", min);
    // console.log("minPos:", minPos);
    // console.log("nums.length = " + nums.length);
    if (nums.length - minPos === k) {
        // console.log("lala");
        return nums.slice(minPos);
    }

    stack.push(min);

    let i = minPos + 1;
    let n = nums[i];
    let amount = stack.length + nums.length - i;
    let prev = stack[stack.length - 1];

    while (i < nums.length) {
        n = nums[i];
        // console.log("n = " + n);
        // console.log("stack.length = " + stack.length);
        // console.log("rest: " + (nums.length - i));
        amount = stack.length + nums.length - i;
        prev = stack[stack.length - 1];
        // console.log("amount = " + amount);
        while (amount > k) {
            // console.log("prev:", prev);
            if (prev > n) {
                // console.log("consider " + n);
                stack.pop();
                stack.push(n);
                //stack.push(bigger);
            }
            i++;
            n = nums[i];
            // console.log("new n = " + n);
            amount = stack.length + nums.length - i;
            // console.log("new amount = " + amount);
        }

        // if (amount > k && prev > n) {
        // console.log("consider " + n);
        //     stack.pop();
        //     stack.push(n);
        //     //stack.push(bigger);
        // } else {
        //     stack.push(n);
        // }

        stack.push(n);
        i++;

        // console.log("stack:", stack);
        // console.log("----------------------");
    }

    return stack.slice(0, k);
};
*/

/*
var mostCompetitive = function (nums, k) {
    //first of all we should find the next closest min value position for every current position
    //until the nums.length - k position
    //because starting from the border
    //we should start selecting value not later than the border position.
    //because if we start later, even if ve take all the values left we still won't be able
    //to get k length res array
    //so. It means - starting point, should be not later then border position
    //So to find starting point, we should check the items from 0 to the border position
    //and find the minimum - this will be the starting point
    //After we selected starting point, we should find the next border. Next border will be
    //nums.length - k - 1
    //So from starting point till border we should find the next minimum. We can't cross the
    //border. Because after border we should just select all items just to be able to fill
    //res array with k elements
    //after we found the next minimum we calculate the next border
    //border = nums.length - k - 2
    //and betweeen current minimum and the new border we will search for the next minimum

    const border = nums.length - k;
    let min = Infinity;
    let minPos = 0;
    const mins = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        const n = nums[i];
        if (i === nums.length - 1) {
            //init
            min = n;
            minPos = i;
            mins[i] = minPos;
        } else {
            if (n <= min) {
                //found new min - update min value and position
                min = n;
                minPos = i;
            }
            mins[i] = minPos;
        }
    }
    //now we have closest mins for every item
    // console.log("mins:", mins);
    // console.log("min:", min);
    // console.log("minPos:", minPos);
    // console.log("nums.length:", nums.length);

    // if (minPos > nums.length - k) {
    // console.log("lala");
    //     return nums.slice(nums.length - k);
    // }

    //now let's go along the array and put the closest min values in it

    const res = [];

    let startPos = minPos;
    if (minPos > nums.length - k) {
        startPos = nums.length - k;
    }

    // console.log("start");
    // console.log("startPos:", startPos);
    for (let i = startPos; i < nums.length; i++) {
        // console.log("i:", i);
        const n = nums[i];
        // console.log("consider n:", n);
        const currentMinPos = mins[i];
        // console.log("currentMinPos:", currentMinPos);
        // console.log("nums.length - k:", nums.length - k);

        const isLeftToAdd = k - res.length;
        // console.log("isLeftToAdd:", isLeftToAdd);
        const isLeftInTheArray = nums.length - i;
        // console.log("isLeftInTheArray:", isLeftInTheArray);

        //if minPos for current value is closer then intended length of the final array we will use it for the current value
        if (isLeftToAdd < isLeftInTheArray) {
            // console.log("normal situation - there is more elements in the array than it is left to add");
            if (i > nums.length - k) {
                // console.log("no it's to close - just add 1");
                //just push current value
                res.push(n);
            } else {
                if (i === currentMinPos) {
                    //init - put minimum value or put themselves
                    // console.log("put itself");
                    res.push(n);
                } else {
                    // console.log("normal we can add min pos");
                    res.push(nums[currentMinPos]);
                    //and jump to the minimum position
                    i = currentMinPos;
                }
            }
        } else {
            // console.log("there is not enough elements in the array left - just add what is left");
            //just push current value
            res.push(n);
        }

        if (res.length === k) {
            return res;
        }
        // console.log("res:", res);
        // console.log("-----------------------------------");
    }
};
*/
var mostCompetitive = function (nums, k) {
    //first of all we should find the next closest min value position for every current position
    //until the nums.length - k position

    //we should start selecting value not later than the border position.
    //because if we start later, even if ve take all the values left we still won't be able
    //to get k length res array
    //so. It means - starting point, should be not later then border position
    //So to find starting point, we should check the items from 0 to the border position
    //and find the minimum - this will be the starting point

    //After we selected starting point, we should find the next border. Next border will be
    //nums.length - k + 1
    //So from starting point till border we should find the next minimum. We can't cross the
    //border. Because after border we should just select all items just to be able to fill
    //res array with k elements
    //after we found the next minimum we calculate the next border
    //border = nums.length - k + 2
    //and betweeen current minimum and the new border we will search for the next minimum

    //let start = 0;
    let border = nums.length - k; //starting from this position (inclusive) we should select all elements just to fill resulting array
    // console.log("border:", border);
    // console.log("border value:", nums[border]);
    const res = [];

    //let's create a stack of minimum values for the initial section
    //values should be sorted in stack from the maximum to the
    //minimum

    const arr = [];
    for (let i = 0; i <= border; i++) {
        const obj = {
            value: nums[i],
            index: i,
        };
        arr.push(obj);
    }

    // //console.log("arr:", arr);

    const minStack = arr.toSorted((a, b) => a.value - b.value).reverse();

    console.log("minStack:", minStack);

    let min = minStack.pop();
    console.log(min);
    //console.log("minStack:", minStack);

    //now when we found minimum for the initial section
    //we can increment our border by one and check the next included value
    //if it is less then min - update minimum

    let minPos = min.index;

    while (res.length !== k) {
        // console.log("minStack:", minStack);

        if (minPos === border) {
            // console.log("here1");
            //it means the minimum position is border - it means we should include it and all the rest items to fill the res array
            return res.concat(nums.slice(border));
        } else {
            // console.log("here2");
            //add min value to res array
            // console.log("min:", min);
            res.push(min.value);
            //move border by 1 step
            border++;
            //create new object with new border value
            const obj = {
                value: nums[border],
                index: border,
            };
            //somehow we should add it on minStack in a proper position
            //sorting stack after every add operation is very time consuming
            //lets try using monolithic stack - use while loop
            let last = minStack[minStack.length - 1];
            let temp = [];
            // console.log("last:", last);
            // console.log("obj:", obj);
            //let fdsgdf = 0;
            while (minStack.length > 0 && last.value < obj.value) {
                // console.log("---------1 small while-----------");
                let lastObj = minStack.pop();
                // console.log("lastObj:", lastObj);
                // console.log("minStack:", minStack);
                temp.push(lastObj);
                last = minStack[minStack.length - 1];
                //debug
                // fdsgdf++;
                // if (fdsgdf > 20) {
                //     return;
                // }
            }
            //when finally last obj is bigger then new obj, we can put it here and put all the temp elements on the top
            //additionnaly we should put only those elements whose index is more then current minPos
            minStack.push(obj);
            // console.log("here5");
            while (temp.length > 0) {
                // console.log("---------2 small while-----------");
                const tempObj = temp.pop();
                //if position of temp is more then the current min we will push it. may be later we will need it. But if index less - don't add it.
                //We will never return back
                if (tempObj.index > minPos) {
                    minStack.push(tempObj);
                }
            }

            //get new min
            min = minStack.pop();
            // console.log("new min:", min);
            minPos = min.index;
        }
        // console.log(res);
        // console.log("------------main while--------------------");
    }

    return res;
};

// //console.log(mostCompetitive([3, 5, 2, 6], 2));
// //console.log(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4));
// // console.log(mostCompetitive([71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2], 3));
// //console.log(mostCompetitive([84, 10, 71, 23, 66, 61, 62, 64, 34, 41, 80, 25, 91, 43, 4, 75, 65, 13, 37, 41, 46, 90, 55, 8, 85, 61, 95, 71], 24));
//[10,23,61,62,34,41,80,25,91,43,4,75,65,13,37,41,46,90,55,8,85,61,95,71]...

// // console.log(
// //     mostCompetitive(
// //         [
// //             11, 52, 57, 91, 47, 95, 86, 46, 87, 47, 70, 56, 54, 61, 89, 44, 3, 73, 1, 7, 87, 48, 17, 25, 49, 54, 6, 72, 97, 62, 16, 11, 47, 34, 68,
// //             58, 14, 36, 46, 65, 2, 15,
// //         ],
// //         18
// //     )
// // );

const task = [
    2, 10, 3, 5, 9, 4, 2, 0, 6, 7, 8, 0, 6, 5, 8, 1, 6, 1, 5, 5, 2, 10, 9, 5, 7, 7, 3, 2, 1, 4, 0, 7, 0, 3, 10, 10, 5, 10, 4, 7, 0, 2, 10, 9, 0, 2, 6,
    10, 6, 9, 2, 1, 9, 8, 7, 2, 0, 7, 3, 6, 2, 1, 8, 0, 0, 0, 10, 4, 3, 5, 0, 8, 1, 8, 5, 1, 6, 0, 4, 4, 10, 2, 0, 5, 1, 1, 3, 3, 5, 2, 6, 5, 6, 0, 3,
    8, 0, 1, 7, 0, 0, 9, 6, 10, 5, 9, 8, 9, 8, 7, 8, 10, 6, 3, 8, 0, 5, 7, 4, 3, 5, 7, 7, 0, 3, 10, 1, 3, 10, 2, 10, 3, 2, 6, 3, 10, 8, 10, 6, 0, 7,
    6, 2, 10, 4, 0, 7, 4, 8, 8, 1, 7, 1, 4, 9, 7, 7, 8, 9, 8, 7, 2, 4, 9, 8, 8, 0, 8, 2, 10, 7, 3, 10, 8, 5, 1, 1, 3, 0, 5, 1, 7, 1, 7, 9, 2, 6, 9, 6,
    10, 6, 1, 7, 8, 3, 6, 9, 3, 5, 9, 0, 9, 3, 5, 8, 4, 6, 8, 10, 8, 0, 9, 3, 7, 10, 4, 4, 2, 3, 7, 2, 10, 3, 5, 4, 9, 9, 2, 1, 2, 10, 4, 4, 4, 3, 5,
    9, 7, 2, 0, 3, 6, 6, 7, 3, 9, 4, 6, 9, 7, 1, 3, 2, 3, 6, 6, 1, 7, 10, 0, 4, 10, 3, 5, 0, 10, 3, 10, 3, 0, 0, 1, 6, 6, 5, 9, 10, 5, 5, 9, 0, 5, 4,
    1, 10, 2, 3, 1, 7, 9, 10, 10, 4, 3, 5, 9, 5, 4, 4, 8, 0, 1, 8, 1, 4, 6, 5, 6, 0, 6, 8, 6, 5, 6, 5, 7, 9, 5, 8, 8, 4, 2, 0, 0, 2, 9, 4, 9, 2, 6, 5,
    2, 2, 8, 5, 4, 10, 8, 7, 7, 3, 4, 2, 0, 4, 3, 8, 6, 1, 7, 10, 10, 7, 4, 0, 6, 6, 0, 5, 6, 10, 3, 8, 3, 2, 4, 10, 4, 3, 0, 4, 10, 7, 6, 0, 4, 7, 0,
    5, 2, 5, 2, 10, 9, 1, 10, 9, 6, 6, 5, 9, 10, 1, 3, 5, 2, 0, 6, 8, 5, 6, 3, 4, 8, 4, 0, 7, 0, 7, 9, 9, 1, 4, 6, 4, 5, 7, 3, 0, 4, 4, 9, 10, 5, 10,
    3, 9, 6, 6, 2, 9, 4, 0, 4, 3, 3, 1, 7, 2, 1, 0, 2, 6, 7, 1, 1, 0, 3, 9, 8, 9, 4, 6, 3, 10, 7, 3, 1, 5, 2, 0, 3, 9, 5, 3, 3, 3, 1, 7, 5, 8, 10, 10,
    8, 0, 2, 3, 3, 2, 9, 3, 1, 3, 9, 0, 1, 8, 2, 1, 6, 0, 6, 3, 1, 3, 1, 10, 5, 6, 0, 4, 7, 10,
];

console.log(task.length);
console.log(mostCompetitive(task, 79));

const check = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
console.log("nulls length = " + check.length);
//[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,3,3,2,9,3,1,3,9,0,1,8,2,1,6,0,6,3,1,3,1,10,5,6,0,4,7,10]...
