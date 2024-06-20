function f(figure, ...dimensions) {
    let area = 0;

    switch (figure) {
        case "square":
            area = dimensions[0] * dimensions[0];
            break;
        case "rectangle":
            area = dimensions[0] * dimensions[1];
            break;
        case "circle":
            area = dimensions[0] * dimensions[0] * Math.PI;
            break;
        case "triangle":
            area = (dimensions[0] * dimensions[1]) / 2;
            break;
        default:
            break
    }

    return area.toFixed(2);
}

console.log(f("square", 5));
console.log(f("rectangle", 10, 3.5));
console.log(f("triangle", 4.5, 20));
console.log(f("circle", 10));