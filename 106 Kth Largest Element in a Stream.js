/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

    KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
    int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 
Example 1:

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8


Constraints:

    1 <= k <= 104
    0 <= nums.length <= 104
    -104 <= nums[i] <= 104
    -104 <= val <= 104
    At most 104 calls will be made to add.
    It is guaranteed that there will be at least k elements in the array when you search for the kth element.
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums;
    this.nums.sort((a, b) => a - b);
    const l = this.nums.length;
    this.nums2 = [];
    for (let i = 0; i < k; i++) {
        if (nums[l - i - 1] !== undefined) {
            this.nums2.unshift(nums[l - i - 1]);
        }
    }
    this.kMax = this.nums2[0];
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.kMax === undefined) {
        this.nums2.push(val);
        this.kMax = val;
        return val;
    }
    if (this.nums2.length < this.k) {
        this.nums2.push(val);
        this.nums2.sort((a, b) => a - b);
        this.kMax = this.nums2[0];
        return this.kMax;
    }
    if (val > this.kMax && this.nums2.length === this.k) {
        this.nums2.push(val);
        this.nums2.sort((a, b) => a - b);
        this.nums2.shift();
        this.kMax = this.nums2[0];
        return this.kMax;
    }

    return this.kMax;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/*
var obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj);

var param_1 = obj.add(3);
console.log(param_1);
var param_1 = obj.add(5);
console.log(param_1);
var param_1 = obj.add(10);
console.log(param_1);
var param_1 = obj.add(9);
console.log(param_1);
var param_1 = obj.add(4);
console.log(param_1);
*/

/*
var obj = new KthLargest(1, []);
var param_1 = obj.add(-3);
console.log(obj);
console.log(param_1);
var param_1 = obj.add(-2);
console.log(obj);
console.log(param_1);
var param_1 = obj.add(-4);
console.log(obj);
console.log(param_1);
var param_1 = obj.add(0);
console.log(obj);
console.log(param_1);
var param_1 = obj.add(4);
console.log(obj);
console.log(param_1);
*/
/*
var obj = new KthLargest(2, [0]);
var param_1 = obj.add(-1);
console.log(obj);
console.log(param_1);
var param_1 = obj.add(-2);
console.log(obj);
console.log(param_1);
// var param_1 = obj.add(-4);
//console.log(obj);
// console.log(param_1);
// var param_1 = obj.add(0);
//console.log(obj);
// console.log(param_1);
// var param_1 = obj.add(4);
//console.log(obj);
// console.log(param_1);
*/

var obj = new KthLargest(2, [0]);
console.log("add ---------------   -1");
var param_1 = obj.add(-1);
console.log(obj);
console.log(param_1);
console.log("add ---------------    1");
var param_1 = obj.add(1);
console.log(obj);
console.log(param_1);
// var param_1 = obj.add(-2);
//console.log(obj);
// console.log(param_1);
// var param_1 = obj.add(-4);
//console.log(obj);
// console.log(param_1);
// var param_1 = obj.add(3);
//console.log(obj);
// console.log(param_1);
