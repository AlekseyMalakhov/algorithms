const threeSum = (arr: number[]): number[][] => {
    const result: number[][] = [];

    // .sort() operation sorts an array in place
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        let p1 = i + 1;
        let p2 = arr.length - 1;

        // we have a sorted array, it means  we can encounter several the same numbers in a row
        // like this [-4, -1, -1, -1, 0, 1, 2, 10];
        // Then if fixed number will be -1 and it will make a sum = 0 in some way
        // then on every next for loop we will get the same array result until
        // this repeated -1s are finished. So to remove this, before starting a new for loop
        // we should check if we have a result with this i
        //If we have the result with the same i then now we will again get the same result
        // so we should skip this iteration and move further
        // you cant encounter the same value again because the array is sorted.
        // so this array [-4, -1, -1, 0, 1, -1, 2, 10] is impossible to have
        if (i > 0 && arr[i] === arr[i - 1]) {
            // we have already parsed this fixed value - let's move forward
            // otherwise we will get the same result
            continue;
        }

        while (p1 < p2) {
            const sum = arr[i] + arr[p1] + arr[p2];
            if (sum === 0) {
                result.push([arr[i], arr[p1], arr[p2]]);
                // we found a sum - good
                // let's continue to explore the same fixed item. May be further we will find more resulted combinations
                // but be careful not to add the same combination we have added previously
                // to avoid this we should move our pointers to a clearly new positions
                // which is distinct from the previous
                while (p1 < p2 && arr[p1] === arr[p1 + 1]) {
                    // we move along the same values
                    p1++;
                }
                while (p1 < p2 && arr[p2] === arr[p2 - 1]) {
                    // we move along the same values
                    p2--;
                }
                // finally when we found distinctive values we move to them
                p1++;
                p2--;
            } else {
                // if there is no sum, let's check how we can adjust our pointers
                // if we move pointers to the right, we increase the sum
                // if we move pointers to the left, we reduce the sum
                // to get 0 our sum of p1 + p2 should be equal to fixed item * -1
                // it means if for example sumP1P2 is -6 and fixed item is 3
                // it means we should move pointers to the right to make -6 to become -3
                // let's write some examples to get a better grasp
                // Fixed ------ sumP1P2
                //   10  ------   2      - move pointers left to make them -10      sumP1P2 > reversed  - move left
                //   10  ------  -2      - move pointers left to make them  -10     sumP1P2 > reversed  - move left
                //   10  ------  -25     - move pointers right to make them -10     sumP1P2 < reversed  - move right
                //   -12  ------ -2      - move pointers right to make them 12      sumP1P2 < reversed  - move right
                //   -12  ------  8      - move pointers right to make them 12      sumP1P2 < reversed  - move right
                //   -12  ------  35     - move pointers left to make them 12       sumP1P2 > reversed  - move left
                // so now we can make some equation how to calculate where the pointers
                // as we see, in our sumP1P2 we are trying to get a reversed number for Fixed value
                // in with it we should compare our sumP1P2
                const sumP1P2 = arr[p1] + arr[p2];
                const reversedFixed = arr[i] * -1;

                if (sumP1P2 < reversedFixed) {
                    // we move pointers right to make them bigger
                    p1++;
                } else {
                    // we move pointers left to make them smaller
                    p2--;
                }
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, 10]));

// [-4, -1, -1, 0, 1, 2, 10]

console.log(threeSum([0, 0, 0, 0, 0, 0, 0, 0]));
