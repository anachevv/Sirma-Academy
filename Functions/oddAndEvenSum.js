function getSum(str) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < str.length; i++) {
        let number = Number(str[i]);
        if (number % 2 === 0) {
            evenSum += Number(str[i]);
        } else {
            oddSum += Number(str[i]);
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(getSum('1000435'));
console.log(getSum('3495892137259234'));