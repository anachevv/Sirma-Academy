function f(start, end, num) {
    let result = "";
    let combos = 0;
    let flag = false;

    label:
    for (let first = start; first <= end; first++) {
        for (let second = start; second <= end; second++) {
            combos++;
            if (first + second == num) {
                flag = true;
                result += `Combination ${combos} - (${first} + ${second} = ${num})\n`;
                break label;
            }
        }
    }

    if (!flag) {
        result = `${combos} combinations - neither equals ${num}`;
    }

    return result.trim();
}

console.log(f(1, 10, 5));

console.log(f(23, 24, 20));

console.log(f(1, 2, 3));