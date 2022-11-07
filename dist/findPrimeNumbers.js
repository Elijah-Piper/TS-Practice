"use strict";
function findPrimeNumbers(len) {
    let numbers = [];
    for (let i = 2; numbers.length < len; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }
    return numbers;
}
function isPrime(num) {
    if (num == 2) {
        return true;
    }
    else if (num < 2) {
        return false;
    }
    else {
        for (let i = num - 1; i > 1; i--) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true;
    ;
}
let primeNums = findPrimeNumbers(1000);
console.log(primeNums);
console.log("done");
//# sourceMappingURL=findPrimeNumbers.js.map