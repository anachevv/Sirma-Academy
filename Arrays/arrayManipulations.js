function f(input) {
    let array = input.shift().split(' ').map(Number);

    for (let command of input) {
        let [action, ...args] = command.split(' ');
        
        switch(action) {
            case 'Add':
                array.push(Number(args[0]));
                break;
            case 'Remove':
                array = array.filter(num => num !== Number(args[0]));
                break;
            case 'RemoveAt':
                array.splice(Number(args[0]), 1);
                break;
            case 'Insert':
                array.splice(Number(args[1]), 0, Number(args[0]));
                break;
        }
    }
    
   return array.join(' ');
}

console.log(f(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]));
