function f(arr) {
    while (arr.length > 1) {
        let condensedArray = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condensedArray.push(arr[i] + arr[i + 1]);
        }
        arr = condensedArray;
    }
    return arr[0];
}

console.log(f([2, 10, 3]));
console.log(f([5, 0, 4, 1, 2]));
console.log(f([1]));
