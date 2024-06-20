function f(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    return sumEven - sumOdd;
}

console.log(f([1, 2, 3, 4, 5, 6]));
console.log(f([3, 5, 7, 9]));
console.log(f([2, 4, 6, 8, 10]));
