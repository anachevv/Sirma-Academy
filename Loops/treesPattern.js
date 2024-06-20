function f(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= i * 2 - 1; j++) {
            row += '*';
        }
        console.log(row);
    }

    let trunkSpaces = ' '.repeat(n - 1);
    console.log(trunkSpaces + '*');
}

f(6);
f(4);
f(3);