function f(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        if (i === 0 || i === n - 1) {
            row = '#'.repeat(2 * n);
        } else {
            row = '#' + ' '.repeat(n - 2) + '#';
        }
        console.log(row);
    }

    for (let i = n - 2; i >= 0; i--) {
        let row = '';
        if (i === 0 || i === n - 1) {
            row = '#'.repeat(2 * n);
        } else {
            row = '#' + ' '.repeat(n - 2) + '#';
        }
        console.log(row);
    }
}

f(5);
