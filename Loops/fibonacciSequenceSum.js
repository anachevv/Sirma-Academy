function f(n) {
    
    if (n <= 0) {
        return 0;
    }

    let sum = 0;
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i ++) {
        sum += a;
        let nextFib = a + b;
        a = b;
        b = nextFib;
    }

    return sum + a;
}

console.log(f(3));
console.log(f(5));
console.log(f(1));
console.log(f(0));
console.log(f(10));
