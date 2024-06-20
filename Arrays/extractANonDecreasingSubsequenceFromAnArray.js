function f(arr) {
    let newArr = [];
    let maxNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxNumber) {
            if (i == 0) {
                newArr.push(arr[i]);
                continue;
            }
            maxNumber = arr[i];
            newArr.push(arr[i]);
        }
    }

    return newArr.join(' ');
}

console.log(f([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(f([1, 2, 3, 4]));
console.log(f([20, 3, 2, 15, 6, 1]));
