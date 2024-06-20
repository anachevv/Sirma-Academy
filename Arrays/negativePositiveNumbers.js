function f(arr) {
    let result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return result.join('\n').trim();
}

console.log(f([7, -2, 8, 9]));
console.log(f([3, -2, 0, -1]));
