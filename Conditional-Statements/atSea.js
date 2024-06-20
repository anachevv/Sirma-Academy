function f(days, roomType, assessment) {
    let nights = days - 1;
    
    let pricePerNight;
    if (roomType === "single room") {
        pricePerNight = 25.00;
    } else if (roomType === "apartment") {
        pricePerNight = 50.00;
    } else if (roomType === "president apartment") {
        pricePerNight = 100.00;
    } else {
        throw new Error("Invalid room type");
    }
    
    let basePrice = nights * pricePerNight;
    
    let discount = 0;
    if (roomType === "apartment") {
        if (nights > 15) {
            discount = 0.50;
        } else if (nights >= 10) {
            discount = 0.35;
        } else if (nights > 0) {
            discount = 0.30;
        }
    } else if (roomType === "president apartment") {
        if (nights > 15) {
            discount = 0.20;
        } else if (nights >= 10) {
            discount = 0.15;
        } else if (nights > 0) {
            discount = 0.10;
        }
    }
    
    let discountedPrice = basePrice * (1 - discount);
    
    let finalPrice;
    if (assessment === "positive") {
        finalPrice = discountedPrice * 1.25;
    } else if (assessment === "negative") {
        finalPrice = discountedPrice * 0.90;
    } else {
        throw new Error("Invalid assessment");
    }
    
    console.log(finalPrice.toFixed(2));
}

f(11, "apartment", "positive");
f(30, "president apartment", "negative");
f(12, "single room", "positive");
f(2, "apartment", "positive");
