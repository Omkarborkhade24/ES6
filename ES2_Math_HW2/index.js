console.log('ES6_HW_2');

console.log('---- ---- ----');

// 1. Write an arrow function that checks if a number is odd. Print the output.

const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(75));

console.log('---- ---- ----');

// 2. Write an arrow function that calculates the length of a string. Print the length.

const stringLength = (str) => str.length;
console.log(stringLength('Hello World!'));

console.log('---- ---- ----');

// 3. Write an arrow function that capitalizes a given string. For example: If we pass "hello" as string, the output should be "HELLO". Explore the method in javaScript to convert all letters to capital letters.

const capitalizeString = (str) => str.toUpperCase();
console.log(capitalizeString('Hello'));

console.log('---- ---- ----');

// 4. Write an arrow function that returns the current date in MM/DD/YYYY format. Print the output.

const getCurrentDate = () =>
  new Date().toLocaleDateString('en-US', { timeZone: 'UTC' });
console.log(getCurrentDate());

console.log('---- ---- ----');

// 5. Write an arrow function that returns the current time in HH:MM:SS format. Print the output.

const fahrenheitToC = (fahrenheit) => Math.floor(((fahrenheit - 32) * 5) / 9);
console.log(fahrenheitToC(98));

console.log('---- ---- ----');

// 6. Write an arrow function that converts Fahrenheit to Celsius. Print the output.

const getCurrentTime = () =>
  new Date().toLocaleTimeString('en-IN', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
console.log(getCurrentTime());

console.log('---- ---- ----');

// 7. Write an arrow function that checks if a given string is empty.

const isEmptyString = (str) => str === '';
console.log(isEmptyString('Hello'));
console.log(isEmptyString(''));

console.log('---- ---- ----');

// 8. Write an arrow function that returns a random number between 1 and 30. Print the number.

const getRandom = () => Math.floor(Math.random() * 30);
console.log(getRandom());

console.log('---- ---- ----');

// 9. Write an arrow function that returns the square root of a random number between 1 and 100. Print the square root. Explore the method in javaScript to find square root.

const squareRoot = () => Math.floor(Math.sqrt(Math.random() * 100));
console.log(squareRoot());

console.log('---- ---- ----');

// 10. Write an arrow function that changes a given string in lower case. For example: If we pass "WORLD" as string, the output should be "world". Explore the method in javaScript to convert all letters to lowercase letters.

const stringToLower = (str) => str.toLowerCase();
console.log(stringToLower('WORLD'));
