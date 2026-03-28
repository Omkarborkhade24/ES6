console.log('ES3_HW2');
console.log('---- ---- ----');

const logFirstAndRest = (a, ...rest) => {
  console.log('First: ', a);
  console.log('Rest: ', rest);
};

logFirstAndRest(1, 2, 3, 4, 5);

console.log('---- ---- ----');

const logFirstAndSecond = (a, b, ...rest) => {
  console.log('First: ', a);
  console.log('Second: ', b);
  console.log('Rest: ', rest);
};

logFirstAndSecond(12, 22, 33, 44, 55);

console.log('---- ---- ----');

const calculateProduct = (...rest) => {
  let product = 1;
  for (let i = 0; i < rest.length; i++) {
    product *= rest[i];
  }
  return product;
};
// TST

console.log(calculateProduct(2, 3, 4));
console.log(calculateProduct(5, 2, 1, 3));

console.log('---- ---- ----');

const createSentence = (...rest) => {
  return rest.join(' ');
};

console.log(createSentence('JavaScript', 'is', 'awesome'));

console.log('---- ---- ----');

const findSum = (a, ...rest) => {
  // let str = '';
  // let sum = '';
  // for (let i = 0; i < rest.length; i++) {
  const numbers = rest.filter((item) => typeof item === 'number');
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  // const string = rest.filter((item) => typeof item === 'string');
  // str += string + numbers;
  // sum += str;
  // }
  console.log(a, sum);
  // return sum;
};

findSum('Sum of Numbers: ', 2, 4, 6, 8, 10);

console.log('---- ---- ----');

const containsValue = (...rest) => {
  const checkIf = rest.filter((item) => typeof item === 'number');
  if (checkIf.length === rest.length) {
    return true;
  } else {
    return false;
  }
};

console.log(containsValue(3, 1, 2, 3, 4));
console.log(containsValue('apple', 'banana', 'orange'));

console.log('---- ---- ----');

const calculateAverage = (...rest) => {
  const sum = rest.reduce((acc, curr) => acc + curr, 0);
  const average = sum / rest.length;
  return average;
};

console.log(calculateAverage(10, 5, 15));
console.log(calculateAverage(2, 4, 6, 8));
