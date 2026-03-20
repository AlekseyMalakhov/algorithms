const romanToInt = (s: string): number => {
    let sum = 0;

    const rules1 = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const rules2 = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };

    const arr = s.split("");
    // console.log("🚀 ~ arr:", arr);

    let p1 = 0;
    let p2 = 1;

    while (p1 < arr.length) {
        const romNumber = arr[p1] + arr[p2];
        if (rules2[romNumber]) {
            // add two letters number
            sum = sum + rules2[romNumber];
            p1 = p1 + 2;
            p2 = p1 + 1;
        } else {
            // add one letters number
            sum = sum + rules1[arr[p1]];
            p1++;
            p2++;
        }
    }

    return sum;
};

const s1 = "MCDLXXVI";
// 1576
// 1476
console.log(romanToInt(s1));
