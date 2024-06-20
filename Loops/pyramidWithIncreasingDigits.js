function printIncreasingDigitPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        row += ' '.repeat(n - i);
        for (let j = 1; j <= i; j++) {
            row += j;
            if (j < i) {
                row += ' ';
            }
        }
        for (let k = i - 1; k >= 1; k--) {
            row += ' ' + k;
        }
        console.log(row);
    }
}

printIncreasingDigitPyramid(5);
