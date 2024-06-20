function isPerfectNumber(number) {
    let arr = [];

    if (number <= 0) {
        return "Not a perfect number.";
    }
    
    let sum = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sum += i;
            arr.push(i);
        }
    }

    if (sum === number) {
        return `Perfect number!\n${arr.join(' + ')}`;
    } else {
        return "It’s not so perfect.";
    }
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12364));
