const exampleArray = ['Alice', 1990, 1.75, true, {name: 'Tom', age: 32}];
const exampleNumbers = [1,5,7,44,69,23,11];
const exampleNameArray = ['Maria','John','Thomas'];

//Veryfi lenght of array

console.log(exampleArray.length);
console.log(exampleNumbers.length);

// Add value into Array

exampleArray.push('Mikhel'); // Adding data at end of array
console.log(exampleArray);

// Delete value from Array

exampleNumbers.pop() // Delete value form last Array index
console.log(exampleNumbers);

exampleNumbers.shift() // Delete value from first Array index
console.log(exampleNumbers);

const thirdIndexElement = exampleNumbers.indexOf(69)
exampleNumbers.splice(thirdIndexElement, 1) // Delete any value from Array
console.log(exampleNumbers);

// Search Array element index by his value

let indexElement = exampleNumbers.indexOf(5);
console.log(indexElement);

const secondIndexElement = exampleNumbers.indexOf(11); // If element Was removed from Array function return -1
console.log(secondIndexElement); 

const arrayToStirng = exampleNumbers.join(";");
console.log(arrayToStirng);

const nameArrayToString = exampleNameArray.join(".");
console.log(nameArrayToString);

