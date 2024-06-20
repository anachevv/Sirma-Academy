function f(n, arr) {
    arr = arr.slice(0, n);
    let newArr = [];

    for (let i = arr.length - 1; i > -1 ; i--) {
        newArr.push(arr[i]);
    }

    return newArr.join(' ');
}

console.log(f(3, [10, 20, 30, 40, 50]));
console.log(f(4, [-1, 20, 99, 5]));
console.log(f(2, [66, 43, 75, 89, 47]));
