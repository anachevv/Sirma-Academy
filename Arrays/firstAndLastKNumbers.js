function f(k, arr) {
    let firstK = arr.slice(0, k).join(' ');
    let lastK = arr.slice(-k).join(' ');
    let result = firstK + '\n' + lastK;

    return result;
}

console.log(f(2, [7, 8, 9]));
console.log(f(3, [6, 7, 8, 9]));
