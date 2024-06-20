function f(arr, count) {
    let newArr = [];
    if (arr.length >= count) {
        newArr = arr.slice(arr.length - count).concat(arr.slice(0, count));
    }
    else {
        newArr = arr.slice(1).concat(arr[0]);
    }

    return newArr.join(' ');
}

console.log(f(['1', '2', '3', '4'], 2));
console.log(f(['Banana', 'Orange', 'Coconut', 'Apple'], 15));
