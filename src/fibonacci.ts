function fibonacci(numOfEl: number) {
    let result: number[] = [];

    for (let i: number = 0; i < numOfEl; i++) {
        if (i == 0) {
            result.push(i);
        } else if (i == 1) {
            result.push(i);
        } else {
            result.push(result[i - 1] + result[i - 2])
        }
    }

    return result;
}

let fib: number[] = fibonacci(10);

console.log(fib);