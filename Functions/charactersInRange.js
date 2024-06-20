function findCharacters(el1, el2) {
    let result = "";
    let start = 0;
    let end = 0;

    if (el1.charCodeAt(0) > el2.charCodeAt(0)) {
        start = el2.charCodeAt(0);
        end = el1.charCodeAt(0);
    }
    else {
        start = el1.charCodeAt(0);
        end = el2.charCodeAt(0);
    }

    for (let i = start + 1; i < end; i++) {
        let char = String.fromCharCode(i);
        result += char + " ";
    }

    return result.trim();
}

console.log(findCharacters("a", "d"));
console.log(findCharacters("#", ":"));
console.log(findCharacters("C", "#"));