function f(age, gender) {
    if (gender === "m") {
        return age < 16 ? "Master" : "Mr.";
    }
    else {
        return age < 16 ? "Miss" : "Ms.";
    }
}

console.log(f(14, 'f'));
console.log(f(17, 'm'));
console.log(f(10, 'm'));
console.log(f(32, 'f'));