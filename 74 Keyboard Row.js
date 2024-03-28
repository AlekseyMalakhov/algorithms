/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:
    the first row consists of the characters "qwertyuiop",
    the second row consists of the characters "asdfghjkl", and
    the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:

Input: words = ["omk"]
Output: []

Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

Constraints:

    1 <= words.length <= 20
    1 <= words[i].length <= 100
    words[i] consists of English letters (both lowercase and uppercase). 
*/

var findWords = function (words) {
    const letters = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    const hashes = letters.map((item) => {
        const obj = {};
        for (let i = 0; i < item.length; i++) {
            if (!obj[item[i]]) {
                obj[item[i]] = true;
            }
        }
        return obj;
    });

    const canType = (row, word) => {
        for (let i = 0; i < word.length; i++) {
            if (!row[word[i]]) {
                return false;
            }
        }
        return true;
    };

    const res = [];
    for (let k = 0; k < hashes.length; k++) {
        const row = hashes[k];
        for (let i = 0; i < words.length; i++) {
            const word = words[i].toLowerCase();
            if (canType(row, word)) {
                res.push(words[i]);
            }
        }
    }
    return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
// console.log(findWords(["adsdf", "sfd"]));
// console.log(findWords(["omk"]));
