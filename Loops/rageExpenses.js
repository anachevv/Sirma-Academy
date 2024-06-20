function f(lostGamesCount, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
    let headsetTrashes = 0;
    let mouseTrashes = 0;
    let keyboardTrashes = 0;
    let displayTrashes = 0;

    for (let game = 1; game <= lostGamesCount; game++) {
        if (game % 2 === 0) {
            headsetTrashes++;
        }
        if (game % 3 === 0) {
            mouseTrashes++;
        }
        if (game % 2 === 0 && game % 3 === 0) {
            keyboardTrashes++;
            if (keyboardTrashes % 2 === 0) {
                displayTrashes++;
            }
        }
    }

    const totalExpenses =
        (headsetTrashes * headsetPrice) +
        (mouseTrashes * mousePrice) +
        (keyboardTrashes * keyboardPrice) +
        (displayTrashes * displayPrice);

    return `Rage expenses: ${totalExpenses.toFixed(2)} lv.`;
}

// Test cases
console.log(f(7, 2, 3, 4, 5));
console.log(f(23, 12.50, 21.50, 40, 200));