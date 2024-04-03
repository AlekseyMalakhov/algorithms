/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] 
then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".

Example 2:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

Example 3:

Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".

 
Constraints:
    1 <= list1.length, list2.length <= 1000
    1 <= list1[i].length, list2[i].length <= 30
    list1[i] and list2[i] consist of spaces ' ' and English letters.
    All the strings of list1 are unique.
    All the strings of list2 are unique.
    There is at least a common string between list1 and list2.
*/

/*
var findRestaurant = function (list1, list2) {
    let min = null;
    const obj = {};
    for (let i = 0; i < list1.length; i++) {
        const word1 = list1[i];
        for (let j = 0; j < list2.length; j++) {
            const word2 = list2[j];
            if (word1 === word2) {
                if (min === null) {
                    min = i + j;
                } else if (i + j < min) {
                    min = i + j;
                }
                if (!obj[i + j]) {
                    obj[i + j] = [word1];
                } else {
                    obj[i + j].push(word1);
                }
            }
        }
    }
    return obj[min];
};
*/

var findRestaurant = function (list1, list2) {
    let min = null;
    const obj = {};
    const res = {};
    for (let i = 0; i < list1.length; i++) {
        obj[list1[i]] = i;
    }
    for (let i = 0; i < list2.length; i++) {
        const word = list2[i];
        const wordList1Index = obj[word];
        if (wordList1Index !== undefined) {
            if (min === null) {
                min = i + wordList1Index;
            } else if (i + wordList1Index < min) {
                min = i + wordList1Index;
            }
            if (!res[i + wordList1Index]) {
                res[i + wordList1Index] = [word];
            } else {
                res[i + wordList1Index].push(word);
            }
        }
    }
    return res[min];
};

console.log(
    findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"])
);

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));

console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]));
