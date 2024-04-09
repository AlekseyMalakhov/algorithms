/*
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. 
It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase. 

Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

Example 2:

Input: paragraph = "a.", banned = []
Output: "a" 

Constraints:

    1 <= paragraph.length <= 1000
    paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
    0 <= banned.length <= 100
    1 <= banned[i].length <= 10
    banned[i] consists of only lowercase English letters.
*/

var mostCommonWord = function (paragraph, banned) {
    const arr1 = paragraph.match(/[A-Za-z]+/g);
    const obj = {};
    arr1.forEach((word) => {
        const wordLC = word.toLowerCase();
        if (!banned.includes(wordLC)) {
            if (obj[wordLC] === undefined) {
                obj[wordLC] = 1;
            } else {
                obj[wordLC]++;
            }
        }
    });
    console.log(obj);

    let maxWord = "";
    let maxN = 0;

    for (let x in obj) {
        if (maxWord === "") {
            maxWord = x;
            maxN = obj[x];
        }
        if (obj[x] > maxN) {
            maxWord = x;
            maxN = obj[x];
        }
    }
    return maxWord;
};

// console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
// console.log(mostCommonWord("a.", []));

//console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));

console.log(
    mostCommonWord(
        "Z? Z, Z. S. O. z; X, R. k? X, R' M! D! i. W, p. X, t; s, U; T? Z? W! X, O. g, M; y? t; X; O, X' C' Y; x! q! Y' T; u? R. j? w, M. F' n' F; y, V' z. R, V; x' y? F' m' p? M. w, n! Y' Y? i. S' P? w; w; y! Z; P' o? I, H! L; U; p' i; s' Z. V; S! V! H! y' I? K; d. L! r? u! U. O! s? j. y. G, g, r; Z, X, x' L! l? Z, w! Z' W! b. N! T. P! Y, Z. u! Z, q! Y? P' G' u' t, N' k, H' T, I. S' q? J. q! i? E! Q. O, j' r; r' L' C, z! G, p. S. p' s' L! u. S. t, V; z, Z' p! t? Z. x! h; T; T' V, w; P? Q' T! q. J; E? n. V' X. M? Q, v; U; O, H? h; T. s, n! Y? a, N; o, V, o. S! K' j! Y, W! v; Q! u? U' l. k. r, o. o; m. E, I. n! H' w? u? x! w! U' m; w; R' n. y. Y, W' d; P? z! K! g? m, J' i. t, j. x! F. F' U? K! r' V, r, s! O, Q, v, v, c. E. s! X. k; F' Y! r? P! g! r! V! w; S! X, S! N, z? m. y. B; Y' n' U? r. u; R. l? U? v, r, y' W' W' Q; n' Y? Z, L? O. T? Q' q. l, z! V. T. k; x' q! s; u? W! x' X; P; m! t; T? X, v, v' t. Y' q; X? u; V; X! q! w. j! W; z; v. u, j. w; v. z; W' P' z; l! l. o! Z, Y. H; Q; k' O' m, U!",
        ["c", "y", "u", "i", "p", "j", "g", "r", "o", "h", "t", "m", "k", "z", "s", "q", "v", "a", "e", "x"]
    )
);
