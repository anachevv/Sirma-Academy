function summOddNumbers(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let num = 2 * i + 1;
        sum += num;
        console.log(num);
    }
    console.log(`Sum: ${sum}`);
}


summOddNumbers(5);
summOddNumbers(3);