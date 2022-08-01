// let - zmienna stosuje się w przypadku kiedy w dalszej czesci kodu chcemy przypisac coś.
// const - stała, zawsze ta sama wartość.

// Deklaracja zmiennej let

// let firstName = "Artur";
// let fullName = "Robert Kubica";

// // Deklaracja zmiennej const

// const secondName  = "Tiki";

// console.log(firstName);
// console.log(secondName);
// console.log(fullName);

// firstName = "Kuzyn";
// secondName = "Cysiek Mistrz";

// console.log(firstName);
// console.log(secondName);

//String

let name = "Alice";

//Number

let age = 13;
let secondAge = 24

//boolean

let isTrue = true;
const isFalse = false;

//unfedined

const undef = undefined;
const isNull = null;

//Array

const newArray = ['Tiki', 'Cat', 'Best'];

//Object

const newObject = {
    type: "Fiat",
    dateProduction: "2013",
    color: "Blue"
};

newObject.color = "Pink";

console.log(typeof(name + age));
console.log(typeof(age + secondAge));
console.log("Person " + name + " has " + age + " year");
console.log(isFalse);
console.log(typeof(undef));
console.log(newArray);
console.log(newObject.color);

//