function f(text) {
    const vowels = {a: 1, e: 2, i: 3, o: 4, u: 5};
    let sum = 0;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] in vowels) {
            sum += vowels[text[i]];
        }
    }
    
    return sum;
}

console.log(f('hello'));
console.log(f('hi'));
console.log(f('bye'));
console.log(f('zzzz'));