/*
Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] 
is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of 
candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is 
the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. 
It is guaranteed that at least one answer exists.

Example 1:

Input: aliceSizes = [1,1], bobSizes = [2,2]
Output: [1,2]

Example 2:

Input: aliceSizes = [1,2], bobSizes = [2,3]
Output: [1,2]

Example 3:

Input: aliceSizes = [2], bobSizes = [1,3]
Output: [2,3]

Constraints:
    1 <= aliceSizes.length, bobSizes.length <= 104
    1 <= aliceSizes[i], bobSizes[j] <= 105
    Alice and Bob have a different total number of candies.
    There will be at least one valid answer for the given input.
*/

const calculateInit = (size) => {
    const obj = {};
    let total = 0;
    for (let i = 0; i < size.length; i++) {
        const box = size[i];
        if (obj[box] === undefined) {
            obj[box] = true;
        }
        total = total + box;
    }
    return {
        obj,
        total,
    };
};

var fairCandySwap = function (aliceSizes, bobSizes) {
    const alice = calculateInit(aliceSizes);
    const aliceSet = alice.obj;
    const aliceTotal = alice.total;

    const bob = calculateInit(bobSizes);
    const bobSet = bob.obj;
    const bobTotal = bob.total;

    const even = (aliceTotal + bobTotal) / 2;
    if (aliceTotal < bobTotal) {
        //if bob has more
        for (let i = 0; i < aliceSizes.length; i++) {
            const aliceGives = aliceSizes[i];
            let bobGives = bobTotal - even + aliceGives;
            if (bobSet[bobGives]) {
                return [aliceGives, bobGives];
            }
        }
    } else {
        //if alice has more
        for (let i = 0; i < bobSizes.length; i++) {
            const bobGives = bobSizes[i];
            let aliceGives = aliceTotal - even + bobGives;
            if (aliceSet[aliceGives]) {
                return [aliceGives, bobGives];
            }
        }
    }
};

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));
