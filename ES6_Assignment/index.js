console.log('ES6_Assignment');

console.log('---- ---- ----');

const concatenateStrings = (...str) => {
  return `${str.join(' ')}`;
};

console.log(concatenateStrings('Hello', 'world', '!'));
console.log(concatenateStrings('JavaScript', 'is', 'fun', 'to', 'learn.'));

console.log('---- ---- ----');

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

console.log('---- ---- ----');

const concatenateWithSaparator = (a, ...str) => {
  return str.join(a);
};

console.log(concatenateWithSaparator('-', 'apple', 'orange', 'banana'));
console.log(concatenateWithSaparator(', ', 'red', 'green', 'blue', 'yellow'));

console.log('---- ---- ----');

const extractObjectValues = (obj) => {
  const { name, age } = obj;
  return obj;
};

console.log(extractObjectValues({ name: 'Alice', age: 25 }));
console.log(extractObjectValues({ name: 'Bob', age: 30 }));

console.log('---- ---- ----');

const extractArrayValues = (arr) => {
  const [a, b, c] = arr;
  return `${a}, ${b}, ${c}`;
};

console.log(extractArrayValues([1, 2, 'Hello', 3]));
console.log(extractArrayValues(['apple', 'orange', 'banana']));

console.log('---- ---- ----');

const extractNestedValues = (obj) => {
  const {
    ['data']: { firstName, lastName, age },
  } = obj;
  let agePlusFive = age + 5;
  return `${firstName} ${lastName} will be ${agePlusFive} years old in five years.`;
};

console.log(
  extractNestedValues({
    data: { firstName: 'Priya', lastName: 'Gupta', age: 20 },
  })
);
console.log(
  extractNestedValues({ data: { firstName: 'John', lastName: 'Doe', age: 25 } })
);

console.log('---- ---- ----');

const printInfo = (obj) => {
  const {
    name: { firstName, lastName },
    department,
  } = obj;

  return `${firstName} ${lastName} works in ${department} department.`;
};

console.log(
  printInfo({ name: { firstName: 'John', lastName: 'Doe' }, department: 'IT' })
);
console.log(
  printInfo({
    name: { firstName: 'Alice', lastName: 'Smith' },
    department: 'Legal',
  })
);

console.log('---- ---- ----');

const printUserDetails = (obj) => {
  const { name, username = 'anonymous', post = 'Hello World!' } = obj;
  return `${username} posted "${post}"`;
};

console.log(
  printUserDetails({
    name: 'John',
    username: 'john',
    post: 'Hello this is John. I am from England.',
  })
);
console.log(printUserDetails({}));

console.log('---- ---- ----');

const checkEvenOdd = (num) => {
  let evenMsg = `${num} is an even number.`;
  let oddMsg = `${num} is an odd number.`;
  return `${num % 2 === 0 ? evenMsg : oddMsg}`;
};

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(15));

console.log('---- ---- ----');

const checkDiscountEligibility = (sum, isPremium) => {
  let premiumMsg = `You are eligible for a 10% discount.`;
  let economyMsg = `You are eligible for a 5% discount.`;
  return `${sum > 100 && isPremium === true ? premiumMsg : economyMsg}`;
};

console.log(checkDiscountEligibility(120, true));
console.log(checkDiscountEligibility(90, false));

console.log('---- ---- ----');

const concatenateObjUsingSpread = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

console.log(
  concatenateObjUsingSpread(
    { name: 'Alice', age: 30 },
    { city: 'London', country: 'UK' }
  )
);

console.log('---- ---- ----');

const object = { name: 'Dave', age: 25 };
const addKeyValuePair = (object, title1, value1) => {
  return { ...object, [title1]: value1 };
};

console.log(addKeyValuePair(object, 'city', 'New York'));
