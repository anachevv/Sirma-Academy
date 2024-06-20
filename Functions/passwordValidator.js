function checkLength(password) {
    return password.length >= 6 && password.length <= 10;
}

function checkType(password) {
    return /^[a-zA-Z0-9]+$/.test(password);
}

function checkForDigits(password) {
    let digitCount = 0;
    for (let char of password) {
        if (/\d/.test(char)) {
            digitCount++;
        }
    }
    return digitCount >= 2;
}

function validate(password) {
    let isValid = true;
    
    if (!checkLength(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    
    if (!checkType(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    
    if (!checkForDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }
    
    if (isValid) {
        console.log("Password is valid");
    }
}

validate('pass');
validate('APass123');
validate('Pa$s$s');