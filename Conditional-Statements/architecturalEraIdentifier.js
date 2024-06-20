function f(year, material) {
    if (material === "stone") {
        if (year < 500) {
            return "Ancient";
        } else if (year >= 500 && year <= 1500) {
            return "Medieval";
        }
    } else if (material === "wood") {
        if (year >= 1500 && year <= 1800) {
            return "Colonial";
        }
    } else if (material === "steel") {
        if (year >= 1800 && year <= 1900) {
            return "Industrial";
        }
        else if (year > 1900) {
            return "Modern";
        }
    }
    
    return "Uncertain";
}

console.log(
    f(300, "stone")
);
console.log(
    f(1500, "wood")
);
console.log(
    f(1500, "stone")
);
console.log(
    f(2000, "steel")
);
console.log(
    f(1100, "wood")
);