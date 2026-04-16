const diStringMatch = (s: string): number[] => {
    const arr: number[] = [];
    const sArr = s.split("");

    let iN = 0;
    sArr.forEach((item) => {
        if (item === "I") {
            iN++;
        }
    });

    const start = s.length - iN;
    let high = start + 1;
    let low = start - 1;

    for (let i = 0; i < sArr.length; i++) {
        if (i === 0) {
            arr.push(start);
        }
        if (s[i] === "I") {
            arr.push(high);
            high++;
        } else {
            arr.push(low);
            low--;
        }
    }

    return arr;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
