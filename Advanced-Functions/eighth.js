const stringManipulator = {
    value: '',
    setValue: function (str) {
        this.str = str;
        return this;
    },
    toUpperCase: function () {
        this.str = this.str.toUpperCase();
        return this;
    },
    toLowerCase: function () {
        this.str = this.str.toLowerCase();
        return this;
    },
    print: function () {
        console.log(this.str);
        return this;
    }
}

stringManipulator.setValue('Hello')
  .toUpperCase()
  .print()
  .toLowerCase()
  .print();

// HELLO
//  hello
