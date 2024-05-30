/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed. 

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0

Constraints:
    1 <= text.length <= 104
    text consists of lower case English letters only.
*/

var maxNumberOfBalloons = function (text) {
    //ballon contains:
    //b: 1,
    //a: 1,
    //l: 2,
    //o: 2,
    //n: 1

    const letters = {};

    for (let letter of text) {
        // //console.log(letter);
        if (letters[letter] === undefined) {
            letters[letter] = 1;
        } else {
            letters[letter]++;
        }
    }
    // console.log("letters:", letters);
    const balloons = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };

    for (let x in letters) {
        if (x === "b") {
            balloons.b = letters[x];
        }
        if (x === "a") {
            balloons.a = letters[x];
        }
        if (x === "l") {
            balloons.l = Math.floor(letters[x] / 2);
        }
        if (x === "o") {
            balloons.o = Math.floor(letters[x] / 2);
        }
        if (x === "n") {
            balloons.n = letters[x];
        }
    }

    let min = Infinity;

    for (let x in balloons) {
        if (balloons[x] === 0) {
            return 0;
        }
        if (balloons[x] < min) {
            min = balloons[x];
        }
    }

    // console.log(balloons);
    return min;
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
