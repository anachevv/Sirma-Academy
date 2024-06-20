class Company {
    constructor(name) {
        this.name = name;
    }
}

class Model {
    constructor(name, producedCars) {
        this.name = name;
        this.producedCars = producedCars;
    }
}

function displayCars(arr) {
    var companies = {}
    for (let i = 0; i < arr.length; i++) {
        [companyName, modelName, producedCars] = arr[i].split(' | ');
        let model = new Model(modelName, parseInt(producedCars));

        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }

        let existingModel = companies[companyName].find(m => m.name === modelName);

        if (existingModel) {
            existingModel.producedCars += parseInt(producedCars);
        } else {
            companies[companyName].push(model);
        }
    }

    for (const company in companies) {
        console.log(company);
        for (const model of companies[company]) {
            console.log(`###${model.name} -> ${model.producedCars}`)
        }
    }
}

displayCars(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']

);