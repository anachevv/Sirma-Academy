function f(age) {
    if (age < 13) {
        return "U-rated movies";
    } else if (age >= 13 && age <= 17) {
        return "U and PG-13 rated movies";
    }

    return "All movies";
}

console.log(
    f(10)
);

console.log(
    f(16)
);

console.log(
    f(21)
);