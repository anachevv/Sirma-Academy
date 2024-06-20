function f(change) {
    let count = 0;
    change = change.toString();
    let levas = parseInt(change.split('.')[0]);
    let coins = parseInt(change.split('.')[1]);
    
    while (levas > 0) {
        if (levas >= 100) {
            count += Math.floor(levas / 100);
            levas %= 100;
        }
        if (levas >= 50) {
            count += Math.floor(levas / 50);
            levas %= 50;
        }
        if (levas >= 20) {
            count += Math.floor(levas / 20);
            levas %= 20;
        }
        if (levas >= 10) {
            count += Math.floor(levas / 10);
            levas %= 10;
        }
        if (levas >= 5) {
            count += Math.floor(levas / 5);
            levas %= 5;
        }
        if (levas >= 2) {
            count += Math.floor(levas / 2);
            levas %= 2;
        }
        if (levas >= 1) {
            count += Math.floor(levas / 1);
            levas %= 1;
        }
    }

    while (coins > 0) {
        if (coins >= 50) {
            count += Math.floor(coins / 50);
            coins %= 50;
        }
        if (coins >= 20) {
            count += Math.floor(coins / 20);
            coins %= 20;
        }
        if (coins >= 10) {
            count += Math.floor(coins / 10);
            coins %= 10;
        }
        if (coins >= 5) {
            count += Math.floor(coins / 5);
            coins %= 5;
        }
        if (coins >= 2) {
            count += Math.floor(coins / 2);
            coins %= 2;
        }
        if (coins >= 1) {
            count += Math.floor(coins / 1);
            coins %= 1;
        }
    }

    return count;
}

console.log(f(1.23));
console.log(f(2));
console.log(f(0.56));
console.log(f(2.73));
