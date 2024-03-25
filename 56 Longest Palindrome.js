/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 
Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:

    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.
*/

var longestPalindrome = function (s) {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    let centralLetter = "";
    let length = 0;
    for (x in obj) {
        if (obj[x] === 1 && !centralLetter) {
            {
                centralLetter = obj[x];
            }
        }
        if (obj[x] % 2 === 0) {
            length = length + obj[x];
        } else if (obj[x] > 2) {
            length = length + obj[x] - 1;
            if (!centralLetter) {
                centralLetter = obj[x];
            }
        }
    }
    if (centralLetter) {
        length++;
    }
    return length;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aA"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ccc"));
