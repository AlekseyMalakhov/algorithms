const threeSum = (arr: number[]): number[][] => {
    const result: number[][] = [];

    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const diff = 0 - num;
        obj[num];
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// [-4, -1, -1, 0, 1, 2];

// [-4, 1, 1, 1, 2, 3];

// [-5, -4, -3, 1, 2, 3, 4];
