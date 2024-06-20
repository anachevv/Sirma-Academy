function f(item1, item2) {
    if (item1 === "sword") {
        if (item2 === "shield") {
            return "Path to the castle";
        }
        return "Path to the forest";
    }
    
    if (item1 === "map") {
        if (item2 === "coins") {
            return "Go to the town";
        }
        return "Camp";
    }

    return "Wander aimlessly";
}

console.log(
    f("sword", "shield")
);

console.log(
    f("map", "coins")
);

console.log(
    f("torch", "flower")
);

console.log(
    f("sword", "pouch")
);

console.log(
    f("map", "compass")
);