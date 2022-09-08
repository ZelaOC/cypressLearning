
function showText(){
    console.log("Example text in function")
}

showText();

const secondShowText = function () {
    console.log("Example text in function")
}

secondShowText();

const firstName = "Yes";
const presonAge = 35;
const personAnimals = "cat";

function returnText() {
    if (firstName == "Tiki"){
        console.log ("Your name is Tiki")
    } else {
        console.log("Access denide")
    }
}

returnText();

let firstNumber = 1;
let secondNumber = 2;

function sumOfNumbers(functionFirstNumber, functionSecondNumber, functionPersonName){
    const valueOfMultiplication = multiplicationOfNumber(5,1)
    sum = functionFirstNumber + functionSecondNumber + valueOfMultiplication;
    // console.log("Sum of provide numbers is : " + sum);
    console.log(`Result of function is: ${functionPersonName} has ${sum} years`)
}

sumOfNumbers(2,9, "Marceli");

function multiplicationOfNumber(functionFirstNumber, functionSecondNumber){
    return functionFirstNumber * functionSecondNumber;
}