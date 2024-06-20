function f(n) {
    let sum = 0;

    for (let i = 1; i < n + 1; i++) {
        sum += 2 * i;
    }
    
    return sum;
}

console.log(f(3));
console.log(f(5));
console.log(f(1));
console.log(f(0));
console.log(f(10));