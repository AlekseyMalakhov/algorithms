/*
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise. 

Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"
Output: false 

Constraints:
    1 <= sentence.length <= 1000
    sentence consists of lowercase English letters.
*/

var checkIfPangram = function (sentence) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const obj = {};

    for (let i = 0; i < abc.length; i++) {
        obj[abc[i]] = 0;
    }

    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i];
        obj[letter]++;
    }

    for (let x in obj) {
        if (obj[x] === 0) {
            return false;
        }
    }

    return true;

    //console.log(obj);
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
