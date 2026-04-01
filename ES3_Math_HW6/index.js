console.log('ES3_HW6');

console.log('---- ---- ----');

const printTemperature = ({
  location: locationName,
  temperature: locationTemperature,
}) => {
  return `Location: ${locationName}, Temperature: ${locationTemperature} degree celsius`;
};

console.log(printTemperature({ location: 'New York', temperature: 15 }));
console.log(printTemperature({ location: 'London', temperature: 10 }));

console.log('---- ---- ----');

const printFruit = ({fruitName: name, fruitColor: color, inStock:status}) => {
  return `Fruit Name: ${name}, Fruit Color: ${color}, Available: ${status}`;
};

console.log(
  printFruit({ fruitName: 'Apple', fruitColor: 'Red', inStock: true })
);
console.log(
  printFruit({ fruitName: 'Grapes', fruitColor: 'Green', inStock: false })
);

console.log('---- ---- ----');

const printStudentScores = ([name, a, b, c]) => {
  return `Student: ${name}, Scores: ${a},${b},${c}`;
};

console.log(printStudentScores(['Alice', 90, 85, 95]));
console.log(printStudentScores(['Bob', 80, 75, 85]));

console.log('---- ---- ----');

const printProductDetails = ({ name: value1, price: value2 }) => {
  return `Product: ${value1}, Price: $${value2}`;
};
console.log(printProductDetails({ name: 'Laptop', price: 899 }));
console.log(printProductDetails({ name: 'Phone', price: 599 }));

console.log('---- ---- ----');

const printPersonDetails = ({
  name: nameValue = 'Anonymous',
  age: ageValue = 'Unknown',
}) => {
  return `Name: ${nameValue}, Age: ${ageValue}`;
};

console.log(printPersonDetails({ name: 'John', age: 30 }));
console.log(printPersonDetails({}));

console.log('---- ---- ----');

const printCityPopulation = ([
  country,
  { population: value1, country: value2 },
]) => {
  // [country,{[population]: value1, [country]: value2}] = arr

  return `${country}, Population: ${value1}, Country: ${value2}`;
};

console.log(
  printCityPopulation(['New York', { population: 8623000, country: 'USA' }])
);
console.log(
  printCityPopulation(['Tokyo', { population: 37833000, country: 'Japan' }])
);

console.log('---- ---- ----');

const printCarDetails = ([car, { model: value1, price: value2 }]) => {
  return `Name: ${car}, Model: ${value1}, Price: Rs.${value2}`;
};

console.log(
  printCarDetails(['All-Terrain SUV', { model: 'SUV', price: 4500000 }])
);
console.log(
  printCarDetails([
    'Green Drive Electric',
    { model: 'Electric', price: 500000 },
  ])
);
