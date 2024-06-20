function f(grade) {
    if (grade >= 0 && grade <= 59) {
        return "F";
    } else if (grade >=60 && grade <= 69) {
        return "D";
    } else if (grade >=70 && grade <= 79) {
        return "C";
    } else if (grade >=80 && grade <= 89) {
        return "B";
    } else if (grade >=90 && grade <= 100) {
        return "A";
    } 
}

console.log(f(95));
console.log(f(82));
console.log(f(76));
console.log(f(65));
console.log(f(45));