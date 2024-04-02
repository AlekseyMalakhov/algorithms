/*
We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Given a string word, return true if the usage of capitals in it is right. 

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false

Constraints:

    1 <= word.length <= 100
    word consists of lowercase and uppercase English letters.
*/
const checkCapital = (letter) => {
    return letter.match(/[A-Z]/gm) ? true : false;
};
var detectCapitalUse = function (word) {
    if (word.length === 1) {
        return true;
    }
    let mode = "";
    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            //check 1st letter
            if (checkCapital(word[0])) {
                //USA or Google
                if (checkCapital(word[1])) {
                    //USA
                    mode = "USA";
                } else {
                    //Google
                    mode = "Google";
                }
            } else {
                //leetcode
                mode = "leetcode";
            }
            //check other letters
        } else if (mode === "USA") {
            if (!checkCapital(word[i])) {
                return false;
            }
        } else if (mode === "Google") {
            if (checkCapital(word[i])) {
                return false;
            }
        } else if (mode === "leetcode") {
            if (checkCapital(word[i])) {
                return false;
            }
        }
    }
    return true;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
