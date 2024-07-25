function multiply(x) {
    return (y) => {
        return (z) => {
            return x * y * z;
        }
    }
}

console.log(multiply(2)(3)(4)); // Output: 24