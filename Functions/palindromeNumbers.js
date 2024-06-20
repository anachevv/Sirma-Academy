function isPalindrome(arr) {
    arr.forEach(number => {
        if (number == number.toString().split('').reverse().join('')) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    })
}

isPalindrome([123,323,421,121]);
isPalindrome([32,2,232,1010]);