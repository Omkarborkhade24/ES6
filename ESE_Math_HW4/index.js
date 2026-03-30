console.log('ES3_HW4');

console.log('---- ---- ----');

const sumAndDifference = (arr1) => {
  const [a, b] = arr1;
  let sum = a + b;
  let difference = a - b;
  return `Sum: ${sum}, Difference: ${difference}`;
};
console.log(sumAndDifference([5, 3]));
console.log(sumAndDifference([10, 7]));

console.log('---- ---- ----');

const extractFirstAndLast = (str) => {
  const [a] = str;
  let first = '';
  let last = '';
  for (let i = 0; i < str.length; i++) {
    first = str[0];
    last = str[i]; //GW
  }
  return `First character: ${first}, Last character: ${last}`;
};

console.log(extractFirstAndLast('hello'));
console.log(extractFirstAndLast('world'));

console.log('---- ---- ----');

const calculateRectangleArea = (obj) => {
  const { ['length']: l, ['width']: b } = obj;

  let area = l * b;

  return `The area of the rectrangle is: ${area}`;
};

console.log(calculateRectangleArea({ length: 5, width: 3 }));
console.log(calculateRectangleArea({ length: 8, width: 4 }));

console.log('---- ---- ----');

const getFirstTwoColors = (arr) => {
  const [a, b, c, d] = arr;

  let color1 = a;
  let color2 = b;

  return `The first two colors are: ${color1} and ${color2}`;
};

console.log(getFirstTwoColors(['red', 'blue', 'green', 'yellow']));
console.log(getFirstTwoColors(['orange', 'purple', 'pink']));

console.log('---- ---- ----');

const extractNestedInfo = (obj) => {
  const {
    data: { name: valueA1, age: valueA2, country: valueA3 },
  } = obj;

  let name1 = valueA1;
  let age1 = valueA2;
  let country1 = valueA3;
  return `${name1} is ${age1} years old and lives in ${country1}`;
};

console.log(
  extractNestedInfo({ data: { name: 'John', age: 35, country: 'USA' } })
);
console.log(
  extractNestedInfo({ data: { name: 'Emma', age: 28, country: 'Canada' } })
);

console.log('---- ---- ----');

const productAndDifference = (arr) => {
  const [a, b, c, d] = arr;

  let productAndDifference = a * b - c;

  return `Product and Difference: ${productAndDifference}`;
};

console.log(productAndDifference([5, 3, 5, 6]));
console.log(productAndDifference([10, 7, 35, 30]));

console.log('---- ---- ----');

const extractData = (obj) => {
  const {
    id: value1,
    product: {
      itemName: valueA1,
      description: valueA2,
      manufacturingCountry: valueA3,
    },
  } = obj;

  let name = valueA1;
  let info = valueA2;
  let country = valueA3;

  return `Item name: ${name}, Description: ${info}, Manufacturing Country: ${country}`;
};

console.log(
  extractData({
    id: 1,
    product: {
      itemName: 'Pencil',
      description: 'Extra Dark Pencil',
      manufacturingCountry: 'USA',
    },
  })
);
console.log(
  extractData({
    id: 2,
    product: {
      itemName: 'Sharpener',
      description: 'Faber Castell Premium',
      manufacturingCountry: 'Germany',
    },
  })
);
