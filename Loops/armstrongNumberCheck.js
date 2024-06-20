function f(n) {
    let str = n.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i ++) {
        sum += str[i] ** str.length;
    }

    return n === sum;
}

console.log(f(153));
console.log(f(370));
console.log(f(123));
console.log(f(407));
console.log(f(1634));