function toHex(num: number): string {
    const objDecimal = {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "a",
        "11": "b",
        "12": "c",
        "13": "d",
        "14": "e",
        "15": "f",
    };

    const objBinary = {
        "0000": "0",
        "0001": "1",
        "0010": "2",
        "0011": "3",
        "0100": "4",
        "0101": "5",
        "0110": "6",
        "0111": "7",
        "1000": "8",
        "1001": "9",
        "1010": "a",
        "1011": "b",
        "1100": "c",
        "1101": "d",
        "1110": "e",
        "1111": "f",
    };

    const arr: number[] = [];
    if (num === 0) {
        return "0";
    }

    if (num > 0) {
        while (num > 0) {
            const modulus = num % 16;
            arr.push(objDecimal[modulus.toString()]);
            num = Math.floor(num / 16);
        }
    } else {
        const arrBin: number[] = [];
        let n = Math.abs(num);
        // 1st - convert to binary
        while (n > 0) {
            const modulus = n % 2;
            arrBin.push(modulus);
            n = Math.floor(n / 2);
        }
        // make sure array can be divided on the groups by 4
        // add needed zeroes
        let zeroes = 0;
        if (arrBin.length < 4) {
            zeroes = 4 - arrBin.length;
        } else {
            zeroes = arrBin.length % 4;
        }

        for (let i = 0; i < zeroes; i++) {
            arrBin.push(0);
        }

        // invert digits
        const prepBinArr = arrBin.map((item) => (item === 0 ? 1 : 0));

        // add 1
        for (let i = 0; i < prepBinArr.length; i++) {
            if (prepBinArr[i] === 0) {
                prepBinArr[i] = 1;
                break;
            } else {
                prepBinArr[i] = 0;
            }
        }

        // convert binary to hex
        // add 1s at the beginning;
        const numberOf0 = 32 - prepBinArr.length;
        for (let i = 0; i < numberOf0; i++) {
            prepBinArr.push(1);
        }

        prepBinArr.reverse();

        const arrOfHex: string[] = [];

        let str = "";
        for (let i = 0; i < prepBinArr.length; i++) {
            str = str + prepBinArr[i];
            if (str.length === 4) {
                arrOfHex.push(str);
                str = "";
            }
        }

        let resultStr = "";

        arrOfHex.forEach((item) => {
            resultStr = resultStr + objBinary[item];
        });

        return resultStr;
    }

    return arr.reverse().join("");
}

// console.log(toHex(26)); //"1a"
// console.log(toHex(99)); //"63"
console.log(toHex(-42)); //"ffffffd6"
console.log(toHex(-1)); //"ffffffff"
// console.log(toHex(0)); //"0"
console.log(toHex(-4)); //"fffffffc"

/*

// 3) add1

[
    '1111', '1111',
    '1111', '1111',
    '1111', '1111',
    '1111', '1100'
  ]

  // 2) reverse

  [
    '1111', '1111',
    '1111', '1111',
    '1111', '1111',
    '1111', '1110'
  ]

  // 1) absolute
   [
    '1111', '1111',
    '1111', '1111',
    '1111', '1111',
    '1111', '0001'
  ]



  */
