/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.


Example 1:

Input: n = 10, pick = 6
Output: 6

Example 2:

Input: n = 1, pick = 1
Output: 1

Example 3:

Input: n = 2, pick = 1
Output: 1

Constraints:

    1 <= n <= 231 - 1
    1 <= pick <= n

*/

var guessNumber = function (n) {
    let l = 1;
    let r = Math.pow(2, 31) - 1;
    let middle = 0;

    while (true) {
        middle = Math.floor((l + r) / 2);
        const res = guess(middle);
        if (res === 0) {
            return middle;
        } else if (res > 0) {
            //our middle is lower then result, so check in the right part
            l = middle + 1;
        } else if (res < 0) {
            //our middle is higher then the result, so check in the left part
            r = middle - 1;
        }
    }
};

console.log(guessNumber(10));
