/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. 
If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

Constraints:

    1 <= nums1.length <= nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 104
    All integers in nums1 and nums2 are unique.
    All the integers of nums1 also appear in nums2.

 
Follow up: Could you find an O(nums1.length + nums2.length) solution?
*/

/*
var nextGreaterElement = function (nums1, nums2) {
    const res = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);
        const greater = nums2.find((item, i) => {
            if (i > index && item > nums2[index]) {
                return true;
            }
            return false;
        });
        res.push(greater ? greater : -1);
    }
    return res;
};
*/

var nextGreaterElement = function (nums1, nums2) {
    const map = new Map(); // map for next greater element
    const stack = [];
    for (let num of nums2) {
        // console.log("---------------");
        // console.log("num = " + num);
        while (stack.length && stack[stack.length - 1] < num) {
            // Pop elements from stack and update map with next greater element
            // console.log("stack = " + stack);
            const someStackPop = stack.pop();
            // console.log("someStackPop = " + someStackPop);
            map.set(someStackPop, num);
        }
        // console.log("num after = " + num);
        stack.push(num); // Push current element onto stack
        // console.log("stack after = " + stack);
    }
    // console.log(map);
    for (let i = 0; i < nums1.length; i++) {
        // Check if each element in nums1 has a next greater element in map
        nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1; // Update element in nums1 with next greater element or -1
    }
    return nums1;
};

// //console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// //console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// console.log(nextGreaterElement([2, 4], [7, 1, 2, 5, 9, 4]));

// //console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
