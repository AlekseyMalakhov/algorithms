/*
You are given an integer array deck where deck[i] represents the number written on the ith card.
Partition the cards into one or more groups such that:
    Each group has exactly x cards where x > 1, and
    All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
 

Constraints:
    1 <= deck.length <= 104
    0 <= deck[i] < 104
*/

const tryToDivide = (obj) => {
    let min = null;
    const arr = [];
    for (let x in obj) {
        arr.push(obj[x]);
        if (min === null) {
            min = obj[x];
        } else {
            if (obj[x] < min) {
                min = obj[x];
            }
        }
    }
    if (min === 1) {
        return false;
    }

    if (min === 2) {
        return arr.every((val) => val % 2 === 0);
    } else {
        let minGenDiv = 2;
        while (minGenDiv <= min) {
            const check = arr.every((val) => val % minGenDiv === 0);
            if (check) {
                return true;
            }
            minGenDiv++;
        }
        return false;
    }
};

var hasGroupsSizeX = function (deck) {
    if (deck.length === 1) {
        return false;
    }
    const obj = {};

    for (let i = 0; i < deck.length; i++) {
        const card = deck[i];
        if (obj[card] === undefined) {
            obj[card] = 1;
        } else {
            obj[card]++;
        }
    }

    let first = null;
    for (let x in obj) {
        if (first === null) {
            first = obj[x];
        } else {
            if (obj[x] !== first) {
                return tryToDivide(obj);
            }
        }
    }
    return true;
};

// console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
// console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
// console.log(hasGroupsSizeX([1])); //false
// console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2])); //true
// console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])); //true
console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3])); //true
