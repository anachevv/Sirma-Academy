function convert(firstName, secondName, eyeColor) {
    const obj = {
        name: firstName,
        lastName: secondName,
        eyeColor: eyeColor}

    return JSON.stringify(obj);
}

console.log(convert("Ivan", "Ivanov", "blue"));
console.log(convert("Maria", "Petrova", "brown"));