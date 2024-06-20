function f(time, place, item) {
    if (time === "day") {
        if (place === "forest") {
            if (item === "knife") {
                return "Hunt for food";
            } else if (item === "container") {
                return "Collect berries";
            }
            else {
                return "Explore";
            }
        } else if (place === "desert") {
            if (item === "hat") {
                return "Search for water";
            }
            else {
                return "Find shade";
            }
        }
    } else if (time === "night") {
        if (place === "forest") {
            if (item === "firestarter") {
                return "Make a campfire";
            }
            else {
                return "Climb a tree";
            }
        } else if (place === "desert") {
            if (item === "blanket") {
                return "Sleep";
            }
            else {
                return "Keep moving to stay warm";
            }
        }
    }
}

console.log(
    f("day", "forest", "knife")
);

console.log(
    f("day", "forest", "container")
);

console.log(
    f("night", "forest", "firestarter")
);

console.log(
    f("day", "forest", "bag")
);

console.log(
    f("night", "desert", "blanket")
);

console.log(
    f("day", "desert", "hat")
);

console.log(
    f("night", "desert", "sword")
);

console.log(
    f("night", "forest", "hat")
);