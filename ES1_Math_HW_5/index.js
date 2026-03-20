console.log(`1.1: Students Data with Computer Marks\n`);

let studentsData = [
  {
    name: 'Rahul',
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
  },
  {
    name: 'Amit',
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
  },
  {
    name: 'Priya',
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
  },
];

const marksForComputer = [88, 92, 95];

let withComputerData = [];
for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].computer = marksForComputer[i];
  withComputerData +=
    `Name: ${studentsData[i].name}, ` +
    `Roll No: ${studentsData[i].rollNo}, ` +
    `English: ${studentsData[i].english}, ` +
    `Maths: ${studentsData[i].maths}, ` +
    `Computer: ${studentsData[i].computer} ` +
    `\n`;
}
console.log(withComputerData);

console.log('---- ---- ----');

console.log(`1.2: Updated Students Data with Science Marks\n`);

const marksForScience = [82, 90, 88];

let updatedData = [];
for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].science = marksForScience[i];
  updatedData +=
    `Name: ${studentsData[i].name}, ` +
    `Roll No: ${studentsData[i].rollNo}, ` +
    `English: ${studentsData[i].english}, ` +
    `Maths: ${studentsData[i].maths}, ` +
    `Computer: ${studentsData[i].computer}, ` +
    `Science: ${studentsData[i].science}` +
    `\n`;
}
console.log(updatedData);

console.log('---- ---- ----');

console.log(`2.1: Kaveri's Data\n`);

let kaveriData = {
  name: 'Kaveri',
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86,
};

console.log(kaveriData);

console.log('---- ---- ----');

console.log(`2.2 Updated Students Data with Kaveri\n`);

// for (let i = 0; i <= studentsData.length; i++) {
//   kaveriData.push(studentsData[i]);
//   console.log(kaveriData[i]);
// }

studentsData.push(kaveriData);

let latestData = [];
for (let i = 0; i < studentsData.length; i++) {
  latestData +=
    `Name: ${studentsData[i].name}, ` +
    `Roll No: ${studentsData[i].rollNo}, ` +
    `English: ${studentsData[i].english}, ` +
    `Maths: ${studentsData[i].maths}, ` +
    `Computer: ${studentsData[i].computer}, ` +
    `Science: ${studentsData[i].science} ` +
    `\n`;
}
console.log(latestData);

// for (let i = 0; i < studentsData.length; i++) {
//   studentsData.push(kaveriData[i]);
//   console.log(studentsData);
// }

console.log('---- ---- ----');
console.log(`2.3: Updated Students with Kaveri\n`);

let dataWithMarks = [];
for (let i = 0; i < studentsData.length; i++) {
  let totalMarks = 0;
  totalMarks =
    studentsData[i].hindi +
    studentsData[i].english +
    studentsData[i].maths +
    studentsData[i].computer +
    studentsData[i].science;
  studentsData[i].totalMarks = totalMarks;
  dataWithMarks +=
    `Name: ${studentsData[i].name}, ` +
    `Roll No: ${studentsData[i].rollNo}, ` +
    `Total Marks: ${studentsData[i].totalMarks} \n`;
}
console.log(dataWithMarks);

console.log('---- ---- ----');

console.log(`2.4: Updated Students Data with Average Marks\n`);

const noOfSubjects = 5;

let dataWithAvg = [];
for (let i = 0; i < studentsData.length; i++) {
  studentsData[i].average = studentsData[i].totalMarks / noOfSubjects;
  dataWithAvg +=
    `Name: ${studentsData[i].name}, ` +
    `Roll No: ${studentsData[i].rollNo}, ` +
    `Average Marks: ${studentsData[i].average}` +
    `\n`;
}
console.log(dataWithAvg);

console.log('---- ---- ----');

let report = '';
function reportCard() {
  for (let i = 0; i < studentsData.length; i++) {
    if (studentsData[i].average >= 90 && studentsData[i].average <= 100) {
      studentsData[i].grade = 'A';
    }
    if (studentsData[i].average >= 80 && studentsData[i].average <= 89) {
      studentsData[i].grade = 'B';
    }
    if (studentsData[i].average >= 70 && studentsData[i].average <= 79) {
      studentsData.grade = 'C';
    }
    if (studentsData[i].average >= 60 && studentsData[i].average <= 69) {
      studentsData[i].grade = 'D';
    }
    if (studentsData[i].average >= 50 && studentsData[i].average <= 59) {
      studentsData[i].grade = 'E';
    }
    if (studentsData[i].average < 50) {
      studentsData[i].grade = 'F';
    }
    report +=
      `===== Report Card for ${studentsData[i].name} ======\n` +
      `Roll No. : ${studentsData[i].rollNo}\n` +
      `------\n` +
      `Marks\n` +
      `------\n` +
      `Hindi: ${studentsData[i].hindi} \n` +
      `English: ${studentsData[i].english}\n` +
      `Maths: ${studentsData[i].maths}\n` +
      `Computer: ${studentsData[i].computer}\n` +
      `Science: ${studentsData[i].science}\n` +
      `------\n` +
      `Total: ${studentsData[i].totalMarks}\n` +
      `Average: ${studentsData[i].average}\n` +
      `Grade: ${studentsData[i].grade}\n` +
      `------ ------ ------ ------\n`;
  }
  return report;
}
console.log(reportCard());
