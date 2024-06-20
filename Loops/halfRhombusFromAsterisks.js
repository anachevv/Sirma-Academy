function f(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        result += row + '\n';
    }

    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        result += row + '\n';
    }

    return result;
}
console.log(f(1));
console.log(f(2));
console.log(f(3));
console.log(f(4));