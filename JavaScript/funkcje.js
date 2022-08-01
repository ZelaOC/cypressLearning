//Funkcje w JavaScript

//Pierwszy sposob

// let name = "Alicja";

// if (name == "Alicja") {
//     firstFunction();
// } else {
//     thirdFunction();
// }


function firstFunction(firstValue, secondValue){
    const sum = firstValue + secondValue;
    return console.log("First function will show us a sum of " + firstValue + " and " + secondValue + "  : " + sum)
}

firstFunction(9,3);

// //Drugi sposob

// const secondFunction = () => {
//     return console.log("It is a second method that You can call an function")
// }

// secondFunction();

function thirdFunction(){
    const sum = 5+5;
    return console.log("First function will show us a sum of 2 and 5 : " + sum)
}