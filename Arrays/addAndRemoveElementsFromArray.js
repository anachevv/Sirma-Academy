function f(commands) {
    let arr = [];
    let num = 0;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == "remove") {
            if (arr == 0) {
                return "Empty";
            }
            arr.pop();
        }
        else if (commands[i] == "add") {
            num++;
            arr.push(num);
        }
    }

    return arr.join(" ");
}

console.log(f(["add", "add", "add", "add"]));
console.log(f(["add", "add", "remove", "add", "add"]));
console.log(f(["remove", "remove", "remove"]));
