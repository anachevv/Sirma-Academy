function getInfo(obj) {
    let result = "";

    Object.entries(obj).forEach(([key, value]) => {
        result += `${key} -> ${value}\n`;
    })

    return result;
}

console.log(getInfo({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
}));