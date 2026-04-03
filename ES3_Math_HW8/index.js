console.log('ES3_HW8');

console.log('---- ---- ----');

const displayWeather = (city, temperature) => {
  return `The weather in ${city} is ${temperature} degrees Celsius.`;
};

console.log(displayWeather('New York', 20));
console.log(displayWeather('London', 15));

console.log('---- ---- ----');

const formatCurrency = (amount, currency) => {
  return `You have ${amount} ${currency}.`;
};

console.log(formatCurrency(50.5, 'USD'));
console.log(formatCurrency(100, 'EUR'));

console.log('---- ---- ----');

const displayBookSummary = (title, author, genre) => {
  return `The book "${title}" written by ${author} belongs to the ${genre} genre.`;
};

console.log(
  displayBookSummary('To Kill a Mockingbird', 'Harper Lee', 'Fiction')
);

console.log('---- ---- ----');

const displayMovieInfo = (title, releaseYear, director) => {
  return `The movie "${title}" was released in ${releaseYear} and directed by ${director}.`;
};

console.log(displayMovieInfo('Inception', 2010, 'Christopher Nolan'));

console.log('---- ---- ----');

const constructEmail = (recipent, subject) => {
  return `To:${recipent} \nSubject:${subject}\n \nDear ${recipent},\n \n...`;
};

console.log(constructEmail('alice@example.com', 'Meeting Reminder'));

console.log('---- ---- ----');

const assessGrade = (score) => {
  let resultPass = `You are passing`;
  let resultFail = `You are failing`;

  return `${score >= 60 ? resultPass : resultFail}.`;
};

console.log(assessGrade(75));
console.log(assessGrade(60));
console.log(assessGrade(45));

console.log('---- ---- ----');

const showMessage = (str, num) => {
  return `You have ${num} ${str}${num > 1 ? 's' : ''}.`;
};

console.log(showMessage('bangle', 10));
console.log(showMessage('lipstick', 1));

console.log('---- ---- ----');

const assessMarks = (marks, grade) => {
  let resultPass = `You are passing.`;
  let resultFail = `You are failing.`;

  return `${marks >= 60 && grade === 'A' ? resultPass : resultFail}`;
};

console.log(assessMarks(95, 'A'));
console.log(assessMarks(62, 'C'));
console.log(assessMarks(45, 'D'));

console.log('---- ---- ----');

const showMsg = (product1, product1Sum, product2, product2Sum) => {
  let goodComment = `You have a good collection.`;
  let notBadComment = `You need to update your collection.`;

  return `${
    product1 === 'bangle' &&
    product1Sum > 10 &&
    product2 === 'lipstick' &&
    product2Sum > 5
      ? goodComment
      : notBadComment
  }`;
};

console.log(showMsg('bangle', 11, 'lipstick', 6));
console.log(showMsg('bangle', 5, 'lipstick', 1));
console.log(showMsg('bangle', 12, 'lipstick', 4));

console.log('---- ---- ----');

const shareStationeryMessage = (pencilSum, eraserSum) => {
  let shareMsg = `Please share stationery with friends.`;
  let askMsg = `Please ask your friends for stationery.`;

  return `${pencilSum > 10 && eraserSum > 5 ? shareMsg : askMsg}`;
};

console.log(shareStationeryMessage(12, 8));
console.log(shareStationeryMessage(7, 15));
console.log(shareStationeryMessage(5, 3));
