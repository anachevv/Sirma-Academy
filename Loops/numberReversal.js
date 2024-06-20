function f(n) {
    // return n.toString().split("").reverse().join("");
    let str = n.toString();
    let newStr = "";

    for (let idx = 0; idx < str.length; idx++) {
        newStr += str[str.length - 1 - idx];
    }

    return newStr;
}

console.log(f(123));
console.log(f(9876));
console.log(f(505));
console.log(f(10203));
console.log(f(7));
