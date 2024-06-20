function f(hour, minutes) {
    minutes += 15;

    if (minutes >= 60) {
        hour += Math.floor(minutes / 60);
        minutes %= 60;
    }

    if (hour >= 24) {
        hour %= 24;
    }

    let result = `${hour}:${minutes.toString().padStart(2, '0')}`;
    return result;
}

console.log(f(1, 47));
console.log(f(0, 2));
console.log(f(23, 59));
console.log(f(11, 7));
console.log(f(12, 48));
console.log(f(24, 65));