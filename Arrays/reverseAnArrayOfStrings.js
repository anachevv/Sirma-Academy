function f(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }

    return arr.join(' ');
}

console.log(f(['a', 'b', 'c', 'd', 'e']));
