function f(num1, num2, operation) {
    let result;

    switch (operation) {
        case "add":
            result =  num1 + num2;
            break;
        case "subtract":
            result =  num1 - num2;
            break;
        case "multiply":
            result =  num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
            break;
    }

    return result.toFixed(2);
}

console.log(f(5, 5, "add"));
console.log(f(10, 12, "subtract"));
console.log(f(9, 3, "divide"));
console.log(f(5, 2, "divide"));
console.log(f(3.1, 0.1, "multiply"));