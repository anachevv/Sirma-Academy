function f(number) {
    return (number >= -100 && number <= 100 && number !== 0) ? "Yes" : "No";
}

console.log(
    f(-100)
);

console.log(
    f(0)
);

console.log(
    f(101)
);

console.log(
    f(-101)
);