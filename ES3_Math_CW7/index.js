console.log('ES3.7_CW');

// template literal with if else conditions

// a function to concatenate strings

const createMessage = (item, quantity) => {
  return `You have ${quantity} ${item}${quantity > 1 ? 's' : ''}`;
};

//  here '${quantity > 1 ? "s" : ""}'
// this is a if else condition
// where if quantity is greater than 1 return "s" else ""

console.log(createMessage('apple', 3));
console.log(createMessage('Guava', 1));

console.log('---- ---- ----');

const generateUrl = (endpoint, params) => {
  return `https://api.example.com/${endpoint}?${params}`;
};

console.log(generateUrl('users', 'page=1&limit=10'));
