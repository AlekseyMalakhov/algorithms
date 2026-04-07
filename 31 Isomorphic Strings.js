var isIsomorphic = function (s, t) {
    const obj = {};
    const used = {};

    for (let i = 0; i < s.length; i++) {
        const letterS = s[i];
        const letterT = t[i];

        // if map exists but it points to incorrect letter T - stop
        if (obj[letterS] !== undefined && obj[letterS] !== letterT) {
            return false;
        }

        // if map does not exist but current letter T has already been used with another letter S - stop
        if (!obj[letterS] && used[letterT]) {
            return false;
        }

        // if map for current letter S does not exist and letter T has not been used before with another letter S
        if (!obj[letterS] && !used[letterT]) {
            // create a map
            obj[letterS] = letterT;
            // mark a used letterT
            used[letterT] = true;
        }

        // proceed
    }

    // console.log(obj);

    return true;
};

console.log(isIsomorphic("egg", "add"));
console.log("---------------------");
console.log(isIsomorphic("f11", "b23"));
console.log("---------------------");
console.log(isIsomorphic("paper", "title"));
console.log("---------------------");
/*

{ 
 b: 'b', 
 a: 'a', 
 d: 'b', 
 c: 'a' 
 }

*/
console.log(isIsomorphic("badc", "baba")); //expected false
