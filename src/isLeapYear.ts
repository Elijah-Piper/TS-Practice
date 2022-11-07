function isLeapYear(year: number) {
    return year % 4 == 0 ? true : false;
}

let isLeap: boolean = isLeapYear(1900);
console.log(isLeap);