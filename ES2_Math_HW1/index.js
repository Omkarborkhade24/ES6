console.log('Es2_Home_Work_1');

// 1. Write an arrow function with two parameters that calculates the area of a rectangle. Print the output.

// 2. Write an arrow function with two parameters 15 and 5, that checks if the first number is divisible by the second number. Print the output.

// 3. Write an arrow function with two parameters 15 and 5, that calculates the difference of the two numbers. Print the output.

// 4. Write an arrow function with three parameters that concatenates three strings. Your Output should be: I am happy.

// 5. Convert the below arrow function into traditional function declaration format?

// const isBigger = (a, b) => a > b
// console.log("Is 2 bigger than 3?", isBigger(2, 3))
// 6. Convert the below function into an arrow function?

// function printProduct(a, b) {
//   return a * b
// };
// console.log("Product of two numbers: ", printProduct(2, 6))
// 7. Convert the below function into an arrow function?
//   function getGreeting(greeting, name){
//     return greeting + name
//   }
//   console.log(getGreeting("Hello ", "John"))

console.log('---- ---- ----');

const areaOfRectrangle = (length, breadth) => length * breadth;
console.log(areaOfRectrangle(5, 10));

console.log('---- ---- ----');

const isDivisible = (num1, num2) => num1 % num2 === 0;
console.log(isDivisible(15, 5));

console.log('---- ---- ----');

const calculateDifference = (num1, num2) => num1 - num2;
console.log(calculateDifference(15, 5));

console.log('---- ---- ----');

const concatenateString = (str1, str2, str3) =>
  str1 + ' ' + str2 + ' ' + str3 + '.';
console.log(concatenateString('I', 'am', 'happy'));

console.log('---- ---- ----');

function isBigger(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

console.log('Is 2 bigger than 3?', isBigger(2, 3));

console.log('---- ---- ----');

const printProduct = (a, b) => a * b;
console.log(printProduct(5, 5));

console.log('---- ---- ----');

const getGreeting = (greeting, name) => greeting + ' ' + name;
console.log(getGreeting('Hello', 'John'));
