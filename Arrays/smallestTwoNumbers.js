function f(arr) {
    arr.sort((a, b) => a - b);
    let result = `${arr[0]} ${arr[1]}`;

    return result;
}

console.log(f([30, 15, 50, 5]));
console.log(f([3, 0,10, 4, 7, 3]));
