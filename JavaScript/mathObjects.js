const piValue = Math.PI;
const logTwo = Math.LN2;
const logTen = Math.LN10;
const elementTwo = Math.SQRT2;


console.log(Math.round(piValue)); // round number to nearest number
console.log(Math.ceil(elementTwo)); // round number up
console.log(Math.trunc(logTwo)); // round only to full number
console.log(Math.floor(logTen)); // round number down

const signMethod = Math.sign() // It will return number where entered value is negative then -1, zero then 0, postive then 1
const numberExp = Math.pow(2,4) // It will return number x exponentation to y 
console.log(numberExp);

const numberElement = Math.sqrt(64)
console.log(numberElement);

const absoluteValue = Math.abs(-15,55) // It return absoulte value from entered number
console.log(absoluteValue)

const minValue = Math.min(-4,-10,0,3,6,10,67,-87) // It return a minimal value from array
console.log(minValue)

// Generate random values


const randomValues = (Math.random() * (50 - 1) + 1);

console.log(Math.round(randomValues));


