function f(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return `Arrays are not identical. Found difference at ${i} index`;
        }
        sum += parseInt(arr1[i]);
    }

    return `Arrays are identical. Sum: ${sum}`;
}

console.log(f(['10', '20', '30'], ['10', '20', '30']));
console.log(f(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']));