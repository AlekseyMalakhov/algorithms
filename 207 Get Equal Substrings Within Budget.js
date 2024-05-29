/*
You are given two strings s and t of the same length and an integer maxCost.
You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| 
(i.e., the absolute difference between the ASCII values of the characters).

Return the maximum length of a substring of s that can be changed to be the same as the corresponding 
substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.
 
Example 1:

Input: s = "abcd", t = "bcdf", maxCost = 3
Output: 3
Explanation: "abc" of s can change to "bcd".
That costs 3, so the maximum length is 3.

Example 2:

Input: s = "abcd", t = "cdef", maxCost = 3
Output: 1
Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.

Example 3:

Input: s = "abcd", t = "acde", maxCost = 0
Output: 1
Explanation: You cannot make any change, so the maximum length is 1.

 
Constraints:
    1 <= s.length <= 105
    t.length == s.length
    0 <= maxCost <= 106
    s and t consist of only lowercase English letters.
*/

var equalSubstring = function (s, t, maxCost) {
    const arrOfCosts = [];
    let curr = 0;

    for (let i = 0; i < s.length; i++) {
        const cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
        curr = curr + cost;

        arrOfCosts.push(curr);
    }

    // console.log("arrOfCosts2:", arrOfCosts2);

    let length = 0;
    let max = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        //check substring. If it's cost <= to maxCost, we check if length is more then our current max
        // If length is more then max - update max.
        //then probably we can add the next letter to the rigth to increse the length
        //we move i and check the cost of the substring. If cost is <= maxCost, we check the length of
        //the substring. If it is more then current max - update max
        //then we probably can add one more letter to the rigth to increase the length of the substring
        //we move i and check the cost of substring
        //If cost is > then maxCost, it means that going right is pointless. We will only get more cost.
        //so let's move our left and check the cost again. If cost is still more then maxCost, we move left
        //again. If cost became less then maxCost, we check the length of substring and update max if needed
        //then we move right in attempt to get a longer substring
        length++;
        let leftArg = 0;
        if (left !== 0) {
            leftArg = arrOfCosts[left - 1];
        }
        let cost = arrOfCosts[i] - leftArg;
        // console.log("cost:", cost);

        if (cost <= maxCost) {
            if (length > max) {
                max = length;
            }
        } else {
            while (left <= i && cost > maxCost) {
                // console.log("code here is executing");
                left++;
                leftArg = arrOfCosts[left - 1];
                cost = arrOfCosts[i] - leftArg;
                length--;
                if (length > max) {
                    max = length;
                }
            }
        }
    }

    return max;
};

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));
console.log(equalSubstring("krrgw", "zjxss", 19)); //2
