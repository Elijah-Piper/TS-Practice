"use strict";
function fibonacci(numOfEl) {
    let result = [];
    for (let i = 0; i < numOfEl; i++) {
        if (i == 0) {
            result.push(i);
        }
        else if (i == 1) {
            result.push(i);
        }
        else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
}
let fib = fibonacci(10);
console.log(fib);
//# sourceMappingURL=fibonacci.js.map