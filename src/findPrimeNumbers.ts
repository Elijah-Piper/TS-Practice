function findPrimeNumbers(len: number): number[] {
    let numbers: number[] = [];

    for (let i: number = 2; numbers.length < len; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }

    return numbers;
}

function isPrime(num: number): boolean {
    if (num == 2) {
        return true;
    } else if (num < 2) {
        return false;
    } else {
        for (let i: number = num - 1; i > 1; i--) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true;;
}

let primeNums: number[] = findPrimeNumbers(1000);
console.log(primeNums);
console.log("done");