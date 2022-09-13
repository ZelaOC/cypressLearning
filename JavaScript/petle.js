// Działanie fragmentów kodów w pętli

// FOR - 

// for (let increment = 0; increment < 10; increment++){
//     console.log("Testing " + increment + " wykonano")
// }



// for (let incrementTwo = 20; incrementTwo > 10 ; incrementTwo--){
//     console.log("Testing " + incrementTwo + " wykonano")
// }

// WHILE

// let licznik = 0;

// // while (licznik < 10){
// //     licznik++;
// //     console.log("While to do " + licznik)
// // }

// // DO WHILE

let increment = 0;
const personNames = ['Alice', 'Adam', 'Maurice','Pablo','Polina'];

// while (increment < personNames.length) {
//     console.log(personNames[increment]);
//     increment++;
// }

while (personNames[increment] !== "Pablo"){
    console.log(personNames[increment]);
    increment++;
}

// do {
//     licznik++;
//     console.log("Do while to " + licznik)
// } while(licznik < 10)

// const sex = "man";
// const age = 35;
// const animals = "cat";

// // if (sex === "woman"){
// //     console.log("Yes MA'M!")
// // } else if (sex == "man"){
// //     console.log("Sir burh burh")
// // } else{
// //     console.log("Cyborg my friend!")
// // }

// if (age > 30 && animals == "dog") {
//     console.log("My man")
// } else {
//     console.log("Not bruh")
// }

let secondIncrementation = 0;

do {
    console.log(secondIncrementation);
    secondIncrementation++;
} while (secondIncrementation <= 5)

const numbersArray = [1,6,8,10];

for (let valueFromArray of numbersArray){
    console.log(valueFromArray);
}

for (let personFromArray of personNames){
    console.log(personFromArray);
}