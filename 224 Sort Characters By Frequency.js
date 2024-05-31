/*
Given a string s, sort it in decreasing order based on the frequency of the characters. 
The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them. 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters. 

Constraints:
    1 <= s.length <= 5 * 105
    s consists of uppercase and lowercase English letters and digits.
*/

var frequencySort = function (s) {
    const obj = {};

    for (char of s) {
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }

    const setFreq = new Set();
    const map = new Map();

    for (const x in obj) {
        const freq = obj[x];
        setFreq.add(freq);

        if (!map.has(freq)) {
            map.set(freq, [x]);
        } else {
            const curr = map.get(freq);
            curr.push(x);
            map.set(freq, curr);
        }
    }

    const arrFreq = Array.from(setFreq);
    arrFreq.sort((a, b) => b - a);

    const result = [];
    for (const freq of arrFreq) {
        const arrOfLetters = map.get(freq);
        for (let char of arrOfLetters) {
            for (let i = 0; i < freq; i++) {
                result.push(char);
            }
        }
    }

    // console.log(obj);
    // console.log("arrFreq:", arrFreq);
    // console.log("map:", map);
    return result.join("");
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
