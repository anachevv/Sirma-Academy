function f(oneLvCoins, twoLvCoins, fiveLvNotes, targetSum) {
    for (let count1 = 0; count1 <= oneLvCoins; count1++) {
        for (let count2 = 0; count2 <= twoLvCoins; count2++) {
            for (let count5 = 0; count5 <= fiveLvNotes; count5++) {
                let sum = count1 * 1 + count2 * 2 + count5 * 5;
                if (sum === targetSum) {
                    console.log(`${count1} * 1 lv. + ${count2} * 2 lv. + ${count5} * 5 lv. = ${targetSum} lv.`);
                }
            }
        }
    }
}

f(3, 2, 3, 10);
f(5, 3, 1, 7);
