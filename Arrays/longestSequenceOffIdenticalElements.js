function f(arr) {
    let maxLength = 1;
    let maxIndex = 0;
    let currentLength = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++;
        } else {
            if (currentLength >= maxLength) {
                maxLength = currentLength;
                maxIndex = i - currentLength;
            }
            currentLength = 1;
        }
    }
    
    if (currentLength >= maxLength) {
        maxLength = currentLength;
        maxIndex = arr.length - currentLength;
    }
    
    return arr.slice(maxIndex, maxIndex + maxLength);
}


console.log(f([2, 2, 2, 3, 4, 4, 2, 2, 2, 1, 2, 2, 2]));
console.log(f([1, 1, 1, 2, 3, 1, 3, 3, 1, 1, 1, 1, 1]));
console.log(f([1, 1, 2, 3, 4, 5, 6, 2, 2, 1, 1]));
console.log(f([4, 4, 4, 4, 4, 4, 4, 4]));
console.log(f([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1]));
