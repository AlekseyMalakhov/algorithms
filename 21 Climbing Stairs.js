/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

    1 <= n <= 45


   */

//to any n step you can come only from the previous step or from the step
//previous to the previous. So the total number of ways to come to the
//n step will be = ways to come to n-1 step + ways to come to n-2 step
//

var climbStairs = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let currentWays = 0;
  let previousWays = 0;
  let prePreviousWays = 0;

  for (let i = 1; i <= n; i++) {
    if (i === 3) {
      prePreviousWays = 1;
      previousWays = 2;
    }
    currentWays = previousWays + prePreviousWays;
    prePreviousWays = previousWays;
    previousWays = currentWays;
  }

  return currentWays;
};
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
