function recursive(fact, n) {
    if (fact == 0 || fact == 1) {
        return (1 / n).toFixed(n);
    }
    return (fact * recursive(fact - 1, n)).toFixed(n);
}

console.log(recursive(5, 2));
console.log(recursive(6, 2));