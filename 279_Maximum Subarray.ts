function maxSubArray(nums: number[]): number {
    let [currentSum, largestSum] = [0, nums[0]];
    nums.forEach((n) => {
        currentSum = Math.max(n, currentSum + n);
        largestSum = Math.max(currentSum, largestSum);
    });
    return largestSum;
}
