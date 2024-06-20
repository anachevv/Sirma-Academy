function f(budget, season) {
    let message = "Somewhere in ";
    let typeOfHoliday;
    let price;

    if (budget <= 100) {
        message += "Bulgaria";
        
        if (season === "summer") {
            price = budget * 0.3;
            typeOfHoliday = "Camp";
        }

        else {
            price = budget * 0.7;
            typeOfHoliday = "Hotel";
        }

    } else if (budget <= 1000) {
        message += "Europe";

        if (season === "summer") {
            price = budget * 0.4;
            typeOfHoliday = "Camp";
        }

        else {
            price = budget * 0.8;
            typeOfHoliday = "Hotel";
        }
    }

    else {
        message += "Asia";
        typeOfHoliday = "Hotel";
        price = budget * 0.9;
    }

    message += `\n${typeOfHoliday} - ${price.toFixed(2)}`

    return message;
}

console.log(
    f(50, "summer")
);

console.log(
    f(75, "winter")
);

console.log(
    f(312, "summer")
);

console.log(
    f(678.53, "winter")
);

console.log(
    f(1500, "summer")
);
