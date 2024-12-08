// 1. Function to calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}

// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str[0].toLowerCase() + str.slice(1);
}

// 7. Function to calculate the average of an array of numbers
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage
console.log(calculateDifference(10, 5)); // 5
console.log(isOdd(7)); // true
console.log(findMin([5, 2, 8, 1])); // 1
console.log(filterEvenNumbers([1, 2, 3, 4])); // [2, 4]
console.log(sortArrayDescending([3, 1, 4, 2])); // [4, 3, 2, 1]
console.log(lowercaseFirstLetter("Hello")); // "hello"
console.log(findAverage([10, 20, 30])); // 20
console.log(isLeapYear(2024)); // true
