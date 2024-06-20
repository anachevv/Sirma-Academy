function f(weight, size) {
    let fee = 0;
    let isOverWeight = false;
    let isOverSized = false;

    if (weight > 50) {
        isOverWeight = true;
        fee += 100;
    }
    
    if (size > 158) {
        isOverSized = true;

        if ((size - 158) >= 1 && (size - 158) <= 20) {
            fee += 50;
        } else if ((size - 158) >= 21 && (size - 158) <= 50) {
            fee += 100;
        } else if ((size - 158) > 50) {
            fee += 200;
        }
    }

    if (isOverWeight && isOverSized) {
        fee += 50;
    }

    return `$${fee}`;
}

console.log(f(52, 160));
console.log(f(48, 180));
console.log(f(55, 190));