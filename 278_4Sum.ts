const fourSum = (nums: number[], target: number) => {
    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let k = i + 1; k < nums.length - 2; k++) {
            let left = k + 1;
            let right = nums.length - 1;

            if (k > i + 1 && nums[k] === nums[k - 1]) {
                continue;
            }

            while (left < right) {
                const sum = nums[i] + nums[k] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[k], nums[left], nums[right]]);

                    // now, we should check the rest of this ki combination for duplicates
                    // if we move now the the left or right and it will be the same, it means
                    // we will got the same result. So we should move pointers until we find
                    // the distinct result

                    while (nums[left] === nums[left + 1] && left < right) {
                        left++;
                    }
                    while (nums[right] === nums[right + 1] && left < right) {
                        right--;
                    }

                    // only when we came to the last of the same values we ready to move pointers forward to distinct values
                    left++;
                    right--;
                } else {
                    // if sum is not a target we can check where it is better to move it - right ot left
                    // when we move pointers to the left we reduce the sum of pointers
                    // when we move pointers to the right we increase the sum of pointers
                    // total sum will be pointerSum + fixedSum
                    // so if we know target we can calculate how much we need to add or remove
                    // pointerSum + fixedSum = target
                    // 10 + 2 = 12
                    // pointerSum = target - fixedSum
                    // 10 = 12 - 2
                    const pointersSum = nums[left] + nums[right];
                    const diff = target - (nums[i] + nums[k]);

                    if (pointersSum < diff) {
                        // we should make pointerSum bigger
                        // move right
                        left++;
                    } else {
                        // we should make pointerSum smaller
                        right--;
                    }
                }
            }
        }
    }

    return result;
};

console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));

// [-2, -1, -1, 1, 1,  2,  2 ]

//[[-2,-1,1,2],[-1,-1,1,1]]
