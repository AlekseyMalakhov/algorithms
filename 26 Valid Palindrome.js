/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

var isPalindrome = function (s) {
  if (s === " ") {
    return true;
  }
  const str1 = s.toLowerCase().replace(/\W|\_/gm, "");
  const str2 = str1.split("").reverse().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
};

// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("abba"));
console.log(isPalindrome("ab_a"));
