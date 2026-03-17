const threeSum = (arr: number[]): number[][] => {
    const result: number[][] = [];

    const sortedArr = arr.sort((a, b) => a - b);

    let p1 = 0;
    let p2 = arr.length - 1;
    let p3 = arr.length - 2;

    while (p1 !== p3 || p3 !== p2) {
        console.log(`p1: ${p1}, p3: ${p3}, p2: ${p2}`);
        const sum = sortedArr[p1] + sortedArr[p3] + sortedArr[p2];

        if (sum === 0) {
            console.log("case bingo");
            result.push([sortedArr[p1], sortedArr[p3], sortedArr[p2]]);
            // check if p3 can move left
            if (p3 - p1 > 1) {
                console.log("case 1");
                p3--;
            } else {
                //p3 can not move left - it is near p1
                //moving p2 to the left we only make it less, so End
                break;
            }
        } else if (sum > 0) {
            // check if p3 can move left
            if (p3 - p1 > 1) {
                console.log("case 1");
                p3--;
            } else {
                //p3 can not move left - it is near p1
                // let's try to move p2
                if (p2 - p3 > 1) {
                    console.log("case 2");
                    p2--;
                } else {
                    //we can't move nor p2 not p3. They are all near p1. End
                    break;
                }
            }
        } else if (sum < 0) {
            // check if we can move p1 to the right
            if (p3 - p1 > 1) {
                console.log("case 3");
                p1++;
            } else {
                // it means we can not move p1. If we move p2, the right sum will only get less - no point. End
                break;
            }
        }
        console.log("---------------------");
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// [-4, -1, -1, 0, 1, 2];

// [-4, 1, 1, 1, 2, 3];

// [-5, -4, -3, 1, 2, 3, 4];
