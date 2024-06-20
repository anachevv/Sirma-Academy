function printStaircasePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = ' '.repeat(i + 1) + '#'.repeat(i);
        console.log(row);
    }
}

printStaircasePattern(5);
// printStaircasePattern(4);
// printStaircasePattern(2);
