function f(n) {
    let currentNum = 1;
    let rowLength = 1;

    while (currentNum <= n) {
        let row = '';
        for (let i = 0; i < rowLength && currentNum <= n; i++) {
            row += currentNum;
            if (i < rowLength - 1) {
                row += ' ';
            }
            currentNum++;
        }
        console.log(row);
        rowLength++;
    }
}

f(7);
f(10);
f(15);
