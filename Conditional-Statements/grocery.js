function f(product, city, quantity) {
    const prices = {
        Sofia: { tea: 0.50, water: 0.80, juice: 1.20, sweets: 1.45, chips: 1.60 },
        Plovdiv: { tea: 0.40, water: 0.70, juice: 1.15, sweets: 1.30, chips: 1.50 },
        Varna: { tea: 0.45, water: 0.70, juice: 1.10, sweets: 1.35, chips: 1.55 }
    };
    
    if (!prices[city]) {
        return "Invalid city!";
    }
    
    if (!prices[city][product]) {
        return "Invalid product!";
    }

    if (quantity < 0) {
        return "Invalid quantity!";
    }

    const price = prices[city][product] * quantity;

    return price.toFixed(2);
}


console.log(
    f("tea", "Varna", 2)
);
console.log(
    f("chips", "Plovdiv", 1)
);
console.log(
    f("juice", "Sofia", 6)
);
console.log(
    f("sweets", "Plovdiv", 1)
);