function f(n) {
    let row = ' '.repeat(n) + '|';
    console.log(row);

    for (let i = 1; i <= n; i++) {
        row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        row += ' | ';
        row += '*'.repeat(2 * i - 1);
        console.log(row);
    }
}

f(1);
f(2);
