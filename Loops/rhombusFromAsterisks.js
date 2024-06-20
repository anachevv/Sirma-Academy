function f(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }

    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

f(1);
f(2);
f(3);
f(4);
