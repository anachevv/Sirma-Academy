function f(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'];

    return days[num - 1] != undefined ? days[num - 1] : "Invalid day!";
}

console.log(f(3));
console.log(f(6));
console.log(f(11));