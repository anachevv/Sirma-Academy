function f(vegetable, day, quantity) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const regularPrices = {tomato: 2.50, onion: 1.20, lettuce: 0.85, cucumber: 1.45, pepper: 5.50}

    if (!(vegetable in regularPrices) || !(days.includes(day))) {
        return "error";
    }

    switch (day) {
        case "Saturday":
        case "Sunday":
            regularPrices.tomato = 2.80;
            regularPrices.onion = 1.30;
            regularPrices.lettuce = 0.85;
            regularPrices.cucumber = 1.75;
            regularPrices.pepper = 3.5;
            break;
        default:
            break;
    }

    let price = regularPrices[vegetable] * quantity;

    return price.toFixed(2);
}


console.log(f("tomato", "Tuesday", 2));
console.log(f("onion", "Sunday", 3));
console.log(f("pepper", "Monday", 10));
console.log(f("banana", "Friday", 5));