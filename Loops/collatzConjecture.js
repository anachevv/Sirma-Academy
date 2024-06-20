function f(n) {
    let result = `${n} `;

    while (n > 1) {
        if (n % 2 == 0) {
            n /= 2;
        }
        else {
            n = (n * 3) + 1;
        }

        result += ` ${n}`;
    }
    
    return result;
}

console.log(f(6));
console.log(f(12));
console.log(f(9));
console.log(f(200));
console.log(f(15));