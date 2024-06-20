class List {
    constructor() {
        this.items = [];
    }

    add(element) {
        this.items.push(element);
    }

    remove(index) {
        this.items.splice(index, 1);
    }

    get(index) {
        return this.items[index];
    }

    size() {
        return this.items.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
