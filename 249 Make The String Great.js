/*
Given a string s of lower and upper case English letters.
A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
    0 <= i <= s.length - 2
    s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.

To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
Notice that an empty string is also good. 

Example 1:
Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

Example 2:
Input: s = "abBAcC"
Output: ""
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""

Example 3:
Input: s = "s"
Output: "s" 

Constraints:
    1 <= s.length <= 100
    s contains only lower and upper case English letters.
*/

var makeGood = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        console.log("current:", current);
        const prev = stack[stack.length - 1];
        //we compare our current letter not with the previous letter in the string, but with the previous letter in the result!
        //it looks similar to recursion where we check the result of the previous calculation again and again
        //so here in a stack we have the result of the previous calculation. So we compare out current letter with it

        //So this is a key  - we evaluate our current item not with the items of the initial data to get a result, as we will do in a usual approach, but with
        //the items that are already are in the result
        //This is a key difference!
        if (stack.length > 0 && Math.abs(current.charCodeAt() - prev.charCodeAt()) === 32) {
            console.log("we pop");
            stack.pop();
        } else {
            console.log("we push " + current);
            stack.push(current);
        }
        console.log("stack:", stack);
        console.log("-------------------------");
    }

    return stack.join("");
};

/*
var makeGood = function (s) {
    const arr2 = s.split("");
    // //console.log(arr);

    //The difference between upper- and lowercase characters is always 32

    const check = (arr) => {
        let prev = null;
        let current = "";

        const res = [];
        let deleted = false;

        for (let i = 0; i < arr.length; i++) {
            // console.log("start");

            prev = current;
            // console.log("prev:", prev);
            current = arr[i];
            //console.log("current:", current);
            res.push(current);
            if (Math.abs(current?.charCodeAt(0) - prev?.charCodeAt(0)) === 32) {
                res.pop();
                res.pop();
                current = res[res.length - 1];
                deleted = true;
            }

            //console.log("res:", res);
            // console.log("-----------------------------");
        }

        if (deleted) {
            return check(res);
        } else {
            return res.join("");
        }
    };

    return check(arr2);

    //return res.join("");
};
*/

//console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
//console.log(makeGood("s"));
