/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 

Example 1:
Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
    1 <= s.length <= 105
    s consists of only lowercase English letters.
*/

var firstUniqChar = function (s) {
    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    console.log(obj);

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (obj[letter] === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));

console.log(firstUniqChar("loveleetcode"));

console.log(firstUniqChar("aabb"));
