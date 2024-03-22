/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"

Example 2:

Input: s = "leetcode"
Output: "leotcede"

Constraints:

    1 <= s.length <= 3 * 105
    s consist of printable ASCII characters.

*/

var reverseVowels = function (s) {
    const vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const arr = s.split("");
    const vowels = arr.filter((letter) => {
        if (vowelsList.includes(letter)) {
            return letter;
        }
    });
    const res = arr.map((letter) => {
        if (vowelsList.includes(letter)) {
            return vowels.pop();
        } else {
            return letter;
        }
    });

    return res.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("aA"));
