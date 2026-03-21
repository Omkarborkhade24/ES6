console.log(`1.1 Console the 'brand' property of the 'car' object.\n`);

let car = {
  brand: 'Toyota',
  model: 'Corolla',
};

console.log(car.brand);

console.log('---- ---- ----');

console.log(`1.2 Console the 'model' property of the 'car' object.\n`);

console.log(car.model);

console.log('---- ---- ----');

console.log(
  `1.3 Change the value of 'brand' property of the 'car' object to "Honda".\n`
);

car.brand = 'Honda';

console.log('---- ---- ----');

console.log(`1.4 Console the updated 'car' object.\n`);

car.brand = 'Honda';

console.log(car.brand);

console.log('---- ---- ----');

console.log(
  `1.5 Add two more properties to the 'car' object, year and color. Assign the value for year as 2022 and value for color as “Blue”.\n`
);

car.year = 2022;
car.color = 'Blue';

console.log('---- ---- ----');

console.log(
  `1.6 Use for-in loop to print all properties of the 'car' object.\n`
);

// for(let i = 0; i < car.length; i++){
//   console.log(car[i])
// }

console.log(`Properties of 'car' object\n`);
for (property in car) {
  console.log(property, ':', car[property]);
}

console.log('---- ---- ----');

let citizen = {
  name: 'Ramesh Kumar',
  age: '50',
  occupation: 'Retired',
};

console.log(
  `2.1 Change the 'age' property of the 'citizen' object to 68 and print age to the console.\n`
);

(citizen.age = 68), console.log(`Updated age: `, citizen.age);

console.log('---- ---- ----');

console.log(
  `2.2 Add 2 to the 'age' property of the 'citizen' object and print the age to the console.\n`
);

citizen.age += 2;

console.log(`Updated age after adding 2: `, citizen.age);

console.log('---- ---- ----');

console.log(
  `2.3 Add a property city to the object with value “Delhi” and then print all properties of the 'citizen' object using for-in loop.\n`
);

citizen.city = 'Delhi';

console.log(`Properties of 'citizen' object`);

for (property in citizen) {
  console.log(property, ':', citizen[property]);
}

console.log('---- ---- ----');

let person = {
  name: 'Tim',
  age: 64,
};

console.log(
  `3.1 Add a property 'bp' to the person object with value "Normal".\n`
);

person.bp = 'Normal';

console.log('---- ---- ----');

console.log(
  `3.2 Check age and bp for fitness to travel. If the age of the person is above 60 and the bp is normal, then console "Fit to travel." otherwise console "Not fit to travel."\n`
);

if (person.age > 60 && person.bp === 'Normal') {
  console.log('Fit to travel.');
} else {
  console.log('Not fit to travel.');
}
