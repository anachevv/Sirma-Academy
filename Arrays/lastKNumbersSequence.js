function f(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        if (i < k) {
            for (let j = 0; j <= i; j++) {
                sum += sequence[j];
            }
        } else {
            for (let j = i - k + 1; j <= i; j++) {
                sum += sequence[j];
            }
        }
        sequence.push(sum);
    }

    return sequence.join(' ');
}

console.log(f(6, 3));
console.log(f(8, 2));
