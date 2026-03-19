function threeSumClosest(nums: number[], target: number): number {
    let closestSum = 0;
    let currentDifference = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(target - sum);

            if (diff === 0) {
                return sum;
            }

            if (diff < currentDifference) {
                closestSum = sum;
                currentDifference = diff;
            }

            // now let's decide which side to move to
            // ideally p1 + p2 = target - num[i]
            //we should calculate target - num[i] and compare pointers sum with it

            const targetDiff = target - nums[i];
            const pointerSum = nums[left] + nums[right];

            if (pointerSum < targetDiff) {
                // move right
                left++;
            } else {
                // move left
                right--;
            }
        }
    }

    return closestSum;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));

// [ -4, -1, 1, 2 ]
