console.log('ES3_HW5');

console.log('---- ---- ----');

const createObjectWithDynamicField = (name, value) => ({ [name]: value });

console.log(createObjectWithDynamicField('name', 'Alice'));
console.log(createObjectWithDynamicField('age', 25));

console.log('---- ---- ----');

const addObjectField = (obj, title, value) => ({ ...obj, [title]: value });

console.log(addObjectField({ name: 'Bob', age: 30 }, 'city', 'New York'));
console.log(addObjectField({ fruit: 'apple', color: 'red' }, 'quantity', 3));

console.log('---- ---- ----');

const addObjField = (obj, title, value) => ({ ...obj, [title]: value });

console.log(
  addObjField(
    { productName: 'Side Table', color: 'Walnut Brown' },
    'inStock',
    true
  )
);
console.log(
  addObjField(
    { productName: 'Dinning Table', color: 'White' },
    'inStock',
    false
  )
);

console.log('---- ---- ----');

const updateObjectField = (obj, title, value) => ({ ...obj, [title]: value });

console.log(updateObjectField({ name: 'Charlie', age: 28 }, 'age', 29));
console.log(
  updateObjectField({ city: 'Paris', country: 'France' }, 'country', 'Spain')
);

console.log('---- ---- ----');

const updateProductObject = (obj, title, value) => ({ ...obj, [title]: value });

console.log(
  updateProductObject(
    { productName: 'Side Table', inStock: true },
    'inStock',
    false
  )
);
console.log(
  updateProductObject(
    { productName: 'Dining Table', color: 'White', inStock: false },
    'inStock',
    true
  )
);

console.log('---- ---- ----');

const generateObject = (title1, value1, title2, value2) => ({
  [title1]: value1,
  [title2]: value2,
});

console.log(generateObject('animal', 'Dog', 'sound', 'Bark'));
console.log(generateObject('fruit', 'Banana', 'color', 'Yellow'));

console.log('---- ---- ----');

const generateObj = (title1, value1, title2, value2, title3, value3) => ({
  [title1]: value1,
  [title2]: value2,
  [title3]: value3,
});

console.log(
  generateObj('mealType', 'Lunch', 'meal', 'Rice-Dal', 'calorie', '200 Cal')
);
console.log(
  generateObj('mealType', 'Dinner', 'meal', 'Chapati-Dal', 'calorie', '180 Cal')
);

console.log('---- ---- ----');

const createNewObjectWithDynamicField = (
  title1,
  value1,
  title2,
  value2,
  title3,
  value3
) => ({ [title1]: value1, [title2]: value2, [title3]: value3 });

console.log(
  createNewObjectWithDynamicField(
    'name',
    'Maze',
    'favColor',
    'Pink',
    'isMarried',
    false
  )
);
console.log(
  createNewObjectWithDynamicField(
    'age',
    35,
    'hobby',
    'Cooking',
    'isMarried',
    true
  )
);
