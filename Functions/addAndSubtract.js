function operate(num1, num2, num3) {
    return subtract(num1, num2, num3);
}

function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2, num3) {
    return sum(num1, num2) - num3;
}

console.log(operate(23, 6, 10));
console.log(operate(1, 17, 30));
console.log(operate(42, 58, 100));