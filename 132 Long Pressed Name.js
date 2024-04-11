/*
Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, 
and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some 
characters (possibly none) being long pressed.

Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.

Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.

Constraints:
    1 <= name.length, typed.length <= 1000
    name and typed consist of only lowercase English letters.
*/

// const createObj = (str) => {
//     const obj = {};
//     for (let i = 0; i < str.length; i++) {
//         const letter = str[i];
//         if (!obj[letter]) {
//             obj[letter] = 1;
//         } else {
//             obj[letter]++;
//         }
//     }
//     return obj;
// };

const createArr = (str) => {
    let prev = "";
    let temp = "";
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            prev = str[i];
            temp = prev;
        } else {
            if (prev === str[i]) {
                temp = temp + str[i];
            } else {
                arr.push(temp);
                prev = str[i];
                temp = prev;
            }
        }
    }
    arr.push(temp);
    return arr;
};

var isLongPressedName = function (name, typed) {
    const nameArr = createArr(name);
    const typedArr = createArr(typed);

    if (nameArr.length !== typedArr.length) {
        return false;
    }

    for (let i = 0; i < nameArr.length; i++) {
        const nameLetterSet = nameArr[i];
        const typedLetterSet = typedArr[i];
        if (nameLetterSet.length > typedLetterSet.length) {
            return false;
        }
        if (nameLetterSet[0] !== typedLetterSet[0]) {
            return false;
        }
    }

    return true;
};

console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("xnhtq", "xhhttqq"));
console.log(isLongPressedName("rick", "kric"));
console.log(isLongPressedName("alex", "aaleexa"));
console.log(isLongPressedName("alex", "aaleexeex"));
