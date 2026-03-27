console.log('ES3_HW_1');

console.log('---- ---- ----');

const rectrangleArea = (length = 5, breadth = 3) => length * breadth;

console.log(rectrangleArea());

console.log(rectrangleArea(4));

console.log('---- ---- ----');

const concatenateStrings = (str1, str2 = ' neoG') => str1 + str2;

console.log(concatenateStrings('Hello', 'World'));

console.log(concatenateStrings('Hello'));

console.log('---- ---- ----');

const cylinderVolume = (radius = 2, height = 4) =>
  Math.PI * radius ** 2 * height;

console.log(cylinderVolume(3));

console.log(cylinderVolume(3, 5));

console.log('---- ---- ----');

const shoppingCartTotal = (price = 0, quantity = 1) => price * quantity;

console.log(shoppingCartTotal(10));

console.log(shoppingCartTotal(15, 3));

console.log(shoppingCartTotal());

console.log('---- ---- ----');

const generateUserProfile = (
  username = 'Guest',
  age = 25,
  country = 'Unknown'
) =>
  'Username: ' + username + ',' + 'Age: ' + age + ',' + 'Country: ' + country;

console.log(generateUserProfile());

console.log(generateUserProfile('Alice', 30, 'USA'));

console.log('---- ---- ----');

const sum = (a, b = 5) => a + b;

console.log(sum(2, 4));

console.log(sum(3));

console.log('---- ---- ----');

const calculatePower = (base, exponent = 1) => Math.pow(base, exponent);

console.log(calculatePower(2, 3));

console.log(calculatePower(5));

console.log('---- ---- ----');

const triangleArea = (base, height = 4) => (1 / 2) * (base * height);

console.log(triangleArea(5));

console.log(triangleArea(3, 6));

console.log('---- ---- ----');

const contStrings = (str1, str2 = '') => str1 + str2;

console.log(contStrings('Good'));
