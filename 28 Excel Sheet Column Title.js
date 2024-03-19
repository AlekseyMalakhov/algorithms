/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...


Example 1:

Input: columnNumber = 1
Output: "A"

Example 2:

Input: columnNumber = 28
Output: "AB"

Example 3:

Input: columnNumber = 701
Output: "ZY"

 
Constraints:

    1 <= columnNumber <= 231 - 1

*/

/*
var convertToTitle = function (columnNumber) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let res = [];
  //console.log("alphabet.length = " + alphabet.length);

  //   console.log(Math.floor(10 / 26));
  //   console.log(Math.floor(35 / 26));
  //   console.log(Math.floor(500 / 26));
  //   console.log(Math.floor(1200 / 26));

  if (columnNumber <= alphabet.length) {
    //console.log("small");
    return alphabet[columnNumber - 1];
  }

  let quotient = columnNumber - 1;
  let remainder = 1;

  //let check = 0;
  // while (quotient > 0 || remainder > 0) {
  //   console.log(
  //     "-----------------------------------------------------------------------"
  //   );
  //   console.log(
  //     "quotient % alphabet.length = " + quotient + " % " + alphabet.length
  //   );
  //   remainder = quotient % alphabet.length;
  //   console.log("remainder = " + remainder);
  //   console.log(
  //     "quotient / alphabet.length = " + quotient + " / " + alphabet.length
  //   );
  //   quotient = Math.floor(quotient / alphabet.length);
  //   console.log("quotient = " + quotient);

  //   if (quotient === 1 && remainder === 0) {
  //     res.push(alphabet[alphabet.length - 1]);
  //   } else if (quotient > 1 && remainder === 0) {
  //     res.push(alphabet[0]);
  //   } else {
  //     res.push(alphabet[remainder - 1]);
  //   }

  //   check++;
  // }
  //   console.log(35 % 26);
  //   console.log(500 % 26);
  //   console.log(1200 % 26);

  // while (quotient > 0 || remainder > 0) {
  //   console.log(
  //     "-----------------------------------------------------------------------"
  //   );
  //   if (quotient > alphabet.length) {
  //     console.log(
  //       "quotient % alphabet.length = " + quotient + " % " + alphabet.length
  //     );
  //     remainder = quotient % alphabet.length;
  //     console.log("remainder = " + remainder);
  //     console.log(
  //       "quotient / alphabet.length = " + quotient + " / " + alphabet.length
  //     );
  //     quotient = Math.floor(quotient / alphabet.length);
  //     console.log("quotient = " + quotient);
  //     if (remainder > 0) {
  //       res.push(alphabet[remainder - 1]);
  //     } else if (remainder === 0) {
  //       res.push(alphabet[alphabet.length - 1]);
  //     }
  //   } else if (quotient <= alphabet.length) {
  //     console.log("less");
  //     console.log("quotient = " + quotient);
  //     res.push(alphabet[quotient - 1]);
  //     break;
  //   }
  // }

  while (quotient >= 0 || remainder >= 0) {
    console.log(
      "-----------------------------------------------------------------------"
    );
    if (quotient > alphabet.length) {
      console.log(
        "quotient % alphabet.length = " + quotient + " % " + alphabet.length
      );
      remainder = quotient % alphabet.length;
      console.log("remainder = " + remainder);
      console.log(
        "quotient / alphabet.length = " + quotient + " / " + alphabet.length
      );
      quotient = Math.floor(quotient / alphabet.length);
      console.log("quotient = " + quotient);

      console.log("Letter is = " + alphabet[remainder]);
      res.push(alphabet[remainder]);
    } else if (quotient <= alphabet.length) {
      console.log("less");
      console.log("quotient = " + quotient);
      res.push(alphabet[quotient - 1]);
      console.log("Letter is = " + alphabet[quotient - 1]);
      break;
    }
  }

  console.log(res);
  res.reverse();
  return res.join("");
};

*/

var convertToTitle = function (columnNumber) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let res = [];

  if (columnNumber <= alphabet.length) {
    console.log("small");
    return alphabet[columnNumber - 1];
  }

  let quotient = columnNumber - 1;
  let remainder = 1;

  while (quotient >= 0 || remainder >= 0) {
    console.log(
      "-----------------------------------------------------------------------"
    );
    if (quotient > alphabet.length) {
      // console.log(
      //   "quotient % alphabet.length = " + quotient + " % " + alphabet.length
      // );
      remainder = quotient % alphabet.length;
      // console.log("remainder = " + remainder);
      // console.log(
      //   "quotient / alphabet.length = " + quotient + " / " + alphabet.length
      // );
      quotient = Math.floor(quotient / alphabet.length);
      // console.log("quotient = " + quotient);

      // console.log("Letter is = " + alphabet[remainder]);
      res.push(alphabet[remainder]);
    } else if (quotient <= alphabet.length) {
      // console.log("less");
      // console.log("quotient = " + quotient);
      res.push(alphabet[quotient - 1]);
      // console.log("Letter is = " + alphabet[quotient - 1]);
      break;
    }
  }

  console.log(res);
  res.reverse();
  return res.join("");
};

// console.log(convertToTitle(1));
// console.log(convertToTitle(3));
// console.log(convertToTitle(25));
// console.log(convertToTitle(26));
// console.log(convertToTitle(27));
// console.log(convertToTitle(28));
// console.log(convertToTitle(51));
// console.log(convertToTitle(52)); //az
// console.log(convertToTitle(53)); //ba
// console.log(convertToTitle(54)); //bB
// console.log(convertToTitle(55)); //bc
// console.log(convertToTitle(78)); //bz
// console.log(convertToTitle(104)); //cz
// console.log(convertToTitle(105)); //da
// console.log(convertToTitle(676)); //yz
// console.log(convertToTitle(677)); //za
// console.log(convertToTitle(701));

//console.log(convertToTitle(2147483647)); //FXSHRXW
//console.log(convertToTitle(500000));

// console.log("---megacheck----------megacheck------------megacheck--------");
// console.log(1 % 26);
// console.log(2 % 26);
// console.log(30 % 26);
