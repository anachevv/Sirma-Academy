function f(products) {
    products.sort();

    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}.${products[i]}`);
    }
}

const products = ["Potatoes", "Tomatoes", "Onions", "Apples"];
f(products);
