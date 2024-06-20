function f(n) {
    let str = n.toString();
    let reversedStr = "";
    let result = "";

    for (let i = str.length - 1; i > -1; i--) {
        reversedStr += str[i];
    }

    for (let i = 0; i < str.length; i++) {
        let char = reversedStr[i];

        if (char == '0') {
            result += 'ZERO';
        }
        else {
            result += String.fromCharCode(parseInt(char) + 33).repeat(parseInt(char));
        }
        result += '\n';
    }

    return result.trim();
}

console.log(f(2049));
console.log(f(9347439));