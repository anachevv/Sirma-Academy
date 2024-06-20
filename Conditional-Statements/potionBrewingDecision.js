function f(ingr1, ingr2) {
    if (ingr1 === "herbs") {
        if (ingr2 === "water") {
            return "Health potion";
        } else if (ingr2 === "oil") {
            return "Stealth potion";
        }

        else {
            return "Minor stamina potion";
        }
    }

    if (ingr1 === "berries") {
        if (ingr2 === "sugar") {
            return "Speed potion";
        }
        
        else {
            return "Minor energy potion";
        }
    }

    return "No potion";
}

console.log(
    f("herbs", "water")
);

console.log(
    f("herbs", "oil")
);

console.log(
    f("herbs", "banana")
);

console.log(
    f("berries", "sugar")
);

console.log(
    f("berries", "banana")
);

console.log(
    f("herbs", "sugar")
);

console.log(
    f("sugar", "salt")
);