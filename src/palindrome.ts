function palindrome(arg: string | number) {
    let str: string = "" + arg;
    let reverse: string = "";

    for (let i: number = str.length - 1; i >= 0; i--) {
        reverse = reverse + str.charAt(i);
    }

    if (str == reverse) {
        return true;
    } else {
        return false;
    }
}

let isPalindrome: boolean = palindrome(123454321);
console.log(isPalindrome);