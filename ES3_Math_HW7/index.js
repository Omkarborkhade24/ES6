console.log('ES3_HW7');

console.log('---- ---- ----');

let name = 'Alice';
let age = 25;

const createPerson = (name, age) => {
  return { name, age };
};

console.log(createPerson('Alice', 25));

console.log('---- ---- ----');

// let name = "Apple";
// let color = "Red";

const createFruit = (name = 'Apple', color = 'Red') => {
  return { name, color };
};

console.log(createFruit());
console.log(createFruit('Banana', 'Yellow'));

console.log('---- ---- ----');

// let title = "The Great Gatsby";
// let author = "F.Scott Fitzgerald";
// let genre = "Classic";

const createBookObj = (title, author, genre) => {
  return { title, author, genre };
};

console.log(createBookObj('The Great Gatsby', 'F.Scott Fitzgerald', 'Classic'));
console.log(createBookObj('The Beatles Anthology', 'The Beatles', 'Music'));

console.log('---- ---- ----');

const createBook = (
  bookName = "The Hitchhiker's Guide to the Galaxy",
  author = 'Douglas Adams'
) => {
  return { bookName, author };
};

console.log(createBook());
console.log(createBook('A Suitable Boy', 'Vikram Seth'));

console.log('---- ---- ----');

let aaloo = 1;
let bhaaloo = 2;

const bhaalooEatsAaloo = (aaloo, bhaaloo) => {
  return { aaloo, bhaaloo };
};

console.log(bhaalooEatsAaloo(aaloo, bhaaloo));

console.log('---- ---- ----');

const calculateArea = (length, width) => {
  let area = length * width;
  return { length, width, area };
};

console.log(calculateArea(5, 8));

console.log('---- ---- ----');

const printObjOfArrays = (arr1, arr2) => {
  return { arr1, arr2 };
};

console.log(printObjOfArrays([1, 2, 3], ['a', 'b']));

console.log('---- ---- ----');

const createTriangle = (side1, side2, side3) => {
  let perimeter = side1 + side2 + side3;
  return { side1, side2, side3, perimeter };
};

console.log(createTriangle(3, 4, 5));

console.log('---- ---- ----');

const createPoint = (x, y) => {
  return { x, y };
};

console.log(createPoint(3, 7));

console.log('---- ---- ----');

const createEmail = (username, domain) => {
  let fullAddress = username + '@' + domain;
  return { username, domain, fullAddress };
};

console.log(createEmail('john.doe', 'example.com'));
