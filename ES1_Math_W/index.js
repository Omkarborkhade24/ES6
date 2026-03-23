console.log('1.Write a function that prints the given array.\n');

let originalArray = [5, 12, 7, 25, 18, 3];

function printArray() {
  console.log(`The original array: `, originalArray);
}

printArray();

console.log('---- ---- ----');

console.log(
  '2.Write a function that returns a new array with 10 added to each number. Use for-loops. Print the result.\n'
);

let newArray = [];
function newArrayFn() {
  for (let i = 0; i < originalArray.length; i++) {
    newArray.push(originalArray[i] + 10);
    // return newArray;
  }
  return newArray;
}

console.log(`The new array: `, newArrayFn());

console.log('---- ---- ----');

console.log(
  '3.Write a function to convert all odd numbers in the array to the nearest even number by adding 1 to them. Print the result. Take the original array as input.\n'
);

let evenArray = [];
function oddToEven() {
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 !== 0) {
      evenArray.push(originalArray[i] + 1);
    }
  }
  return evenArray;
}
console.log(`All even numbers: `, oddToEven());

console.log('---- ---- ----');

console.log(
  '4.From the given array, create a new array with numbers divisible by 2. Print the new array. Take the original array as input.\n'
);

let originalEven = [];
function findEven() {
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 0) {
      originalEven.push(originalArray[i]);
    }
  }
  return originalEven;
}
console.log(`All even numbers: `, findEven());

console.log('---- ---- ----');

console.log(
  '5.Write a function to print the sum of all numbers in the array. Take the original array as input.\n'
);

function sumOfAll() {
  let sumOfNumbers = 0;
  for (let i = 0; i < originalArray.length; i++) {
    sumOfNumbers += originalArray[i];
  }
  return sumOfNumbers;
}
console.log(`Sum of all numbers in the Array: `, sumOfAll());

console.log('---- ---- ----');

console.log(
  '6.Write a function to print the sum of odd numbers and sum of all even numbers in the given array. Take the original array as input.\n'
);

function sumOfOddAndEven() {
  let sumOfOdd = 0;
  let sumOfEven = 0;
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 !== 0) {
      sumOfOdd += originalArray[i];
    }
    if (originalArray[i] % 2 === 0) {
      sumOfEven += originalArray[i];
    }
  }
  return {
    'Sum of all odd numbers: ': sumOfOdd,
    'Sum of all Even: ': sumOfEven,
  };
}
console.log(sumOfOddAndEven());
