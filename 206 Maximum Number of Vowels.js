/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'. 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels. 

Constraints:
    1 <= s.length <= 105
    s consists of lowercase English letters.
    1 <= k <= s.length
*/

var maxVowels = function (s, k) {
    const vowels = ["a", "e", "i", "o", "u"];
    const arr = s.split("");
    let max = 0;

    const sumArr = [];
    let curr = 0;
    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i];
        if (vowels.includes(letter)) {
            curr = curr + 1;
        }
        sumArr.push(curr);
    }
    // console.log("🚀 ~ maxVowels ~ sumArr:", sumArr);

    //we should take any substring with length k
    //we should move along the array and get substrings one by one of length k
    //then we should calculate number of vowels for every substring according to precalculated array
    //if number of vowels is bigger - update max

    for (let i = 0; i < arr.length; i++) {
        // console.log("🚀 ~ maxVowels ~ i:", i);
        const r = i + k - 1;
        // console.log("🚀 ~ maxVowels ~ r:", r);
        if (r > arr.length - 1) {
            //no more k length subarrays
            return max;
        }
        let leftArg = 0;
        if (sumArr[i - 1] !== undefined) {
            leftArg = sumArr[i - 1];
        }
        const sum = sumArr[r] - leftArg;
        // console.log("🚀 ~ maxVowels ~ sumArr[r]:", sumArr[r]);
        // console.log("🚀 ~ maxVowels ~ sumArr[i]:", sumArr[i]);
        // console.log("🚀 ~ maxVowels ~ sum:", sum);
        if (sum > max) {
            max = sum;
        }
        //console.log("-------------");
    }

    return max;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
