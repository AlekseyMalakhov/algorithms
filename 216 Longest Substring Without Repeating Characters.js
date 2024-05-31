/*
Given a string s, find the length of the longest substring without repeating characters. 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. 

Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let left = 0;
    let current = 0;
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        // console.log("i:", i);
        // console.log("obj:", obj);
        current++;
        // console.log("current:", current);
        //check letter. If we don't have this letter - go right
        //if we have this letter, move left. Check if we have this letter?
        //If we have this letter - move left
        //if we don't have this letter - move right
        //if left === right - move right
        const letter = s[i];
        // console.log("letter:", letter);
        if (obj[letter] === undefined) {
            obj[letter] = true;
            if (current > max) {
                max = current;
            }
        } else {
            while (left <= i && obj[letter] !== undefined) {
                // console.log("left:", left);
                // console.log("obj:", obj);
                // console.log("current:", current);
                const leftLetter = s[left];
                // console.log("leftLetter:", leftLetter);
                delete obj[leftLetter];
                // console.log("remove left letter");
                // console.log("obj after delete:", obj);
                left++;
                current--;
                // console.log("end while-----------");
            }
            if (obj[letter] === undefined) {
                // console.log("add letter");
                obj[letter] = true;
                // console.log("obj after add: ", obj);
                //current++;
                if (current > max) {
                    max = current;
                }
            }
        }
        // console.log("---------------------------------------");
    }
    return max;
};

// // console.log(lengthOfLongestSubstring("abcabcbb"));
// // console.log(lengthOfLongestSubstring("bbbbb"));
// // console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf"));
