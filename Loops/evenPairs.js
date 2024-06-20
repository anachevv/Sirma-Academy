function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function f(initialFirstPair, initialSecondPair, diffFirstPair, diffSecondPair) {
    const finalFirstPair = initialFirstPair + diffFirstPair;
    const finalSecondPair = initialSecondPair + diffSecondPair;

    for (let i = initialFirstPair; i <= finalFirstPair; i++) {
        for (let j = initialSecondPair; j <= finalSecondPair; j++) {
            if (isPrime(i) && isPrime(j)) {
                console.log(`${i}${j}`);
            }
        }
    }
}

// Test cases
f(10, 20, 5, 5);
f(10, 30, 9, 6);
