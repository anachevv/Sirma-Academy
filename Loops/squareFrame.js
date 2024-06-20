function f(n) {
    let firstRow = '+ ';
    for (let i = 0; i < n - 2; i++) {
        firstRow += '- ';
    }
    firstRow += '+';
    console.log(firstRow);

    for (let i = 0; i < n - 2; i++) {
        let middleRow = '| ';
        for (let j = 0; j < n - 2; j++) {
            middleRow += '- ';
        }
        middleRow += '|';
        console.log(middleRow);
    }

    if (n > 1) {
        let lastRow = '+ ';
        for (let i = 0; i < n - 2; i++) {
            lastRow += '- ';
        }
        lastRow += '+';
        console.log(lastRow);
    }
}

f(3);
f(4);
f(5);
f(6);
