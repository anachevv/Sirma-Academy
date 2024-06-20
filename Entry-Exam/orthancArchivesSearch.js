function search(arr, s) {
    if (!arr.includes(s)) {
        return "Record not found";
    }

    var firstOccurrence = arr.indexOf(s);
    var lastOccurrence = 0;
    
    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] === s) {
            lastOccurrence = i;
            break;
        }
    }

    return `First Occurrence: ${firstOccurrence}\nLast Occurrence: ${lastOccurrence}`;
}

console.log(
    search(["Frodo", "Sam", "Frodo", "Merry"], "Frodo")
);

console.log(
    search(["Pippin", "Merry", "Sam", "Pippin"], "Pippin")
);

console.log(
    search(["Aragorn", "Legolas", "Gimli"], "Boromir")
);

console.log(
    search(["Gandalf", "Sam", "Aragorn", "Frodo"], "Frodo")
);