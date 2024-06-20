function f(latitude, hemisphere) {
    latitude = Math.abs(latitude);
    
    if (latitude === 0) {
        return "Equator";
    } else if (latitude > 0 && latitude <= 23.5) {
        return "Tropic Zone";
    } else if (latitude > 23.5 && latitude <= 66.5) {
        return "Temperate Zone";
    } else if (latitude > 66.5) {
        return "Arctic Zone";
    }
}

console.log(f(70, "N"));

console.log(f(45, "S"));

console.log(f(10, "N"));

console.log(f(0, "N"));

console.log(f(-85, "S"));