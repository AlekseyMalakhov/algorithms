/*
Given a string s, return the number of segments in the string.
A segment is defined to be a contiguous sequence of non-space characters.

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:

Input: s = "Hello"
Output: 1

Constraints:

    0 <= s.length <= 300
    s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
    The only space character in s is ' '.
*/

var countSegments = function (s) {
    const arr = s.match(/\S+/gm);
    if (!arr) {
        return 0;
    }
    return arr.length;
};

//another option
/*
var countSegments = function(s) {
    return s.split(' ').filter(segment => segment.trim() !== '').length;
};
*/
console.log(countSegments("Hello, my name is John"));
console.log(countSegments("Hello"));
console.log(countSegments("           "));