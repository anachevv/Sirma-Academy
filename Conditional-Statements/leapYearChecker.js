function f(year) {
    return (year % 4 == 0 && year % 100!= 0) || year % 400 == 0 ? "It's a leap year!" : "It's not a leap year.";
}

console.log(f(2020));
console.log(f(1900));
console.log(f(2000));
console.log(f(2023));
console.log(f(1600));