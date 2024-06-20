function f(moneyNeeded, powders, lipsticks, spirals, shadows, concealers) {
    prices = {
        powder: 2.60, lipstick: 3, spiral: 4.10,
        shadows: 8.20, concealer: 2
    };

    totalMoney = prices.powder * powders + prices.lipstick * lipsticks +
        prices.spiral * spirals + prices.shadows * shadows +
        prices.concealer * concealers;

    if (powders + lipsticks + spirals + shadows + concealers >= 50) {
        totalMoney *= 0.75;
    }

    totalMoney *= 0.9;

    return totalMoney >= moneyNeeded ? `Yes! ${(totalMoney - moneyNeeded).toFixed(2)} BGN left.` :
        `Not enough money! ${(moneyNeeded - totalMoney).toFixed(2)} BGN needed.`;
}

console.log(
    f(40.8, 20, 25, 30, 50, 10)
);

console.log(
    f(320, 8, 2, 5, 5, 1)
);