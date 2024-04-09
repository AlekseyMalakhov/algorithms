/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
    For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal. 

Constraints:
    1 <= s.length, goal.length <= 2 * 104
    s and goal consist of lowercase letters.
*/

var buddyStrings = function (s, goal) {
    //special case for the same words
    if (s === goal) {
        const obj = {};
        for (let i = 0; i < s.length; i++) {
            if (obj[s[i]] === undefined) {
                obj[s[i]] = 1;
            } else {
                //found double letter which can be safely swaped
                return true;
            }
        }
        return false;
    }
    //different length words
    if (s.length !== goal.length) {
        return false;
    }

    //other words
    let char1S = "";
    let char1G = "";
    let char2S = "";
    let char2G = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            if (char1S === "") {
                char1S = s[i];
                char1G = goal[i];
            } else if (char2S === "" && char1S === goal[i] && char1G === s[i]) {
                char2S = s[i];
                char2G = goal[i];
            } else {
                return false;
            }
        }
    }
    if (char1S && char1G && char2S && char2G && char1S === char2G && char2S === char1G) {
        return true;
    }
    return false;
};

// console.log(buddyStrings("ab", "ba"));
// console.log(buddyStrings("ab", "ab"));
// console.log(buddyStrings("aa", "aa"));
// console.log(buddyStrings("ab", "ca"));
// console.log(buddyStrings("abab", "abab"));
console.log(buddyStrings("ab", "babbb"));
