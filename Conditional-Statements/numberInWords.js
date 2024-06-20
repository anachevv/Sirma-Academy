function f(number) {
    const numbers = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};

    return (number in numbers) ? numbers[number] : number < 0 ? "too small" : "too big";
}

console.log(f(0));
console.log(f(10));
console.log(f(-1));
