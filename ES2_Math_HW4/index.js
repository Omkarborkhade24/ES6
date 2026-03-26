console.log('ES2_HW_4');

console.log('---- ---- ----');

const calculateAvg = (numArr) => {
  let average = 0;
  for (let i = 0; i < numArr.length; i++) {
    average += numArr[i] / numArr.length;
  }
  return average;
};

console.log(calculateAvg([5, 10, 15]));

console.log('---- ---- ----');

const backwardString = (str) => {
  let bStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    bStr += str[i];
  }
  return bStr;
};

console.log(backwardString('Hello'));

console.log('---- ---- ----');

const longStr = (data) => {
  let bigWord = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].length > bigWord.length) {
      bigWord = data[i];
    }
  }
  return bigWord;
};

console.log(longStr(['apple', 'banana', 'grapefruit']));

console.log('---- ---- ----');

const sumOfString = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = str.length;
  }
  return sum;
};

console.log(sumOfString('Hello'));

console.log('---- ---- ----');

const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 92 },
  { name: 'Charlie', age: 19, grade: 88 },
];

const calAvg = (data) => {
  let average = 0;
  for (let i = 0; i < data.length; i++) {
    average += data[i].grade / data.length;
  }
  return average;
};

console.log('Average Grade: ', calAvg(students));

console.log('---- ---- ----');

const getStudents = (dataArr) => {
  let sArray = [];
  for (let i = 0; i < dataArr.length; i++) {
    sArray.push(dataArr[i].name);
  }
  return sArray;
};

console.log(getStudents(students));

console.log('---- ---- ----');

const calculateAverageAge = (dataArr) => {
  let average = 0;
  for (let i = 0; i < dataArr.length; i++) {
    average += dataArr[i].age / dataArr.length;
  }
  return average;
};

console.log(calculateAverageAge(students));

console.log('---- ---- ----');

const highGrades = (dataArr) => {
  let toppers = [];
  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i].grade >= 90) {
      toppers.push(dataArr[i]);
    }
  }
  return toppers;
};

console.log(highGrades(students));

console.log('---- ---- ----');

const isAnyBelow18 = (stdArr) => {
  for (let i = 0; i < stdArr.length; i++) {
    if (stdArr[i].age < 18) {
      return true;
    }
  }
  return false; // here if we keep the else (return false) inside
  // for loop that will not scan the whole array
  // that is why you need to return false outside for loop.
};

console.log(isAnyBelow18(students));

console.log('---- ---- ----');

const findStudentByName = (data, str) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === str) {
      return data[i];
    }
  }
  return 'Not Found';
};

console.log(findStudentByName(students, 'Charlie'));

console.log('---- ---- ----');

const getHighScoreStudents = (data) => {
  let toppers = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].grade > 85) {
      toppers.push(data[i].name);
    }
  }
  return toppers;
};

console.log(getHighScoreStudents(students));
