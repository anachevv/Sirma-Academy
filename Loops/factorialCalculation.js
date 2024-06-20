function f(n) {

    if (n === 0) {
        return 1;
    }

    let sum = n;

    for (let i = n - 1; i > 0; i--) {
        sum *= i;
    }

    return sum;
}

console.log(f(5));
console.log(f(3));
console.log(f(0));
console.log(f(1));
console.log(f(10));
