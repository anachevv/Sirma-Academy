class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        return `${this.name}, age ${this.age} says meow`;
    }
}


function f(array) {
    for (i = 0; i < array.length; i++) {
        let [name, age] = array[i].split(' ');
        var cat = new Cat(name, age);
        console.log(cat.meow());
    }
}

f(['Mellon 2', 'Tom 3']);
f(['Branch 1', 'Poppy 3', 'Goldy 2']);