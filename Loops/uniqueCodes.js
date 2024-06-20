function f(firstLimit, secondLimit, thirdLimit) {
    const primes = [2, 3, 5, 7];
    for (let i = 2; i <= firstLimit; i += 2) {
        for (let j = 0; j < primes.length; j++) {
            if (primes[j] <= secondLimit) {
                for (let k = 2; k <= thirdLimit; k += 2) {
                    console.log(`${i} ${primes[j]} ${k}`);
                }
            }
        }
    }
}

f(3, 5, 5);
f(6, 2, 6);
