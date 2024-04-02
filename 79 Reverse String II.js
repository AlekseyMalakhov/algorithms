/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters,
 then reverse the first k characters and leave the other as original.

Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:
Input: s = "abcd", k = 2
Output: "bacd"

Question is very poorly worded.

"If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original."

So if s.length = 9, k = 5, reverse the first 5 and leave last 4.

But if s.length = 12, k = 5, we should reverse first 5, leave next 5, and then reverse last 2?

Is that correct?
Yes that is correct
*/

var reverseStr = function (s, k) {
    if (s.length < k) {
        return s.split("").reverse().join("");
    } else {
        const arr = [];
        let temp = [];
        for (let i = 0; i < s.length; i++) {
            temp.push(s[i]);
            if (temp.length === k) {
                arr.push(temp);
                temp = [];
            }
        }
        if (temp.length !== 0) {
            arr.push(temp);
        }
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                arr[i].reverse();
            }
        }
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            str = str + arr[i].join("");
        }
        return str;
    }
};

// console.log(reverseStr("abcdefg", 2)); //bacdfeg
// console.log(reverseStr("abcd", 2)); //bacd

console.log(reverseStr("abcdefg", 25)); //bacdfeg
console.log(reverseStr("abcdefghijklmnop", 3)); //bacdfeg
