function partialSum(firstArg) {
    return function(x, y, z) {
        return firstArg + x + y + z;
    }
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
