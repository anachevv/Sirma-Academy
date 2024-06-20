function printArrowPattern(n) {
    // Print increasing rows of asterisks
    for (let i = 1; i <= n; i++) {
        let row = '*';
        for (let j = 1; j < i; j++) {
            row += ' *';
        }
        console.log(row);
    }

    // Print remaining rows
    for (let i = 0; i < n; i++) {
        let row = '*'.repeat(n);
        console.log(row);
    }
}

printArrowPattern(7);
