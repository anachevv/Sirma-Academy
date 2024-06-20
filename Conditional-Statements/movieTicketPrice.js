function f(age) {
    if (age >= 0 && age <= 12) {
        return "$5";
    } else if (age >= 13 && age <= 19) {
        return "$8";
    }

    return "$10";
}

console.log(
    f(10)
);

console.log(
    f(16)
);

console.log(
    f(25)
);

console.log(
    f(13)
);