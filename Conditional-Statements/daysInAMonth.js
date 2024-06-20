function f(month) {
    return new Date(2023, month, 0).getDate();
}

console.log(f(1));

console.log(f(2));

console.log(f(4));

console.log(f(7));
