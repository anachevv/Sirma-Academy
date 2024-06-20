function f(n) {
    let topFrame = '*'.repeat(2 * n);
    topFrame += ' '.repeat(n);
    topFrame += '*'.repeat(2 * n);
    console.log(topFrame);

    for (let i = 0; i < n - 2; i++) {
        let row = '*';
        row += '/'.repeat(2 * n - 2);
        row += '*';
        if (i === Math.floor((n - 1) / 2) - 1) {
            row += '|'.repeat(n);
        } else {
            row += ' '.repeat(n);
        }
        row += '*';
        row += '/'.repeat(2 * n - 2);
        row += '*';
        console.log(row);
    }

    let bottomFrame = '*'.repeat(2 * n);
    bottomFrame += ' '.repeat(n);
    bottomFrame += '*'.repeat(2 * n);
    console.log(bottomFrame);
}

f(3);
f(4);
f(5);
