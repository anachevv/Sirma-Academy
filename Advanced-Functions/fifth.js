function createPrivateCounter() {
    let count = 0;

    return {
        getCount: function () {
            return count;
        },
        increment: function () {
            count += 1;
        }
    };
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
