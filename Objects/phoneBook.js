function checkInfo(arr) {
    let phoneBook = {};
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(" ");
        let name = line[0];
        let phone = line.slice(1, line.length).join(' ');
        phoneBook[name] = phone;
    }

    Object.entries(phoneBook).forEach(([name, phone]) => {
        result += `${name} -> ${phone}\n`;
    })

    return result.trim();
}

console.log(checkInfo(
    ["Peter 0888 657", "Bob 0899 657 212", "Peter 123123"])
);

console.log(checkInfo(
    ["Maria 123", "Samantha 456", "Nicole 789"])
);