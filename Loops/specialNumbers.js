function isSpecialNumber(n, num) {
    const digits = num.toString().split('').map(Number);
    for (let digit of digits) {
        if (digit === 0 || n % digit !== 0) {
            return false;
        }
    }
    return true;
}

function f(n) {
    const specialNumbers = [];
    for (let num = 1111; num <= 9999; num++) {
        if (isSpecialNumber(n, num)) {
            specialNumbers.push(num);
        }
    }
    return specialNumbers;
}

console.log(f(3));
