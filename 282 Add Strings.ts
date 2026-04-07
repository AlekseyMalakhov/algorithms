function addStrings(num1: string, num2: string): string {
    let large = num1.split("").reverse();
    let small = num2.split("").reverse();

    if (num1.length < num2.length) {
        const temp = large;
        large = small;
        small = temp;
    }

    const arr: number[] = [];
    let inMind = 0;

    for (let i = 0; i < large.length; i++) {
        const largeNumDigit = large[i].charCodeAt(0) - 48;
        let smallNumDigit = 0;
        if (small[i] !== undefined) {
            smallNumDigit = small[i].charCodeAt(0) - 48;
            if (isNaN(smallNumDigit)) {
                smallNumDigit = 0;
            }
        }

        let sum = largeNumDigit + smallNumDigit + inMind;

        if (sum > 9) {
            inMind = Math.floor(sum / 10);
            arr.push((sum % 10) + 48);
            // if this is the last push, push inMind as well
            if (i === large.length - 1) {
                arr.push(inMind + 48);
            }
        } else {
            inMind = 0;
            arr.push(sum + 48);
        }
    }
    arr.reverse();

    return String.fromCharCode(...arr);
}

console.log(addStrings("11", "123")); //134
console.log(addStrings("456", "77")); //533
console.log(addStrings("0", "0"));
console.log(addStrings("1", "9")); //10
// console.log(addStrings("9333852702227987", "85731737104263")); //9419584439332250
// console.log(addStrings("227987", "104263")); //9419584439332250

/*
"9333852702227987"
  "85731737104263"
"9419584439332250"
*/

/*
"227987"
"104263"
"332250"
*/
