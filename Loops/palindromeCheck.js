function f(str) {
    let palindrome = "";

    for (let i = 0; i < str.length; i++) {
        palindrome += str[str.length - 1 - i];
    }

    return str === palindrome;
}

console.log(f("radar"));
console.log(f("hello"));
console.log(f("racecar"));
console.log(f("java"));
console.log(f("madam"));
