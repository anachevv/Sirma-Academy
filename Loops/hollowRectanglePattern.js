function f(n, m) {
    let result = "";

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (row == 0 || row == n - 1) {
                result += "*".repeat(m);
                break;
            }

            else {
                if (col == 0 || col == m - 1) {
                    result += "*";
                }
                else {
                    result += " ";
                }
            }
        }
        
        result += "\n";
    }

    return result.trim();
}

console.log(f(4, 6));
console.log(f(2, 2));
console.log(f(3, 4));
