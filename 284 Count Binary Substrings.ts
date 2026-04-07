const countBinarySubstrings = (s: string): number => {
    let result = 0;
    let left = 0;
    let n0 = 0;
    let n1 = 0;

    let prevValid = false;

    for (let i = 0; i < s.length; i++) {
        // search for the first valid subarray after moving the right boundary
        const right = s[i];
        if (right === "0") {
            n0++;
        } else {
            n1++;
        }

        // if we found a valid subarray after previously invalid, we continue to move right until array become invalid
        if (n0 === n1 && !prevValid) {
            // valid subarray found
            result++;
            // move right boundary next
        } else if (n0 === n1 && prevValid) {
            // if we found a valid array after previously valid array - move to the right again
            // valid subarray found
            result++;
            // move right boundary next
        } else if (n0 !== n1 && !prevValid) {
            // if we found invalid array after previously invalid
            // move right
        } else if (n0 !== n1 && !prevValid) {
            // if we found invalid array after previously valid
            // move left
            while (n0 !== n1 && left < i) {
                if (right === "0") {
                    n0++;
                } else {
                    n1++;
                }
            }
        }

        // add
    }

    return 0;
};

console.log(countBinarySubstrings("00110011")); // 6
console.log(countBinarySubstrings("10101")); // 4
