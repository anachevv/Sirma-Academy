function f(money, students, priceOfLightsaber, priceOfRobe, priceOfBelt) {
    let totalLightsabers = priceOfLightsaber * Math.ceil(students * 1.1);
    let totalRobes = priceOfRobe * students;
    let totalBelts = priceOfBelt * (students - (parseInt(students / 6)));
    let total = totalLightsabers + totalRobes + totalBelts;

    if (total <= money) {
        return `The money is enough - it would cost ${total.toFixed(2)}lv.`
    }
    
    return `George Lucas will need ${(total - money).toFixed(2)}lv more.`
}

console.log(f(100, 2, 1.0, 2.0, 3.0));
console.log(f(100, 42, 12.0, 4.0, 3.0));