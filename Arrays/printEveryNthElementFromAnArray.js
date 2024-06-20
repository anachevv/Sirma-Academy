function f(arr, n) {
    let result = "";

    for (let i = 0; i < arr.length; i += n) {
        result += arr[i] + ' ';
    }

    return result;
}

console.log(f(['5', '15', '31', '14', '20'], 2));
console.log(f(['dsa', 'asd', 'demo', 'test'], 2));
console.log(f(['1', '2', '3', '4', '5'], 6));
