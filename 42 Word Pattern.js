/*
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false


Constraints:
    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.
*/

var wordPattern = function (pattern, s) {
    const objL = {};
    const objW = {};
    const arrS = s.split(" ");

    if (arrS.length !== pattern.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i] + "_check"; //to prevent name clashes with real build-in object properties
        const word = arrS[i] + "_check";
        if (objL[letter] === undefined && objW[word] === undefined) {
            objL[letter] = word;
            objW[word] = letter;
        } else {
            if (objL[letter] !== word || objW[word] !== letter) {
                return false;
            }
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog constructor constructor dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("abc", "dog cat dog"));
