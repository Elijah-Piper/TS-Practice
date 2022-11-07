"use strict";
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str.charAt(i);
    }
    return result;
}
let testStr = "hello";
let testResult = reverseString(testStr);
console.log(testResult);
//# sourceMappingURL=reverseString.js.map