function reverseString(str: string) {
    let result: string = "";

    for (let i: number = str.length - 1; i >= 0; i--) {
        result = result + str.charAt(i);
    }

    return result;
}

let testStr: string = "hello";

let testResult: string = reverseString(testStr);

console.log(testResult);