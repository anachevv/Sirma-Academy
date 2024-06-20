function sumDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function hasEqualSumOfDigits(num) {
    let strNum = num.toString();
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < strNum.length; i++) {
        if ((i + 1) % 2 === 0) {
            sumEven += parseInt(strNum[i]);
        } else {
            sumOdd += parseInt(strNum[i]);
        }
    }

    return sumEven === sumOdd;
}

function findNumbersWithEqualSum(start, end) {
    let found = false;

    for (let i = start; i <= end; i++) {
        if (hasEqualSumOfDigits(i)) {
            console.log(i);
            found = true;
        }
    }

    if (!found) {
        console.log("None");
    }
}

findNumbersWithEqualSum(100000, 100050);
findNumbersWithEqualSum(299900, 300000);
findNumbersWithEqualSum(100115, 100120);
