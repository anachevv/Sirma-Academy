function printLeftArrowPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' '.repeat(n - i) + '*'.repeat(i);
        console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = ' '.repeat(n - i) + '*'.repeat(i);
        console.log(row);
    }
}

printLeftArrowPattern(5);
