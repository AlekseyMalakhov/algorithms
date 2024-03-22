/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
    1 <= s.length <= 105
    s[i] is a printable ascii character.
*/

//manually
/*
var reverseString = function (s) {
    let temp = "";
    const stop = Math.floor(s.length / 2) - 1;
    for (let i = 0; i <= stop; i++) {
        const secP = s.length - i - 1;
        temp = s[secP];
        s[secP] = s[i];
        s[i] = temp;
    }
    return s;
};
*/

//or much better
var reverseString = function (s) {
    return s.reverse();
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

/*
"h", "e", "l", "l", "o";
"o", "e", "l", "l", "h";
"o", "l", "l", "e", "h";

"H", "a", "n", "n", "a", "h";
"h", "a", "n", "n", "a", "H";
"h", "a", "n", "n", "a", "H";
*/
