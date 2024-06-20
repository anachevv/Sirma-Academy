function form(numArr, commandsArr) {
    for (let command of commandsArr) {
        if (command === "center") {
            if (numArr.length % 2 != 0) {
                let median = numArr[Math.ceil(numArr.length / 2 - 1)];
                console.log(median);
            }
            else {
                let median1 = numArr[numArr.length / 2 - 1];
                let median2 = numArr[numArr.length / 2];
                console.log(median1, median2);
            }
        }

        let line = command.split(' ');
       
        if (command.startsWith("destroy")) {
            let idx = parseInt(line[1]);

            if (idx >= 0 && idx < numArr.length) {
                numArr.splice(idx, 1);
                console.log(numArr.join(' '));

            }
        }
        else if (command.startsWith("swap")) {
            let idx1 = parseInt(line[1]);
            let idx2 = parseInt(line[2]);
            
            if ((idx1 !== idx2) && (idx1 >= 0 && idx1 < numArr.length) && (idx2 >= 0 && idx2 < numArr.length)) {
                let temp = numArr[idx1];
                numArr[idx1] = numArr[idx2];
                numArr[idx2] = temp;
                console.log(numArr.join(' '));
            }
        }

        else if (command.startsWith("add")) {
            let num = parseInt(line[1]);
            numArr.push(num);
            console.log(numArr.join(' '));
        }
        
        else if (command.startsWith('insert')) {
            num = parseInt(line[1]);
            idx = parseInt(line[2]);

            if (idx >= 0 && idx <= numArr.length) {
                numArr.splice(idx, 0, num);
                console.log(numArr.join(' ')); 
            }
        }
    }
}

form(
    [1, 2, 3, 4, 5],
["destroy 3",
"swap 0 1",
"add 6",
"center"]
);


form(
    [1, 2, 3, 4, 5],
    ["add 6",
        "swap 0 5",
        "swap 1 4",
        "swap 2 3",
        "swap 2 100",
        "swap 2 2",
        "center"]
);

form(
    [1, 2],
["insert 3 2",
"center",
"destroy 1",
"destroy 2",
"center"]
);

form(
    [1, 2, 3, 4, 5],
    ["center",
    'swap -1 3',
    'add 100',
    'insert 66, 5',
    'destroy 5',
    'center']
);