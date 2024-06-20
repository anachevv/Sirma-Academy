function f(speed) {
    let message;

    if (speed < 0) {
        message = "Error!";
    } else if (speed <= 10) {
        message = "slow";
    } else if (speed <= 60) {
        message = "average";
    } else if (speed <= 120) {
        message = "fast";
    } else if (speed <= 160) {
        message = "super-fast";
    } else {
        message = "turbo-fast";
    }

    return message;
}

console.log(f(10));
console.log(f(59));
console.log(f(120));
console.log(f(121));
console.log(f(183));
console.log(f(59.99));
console.log(f(60.001));
