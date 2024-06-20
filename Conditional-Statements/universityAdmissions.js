function f(score, extras) {
    if (score < 80) {
        return "Not admitted";
    } else if (score >= 80 && score <= 89 && extras >= 2) {
        return "Admitted";
    }
    if (score >= 90) {
        return "Admitted";
    }
    return "Not admitted";
}

console.log(
    f(85, 3)
);

console.log(
    f(88, 1)
);

console.log(
    f(91, 0)
);

console.log(
    f(75, 12)
);