/*
You are given an integer array prices where prices[i] is the price of the ith item in a shop.

There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent 
to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.
Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.


Example 1:

Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation: 
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.

Example 2:

Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.

Example 3:

Input: prices = [10,1,1,6]
Output: [9,0,1,6]

Constraints:
    1 <= prices.length <= 500
    1 <= prices[i] <= 1000
*/

var finalPrices = function (prices) {
    const res = [];
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        // console.log("price:", price);
        let j = i + 1;
        let priceNext = prices[j];
        while (j < prices.length && priceNext !== undefined && priceNext > price) {
            j++;
            priceNext = prices[j];
        }
        if (priceNext <= price) {
            // console.log("discount for price = " + price + " found!");
            const result = price - priceNext;
            res.push(result);
        } else {
            res.push(price);
        }
        // console.log("res:", res);
        // console.log("-----------------------------");
    }

    return res;
};

// //console.log(finalPrices([8, 4, 6, 2, 3]));
// //console.log(finalPrices([1, 2, 3, 4, 5]));
// console.log(finalPrices([10, 1, 1, 6]));
