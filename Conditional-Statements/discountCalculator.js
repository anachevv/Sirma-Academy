function f(age, membership) {
    if (age < 18) {
        return "10% discount";
    } else if (age >= 18 && age <= 64) {
        if (membership === "Yes") {
            return "20% discount";
        }
        return "10% discount";
    }
    else {
        return "30% discount";
    }
}

console.log(
    f(20, "Yes")
);

console.log(
    f(15, "No")
);

console.log(
    f(70, "No")
);
