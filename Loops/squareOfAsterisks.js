function f(n) {
    let result = "";

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            result += '*'

            if (col != n - 1) {
                result += ' ';
            }
        }

        if (row != n - 1) result += '\n';
    }
    
    return result;
}

console.log(f(2));
console.log(f(3));