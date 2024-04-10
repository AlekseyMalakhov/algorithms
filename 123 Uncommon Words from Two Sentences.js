/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

Constraints:
    1 <= s1.length, s2.length <= 200
    s1 and s2 consist of lowercase English letters and spaces.
    s1 and s2 do not have leading or trailing spaces.
    All the words in s1 and s2 are separated by a single space.
*/

var uncommonFromSentences = function (s1, s2) {
    const obj = {};

    const arr1 = s1.split(" ");
    const arr2 = s2.split(" ");

    for (let i = 0; i < arr1.length; i++) {
        const word = arr1[i];
        if (obj[word] === undefined) {
            obj[word] = {
                sent1: true,
                sent2: false,
                n: 1,
            };
        } else {
            obj[word].n++;
            obj[word].sent1 = true;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const word = arr2[i];
        if (obj[word] === undefined) {
            obj[word] = {
                sent1: false,
                sent2: true,
                n: 1,
            };
        } else {
            obj[word].n++;
            obj[word].sent2 = true;
        }
    }

    //console.log(obj);

    const res = [];
    for (let x in obj) {
        if (obj[x].sent1 !== obj[x].sent2 && obj[x].n === 1) {
            res.push(x);
        }
    }

    return res;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));
