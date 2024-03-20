/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

//this solution has a lot of for loops
/*
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const arrS = s.split("").sort();
  const arrT = t.split("").sort();
  const strS = arrS.join("");
  const strT = arrT.join("");
  return strS === strT;
};
*/

//let's try to do this in two for loops
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const objS = {};
  const objT = {};
  for (let i = 0; i < s.length; i++) {
    if (objS[s[i]] === undefined) {
      objS[s[i]] = 1;
    } else {
      objS[s[i]]++;
    }
    if (objT[t[i]] === undefined) {
      objT[t[i]] = 1;
    } else {
      objT[t[i]]++;
    }
  }
  for (x in objS) {
    if (objS[x] !== objT[x]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
