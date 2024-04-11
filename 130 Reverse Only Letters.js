/*
Given a string s, reverse the string according to the following rules:
    All the characters that are not English letters remain in the same position.
    All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.
 

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Constraints:
    1 <= s.length <= 100
    s consists of characters with ASCII values in the range [33, 122].
    s does not contain '\"' or '\\'.
*/

var reverseOnlyLetters = function (s) {
    const arr = s.split("");
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let lChar = arr[l];
        let rChar = arr[r];
        //console.log("lChar = " + lChar + ", rChar = " + rChar);
        if (lChar.match(/[A-Za-z]/g) && rChar.match(/[A-Za-z]/g)) {
            arr[l] = rChar;
            arr[r] = lChar;
            l++;
            r--;
        } else if (!lChar.match(/[A-Za-z]/g) && rChar.match(/[A-Za-z]/g)) {
            l++;
        } else if (lChar.match(/[A-Za-z]/g) && !rChar.match(/[A-Za-z]/g)) {
            r--;
        } else if (!lChar.match(/[A-Za-z]/g) && !rChar.match(/[A-Za-z]/g)) {
            r--;
            l++;
        }
    }
    return arr.join("");
};

// console.log(reverseOnlyLetters("ab-cd"));
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
console.log(reverseOnlyLetters("7_28]"));
