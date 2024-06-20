function f(n) {
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        let roofRow = ' '.repeat(Math.floor(n / 2) - (i - 1)) + '*'.repeat(2 * i - 1);
        console.log(roofRow);
    }

    // Body
    for (let i = 0; i < Math.floor(n / 2); i++) {
        console.log('* ' + '*'.repeat(n - 2) + ' *');
    }
}

f(7);
f(4);
f(3);
