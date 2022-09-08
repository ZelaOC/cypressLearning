// number type

const firstNumber = 24;
const secondNumber = 17.44;

console.log(firstNumber + secondNumber)

// string type

const animalName = ("Tiki");
const animalType = ("Cat");

const checkLenght = animalName.length;

const checkFormy = animalName.charAt(checkLenght - 1);

console.log(animalName + " is name of our " + animalType)
console.log(checkFormy)

// boolean type

const itIsTrue = true;
const itIsFalse = false;

console.log(typeof(itIsFalse));

// null type

const color = null;

// array type

let newArray = ["Alice","Thomas","Pablo","Escobar"];
console.log(typeof(newArray));
console.log(newArray); 

// object type

const examplePerson = {
    firstName: "randomName",
    lastName: "randomLastName",
    age:  "29"
}

console.log(examplePerson);
console.log(examplePerson.age);
console.log(examplePerson.lastName.length);

console.log(newArray[1].toLocaleUpperCase());

console.log(secondNumber.toFixed(0));