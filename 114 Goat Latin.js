/*
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:
    If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
        For example, the word "apple" becomes "applema".
    If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
        For example, the word "goat" becomes "oatgma".
    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
        For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

Return the final sentence representing the conversion from sentence to Goat Latin.

Example 1:

Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:

Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

Constraints:
    1 <= sentence.length <= 150
    sentence consists of English letters and spaces.
    sentence has no leading or trailing spaces.
    All the words in sentence are separated by a single space.
*/

var toGoatLatin = function (sentence) {
    const res = [];
    const vowels = ["a", "e", "i", "o", "u"];

    const arr = sentence.split(" ");
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];

        let newWord = "";
        if (vowels.includes(word[0].toLowerCase())) {
            newWord = word + "ma";
        } else {
            const fl = word[0];
            newWord = word.slice(1) + fl + "ma";
        }
        for (let j = 0; j <= i; j++) {
            newWord = newWord + "a";
        }
        res.push(newWord);
    }
    return res.join(" ");
};

// console.log(toGoatLatin("I speak Goat Latin"));
// console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));

console.log(toGoatLatin("Each word consists of lowercase and uppercase letters only"));
