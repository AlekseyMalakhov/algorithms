/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.


*/

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let word of strs) {
    while (word.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix([""]));
