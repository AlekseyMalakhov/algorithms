/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 Example 1:

Input: s = "aba"
Output: true

Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:

Input: s = "abc"
Output: false

Constraints:

    1 <= s.length <= 105
    s consists of lowercase English letters.
*/

var validPalindrome = function (s) {
    const check = (str) => {
        let l = 0;
        let r = str.length - 1;
        while (l < r) {
            if (str[l] !== str[r]) {
                return [l, r];
            }
            l++;
            r--;
        }
        return [];
    };
    const res = check(s);
    if (res.length === 0) {
        return true;
    } else {
        const arr1 = s.split("");
        arr1.splice(res[0], 1);
        const res1 = check(arr1);
        if (res1.length === 0) {
            return true;
        } else {
            const arr2 = s.split("");
            arr2.splice(res[1], 1);
            const res2 = check(arr2);
            if (res2.length === 0) {
                return true;
            }
            return false;
        }
    }
};

//console.log(validPalindrome("aba"));
console.log(validPalindrome("laa"));
// console.log(validPalindrome("abc"));
//console.log(validPalindrome("laal"));
//console.log("--------------");
//console.log(validPalindrome("laabl"));
