function convert(text) {
    const obj = JSON.parse(text);
    let result = "";

    Object.entries(obj).forEach(([key, value]) => {
        result += `${key}: ${value}\n`;
    })

    return result.trim();
}

console.log(convert('{"name": "Ivan", "age": 40, "town": "Sofia"}'));
console.log(convert('{"firstName": "Ivan", "lastName": "Ivanov"}'));