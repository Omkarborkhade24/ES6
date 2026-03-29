console.log('ES3_HW3');

console.log('---- ---- ----');

const copyAndAppend = (arr, element) => [...arr, element];
console.log(copyAndAppend(['apple', 'orange'], 'banana'));

console.log('---- ---- ----');

const copyAndAdd = (arr, element) => [...arr, element];
console.log(copyAndAdd([10, 20], 30));

console.log('---- ---- ----');

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([10, 20], [30, 40, 50]));

console.log('---- ---- ----');

const mergeNameArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeNameArrays(['Alice', 'Bob'], ['John', 'Mac', 'Maze']));

console.log('---- ---- ----');

const copyPersonObject = (obj, title, value) => ({ ...obj, [title]: value });
console.log(
  copyPersonObject({ firstName: 'Alice', age: 20 }, 'lastName', 'Johnson')
);

console.log('---- ---- ----');

const copyEmployeeObject = (obj, title, value) => ({ ...obj, [title]: value });
console.log(
  copyEmployeeObject(
    { employeeId: 243, name: 'Bob', age: 20 },
    'department',
    'IT department'
  )
);

console.log('---- ---- ----');

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ x: 'hello' }, { y: 'world' }));

console.log('---- ---- ----');

const modifyObjectProperties = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(modifyObjectProperties({ name: 'Alice', age: 25 }, { age: 30 }));
console.log(
  modifyObjectProperties({ fruit: 'apple', color: 'red' }, { color: 'green' })
);

console.log('---- ---- ----');

const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 }));

console.log('---- ---- ----');

const mergeThreeArrays = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));

console.log('---- ---- ----');

const mergeThreeArray = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArray([1, true], ['Are', 'You', 'Hungry'], [false, 2]));
