/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const l1 = s[left];
        const l2 = s[right];
        s[left] = l2;
        s[right] = l1;
        left++;
        right--;
    }
};

reverseString(["a", "b", "c", "d", "f"]);
