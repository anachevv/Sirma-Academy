function f(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i]);
        if (num % 2 == 0) {
            sum += num;
        }
    }

    return sum;
}

console.log(f(['1', '2', '3', '4', '5', '6']));
