/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104

*/

var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  //we should have two pointers. They move together nearby until one of them finds minimum value
  //(in comparison with previous values). Then left pointer moves to this value and stays there antil
  //if new minimum value will be found. This minimum value will be a point when we buy stocks.
  //Right pointer will move further to find a best day to sell in comparison with left pointer.
  //Every time you get negative profit it means you found a new lower value - move left pointer
  //to it.

  let left = 0;
  let right = 1;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let profit = prices[right] - prices[left];
    if (profit < 0) {
      profit = 0;
      left = right;
    }
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    right++;
    if (right > prices.length - 1) {
      break;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 9, 5, 12, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 4, 2]));
