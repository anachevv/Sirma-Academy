function smallestNumber(num1, num2, num3) {
    let smallest = num1;

    new Array(num1, num2, num3).forEach(num => {
        if (num < smallest) {
            smallest = num;
        }
    })

    return smallest;
}

console.log(smallestNumber(2, 5, 3));
console.log(smallestNumber(600, 342, 123));
console.log(smallestNumber(25, 21, 4));
