/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.


*/

var isValid = function (str) {
  if (str === "") {
    return false;
  }

  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      //search for a nearest closing )
      const closing = str.indexOf(")", i);
      console.log(closing);
      const part = str.slice(i, closing + 1);
      arr.push(part);
    }
    // if (f === "{") {
    //   return false;
    // }
    // if (f === "[") {
    //   return false;
    // }
  }

  console.log(arr);

  return true;
};

console.log(isValid("()"));
console.log(isValid("()()"));
console.log(isValid("(())"));
// console.log(isValid("{[]}"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
