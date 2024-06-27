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
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] < stack[stack.length - 1] && nums.length - i - 1 >= k - stack.length) {
            stack.pop();
            console.log("pop");
            console.log(stack);
            console.log("-------");
        }
        if (stack.length < k) {
            stack.push(nums[i]);
            console.log("push");
        }
        console.log(stack);
        console.log("-------");
    }
    return stack;
};

//console.log(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4));
console.log(mostCompetitive([71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2], 3));
