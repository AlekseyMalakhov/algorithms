/*
You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:
    Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
    Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
Return the lexicographically smallest string that can be written on the paper.
 

Example 1:

Input: s = "zza"
Output: "azz"
Explanation: Let p denote the written string.
Initially p="", s="zza", t="".
Perform first operation three times p="", s="", t="zza".
Perform second operation three times p="azz", s="", t="".

Example 2:

Input: s = "bac"
Output: "abc"
Explanation: Let p denote the written string.
Perform first operation twice p="", s="c", t="ba". 
Perform second operation twice p="ab", s="c", t="". 
Perform first operation p="ab", s="", t="c". 
Perform second operation p="abc", s="", t="".

Example 3:

Input: s = "bdda"
Output: "addb"
Explanation: Let p denote the written string.
Initially p="", s="bdda", t="".
Perform first operation four times p="", s="", t="bdda".
Perform second operation four times p="addb", s="", t="". 

Constraints:
    1 <= s.length <= 105
    s consists of only English lowercase letters.
*/

var robotWithString = function (s) {
    const t = [];
    const p = [];
    let min = [];
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(i);
        if (i === s.length - 1) {
            console.log("i = " + i);
            min[i] = null; //
            min[i - 1] = s[i];
        } else {
            console.log("i else = " + i);
            const prev = min[i];
            console.log("prev:", prev.charCodeAt(0));
            console.log("s[i]:", s[i].charCodeAt(0));
            let res = prev;
            if (s[i].charCodeAt(0) < prev.charCodeAt(0)) {
                res = s[i];
            }
            console.log("res:", res);
            if (i >= 1) {
                min[i - 1] = res;
            }
        }
        console.log("min:", min);
        console.log("---------------------------");
    }
    console.log("min:", min);

    console.log("main work --------------------------------------------------");

    //for (const letter of s) {
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        console.log("letter:", letter);
        let letterT = t[t.length - 1];
        if (!letterT) {
            letterT = "";
        }
        console.log("letterT:", letterT);
        if (!letterT?.charCodeAt(0)) {
            //if the stack t is empty
            //add letter to t
            t.push(letter);
            console.log("push letter to t");
            // } else if (letter.charCodeAt(0) <= letterT.charCodeAt(0)) {
            //     //if your letter is less or equal to top letter it stack
            //     //add letter to t - because we need t has a reversed alphabetical order (from large to small)
            //     t.push(letter);
            //     console.log("push letter to t");
            // } else {
            console.log("min[i] = " + min[i]);
        } else if (min[i] && letterT.charCodeAt(0) >= min[i].charCodeAt(0)) {
            //if your letter is bigger then top letter in T then its better to write top letter on paper
            //because next letters in t will have larger value and may be you can  put your letter between them
            //but if there are still letters less than top t in your string, then it's better to put your letter in stack
            //t because later we cam to the smaller letter
            //and remember we need to hav stack t to be from big letters to small letters
            //add letter to t
            t.push(letter);
            console.log("letter " + letter + " is more then letterT, so it's better to write letterT to paper");
            console.log("but later we will have minimum " + min[i]);
            console.log("so push letter to t");
        } else {
            //if your letter is bigger then top letter in T then its better to write top letter on paper
            //because next letters in t will have larger value and may be you can  put your letter between them
            while (letterT?.charCodeAt(0) && letter.charCodeAt(0) > letterT.charCodeAt(0)) {
                //write letter to p
                const writeLetter = t.pop();
                console.log("writeLetter:", writeLetter);
                p.push(writeLetter);
                letterT = t[t.length - 1];
                //console.log("letterT:", letterT);
                //console.log("while----------------");
            }
            t.push(letter);
        }
        //}
        console.log("for----------------");
        console.log(t);
        console.log(p);
    }

    if (t.length > 0) {
        while (t.length > 0) {
            const l = t.pop();
            p.push(l);
        }
    }
    return p.join("");
};

console.log(robotWithString("zza"));
console.log(robotWithString("bac"));
console.log(robotWithString("bdda"));
console.log(robotWithString("bydizfve"));
//bdevfziy;
console.log(robotWithString("ibwqrkn"));
//biknrqw;
console.log(robotWithString("mmuqezwmomeplrtskz")); //eekstrlpmomwzqummz;
