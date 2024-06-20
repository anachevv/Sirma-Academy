function f(arr) {
    return parseInt(arr[0]) + parseInt(arr[arr.length - 1]);
}

console.log(f(['20', '30', '40']));
console.log(f(['10', '17', '22', '33']));
console.log(f(['11', '58', '69']));
