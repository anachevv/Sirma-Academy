function vote(arr) {
    if (arr.includes('Yes')) {
        if (arr.includes('No')) {
            let countYes = 0;
            let countNo = 0;

            arr.forEach(elem => {
                if (elem === 'Yes') {
                    countYes++;
                }
                else if (elem === 'No') {
                    countNo++;
                }
            })

            if (countYes > countNo) {
                return 'Yes';
            }
            else if (countNo > countYes) {
                return 'No';
            }
            return 'Tie';
        }

        return 'Yes';
    }

    else if (arr.includes('No')) {
        return 'No';
    }

    return 'Abstain';
}

console.log(
    vote(['Yes', 'No', 'Yes', 'Abstain', 'Yes'])
);

console.log(
    vote(['No', 'No', 'Yes'])
);

console.log(
    vote(['Yes', 'No'])
);

console.log(
    vote(['Abstain'])
);

console.log(
    vote(['No', 'No', 'Abstain', 'Abstain', 'Yes', 'Yes'])
);

console.log(
    vote(['No', 'Abstain', 'Abstain'])
);

console.log(
    vote(['Abstain', 'Yes', 'No', 'No', 'Abstain', 'Abstain'])
);

console.log(
    vote(['Abstain'])
);