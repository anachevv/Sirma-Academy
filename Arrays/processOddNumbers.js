function f(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i > -1; i--) {
        if (i % 2 != 0) {
            newArr.push(arr[i] * 2);
        }
    }

    return newArr.join(' ');
}

console.log(f([10, 15, 20, 25]));
console.log(f([3, 0, 10, 4, 7, 3]));
