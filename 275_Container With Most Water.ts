const maxArea = (arr: number[]): number => {
    let max = 0;
    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 !== p2) {
        const length = p2 - p1;
        const volume = Math.min(arr[p1], arr[p2]) * length;
        if (volume > max) {
            max = volume;
        }

        if (arr[p1] > arr[p2]) {
            p2--;
        } else {
            p1++;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
