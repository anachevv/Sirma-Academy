function f(n, l) {
    const passwords = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 0; k < l; k++) {
                for (let m = 0; m < l; m++) {
                    for (let o = i + 1; o <= n; o++) {
                        passwords.push(`${i}${j}${String.fromCharCode(97 + k)}${String.fromCharCode(97 + m)}${o}`);
                    }
                }
            }
        }
    }
    return passwords.join('\n');
}

console.log(f(2, 4));
