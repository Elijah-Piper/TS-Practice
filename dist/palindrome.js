"use strict";
function palindrome(arg) {
    let str = "" + arg;
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str.charAt(i);
    }
    if (str == reverse) {
        return true;
    }
    else {
        return false;
    }
}
let isPalindrome = palindrome(123454321);
console.log(isPalindrome);
//# sourceMappingURL=palindrome.js.map