console.log('ES2_HW_3');

console.log('---- ---- ----');
// 1. Write an arrow function that takes a person's firstName and lastName and returns an object with properties for firstName and lastName.

const fullName = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});
console.log(fullName('Omkar', 'Borkhade'));

console.log('---- ---- ----');

// 2. Write an arrow function that takes a string and returns an object with properties for string length and its uppercase version.

const returnString = (str) => ({
  length: str.length,
  uppercase: str.toUpperCase(),
});
console.log(returnString('apple'));

console.log('---- ---- ----');

// 3. Write an arrow function that takes a person's firstName, lastName, age and phoneNumber and returns an object with properties for fullName, age and phoneNumber.

const personDetails = (firstName, lastName, age, phoneNumber) => ({
  fullName: firstName + ' ' + lastName,
  age: age,
  phoneNumber: phoneNumber,
});

console.log(personDetails('Ravi', 'Shastri', 57, 8390367310));

console.log('---- ---- ----');

// 4. Write an arrow function that takes two words and returns an object with properties for concatenation and character count.

const strCount = (strA, strB) => {
  let sum = strA + strB;
  return {
    concatenation: strA + ' ' + strB,
    charCount: sum.length,
  };
};

console.log(strCount('Hello', 'World'));

console.log('---- ---- ----');

// 5. Write an arrow function that takes a radius and returns an object with properties for circumference and area of a circle. Use Math.PI method.

// formula for circumference of circle = 2 * pi * radius
//  area of circle = pi * (radius * radius)

const calculateCircle = (radius) => {
  let circleCircumference = 2 * (Math.PI * radius);
  let circleArea = Math.PI * (radius * radius);
  return {
    circumference: circleCircumference,
    area: circleArea,
  };
};

console.log(calculateCircle(5));

console.log('---- ---- ----');

// 6. Write an arrow function that takes two numbers and returns an object with properties for their difference and quotient.

const sumDQ = (num1, num2) => {
  let sumD = num1 - num2;
  let sumQ = num1 / num2;
  return {
    difference: sumD,
    quotient: sumQ,
  };
};

console.log(sumDQ(10, 2));

console.log('---- ---- ----');

// 7. Write an arrow function that takes a sentence and returns an object with property for word count in that sentence.

const wordCount = (sentence) => {
  let words = sentence.split(' ');
  return {
    wordCount: words.length,
  };
};

console.log(wordCount('JavaScript is fun'));

console.log('---- ---- ----');

// 8. Write an arrow function that takes a number and returns an object with properties for its square and cube.

const sumSC = (num) => {
  let sumS = num ** 2;
  let sumC = num ** 3;
  return {
    square: sumS,
    cube: sumC,
  };
};

console.log(sumSC(4));

console.log('---- ---- ----');

// 9. Write an arrow function that takes a number and returns an object indicating whether it's positive or negative.

const checkNum = (num) => {
  let positive = 0;
  let negative = 0;
  if (num >= 0) {
    positive = true;
  } else {
    positive = false;
  }
  if (num < 0) {
    negative = true;
  } else {
    negative = false;
  }
  return {
    isPositive: positive,
    isNegative: negative,
  };
};

console.log(checkNum(-7));

console.log(checkNum(5));
