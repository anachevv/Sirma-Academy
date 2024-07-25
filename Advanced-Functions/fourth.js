const double = (x) => x * 2;
const square = (x) => x ** 2;

function compose(f, g) {
    return function(x) {
      return g(f(x));
    };
  }

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36
