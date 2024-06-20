function f(floors, rooms) {
    let result = "";

    for (let row = floors; row > 0; row--) {
        for (let col = 0; col < rooms; col++) {
            if (row == floors) {
                result += `L${row}${col}`;
            }
            else if (row % 2 != 0) {
                result += `A${row}${col}`;
            }
            else {
                result += `O${row}${col}`;
            }

            if (col != rooms - 1) {
                result += " ";
            }
        }

        result += "\n";
    }

    return result.trim();
}

console.log(f(6, 4));
console.log(f(3, 3));
console.log(f(4, 4));