function count(n, m, h) {
    var sum = n;
    var lastCount = n;

    for (let hour = 2; hour <= h; hour++) {
        lastCount += m;
        sum += lastCount;
    }

    return sum;
}

console.log(count(5, 2, 3));
console.log(count(7, 1, 2));
console.log(count(10, -1, 1));
console.log(count(8, -2, 3));
console.log(count(10, -2, 3));