function f(num) {
    switch (num) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Error";
    }
}

console.log(f(1));
console.log(f(2));
console.log(f(3));
console.log(f(4));
console.log(f(5));
console.log(f(6));
console.log(f(7));
console.log(f(8));