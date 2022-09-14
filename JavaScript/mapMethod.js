const numberArray = [1,2,3,4,5];
const ageArray = [23, 28, 31, 18];
const nameArray = ['Michał', 'Alicja', 'Jan', 'Klaudia', 'Marcin', 'Paulina'];
let femaleArray = new Array();
let menArray = new Array();
// let famelArrayIndex = 0;

numberArray.map((simpleNumber, indexElement) =>{
    if (simpleNumber > 3){
        console.log(`Number ${simpleNumber} is bigger than 3`)
    } else {
        console.log(`Number ${simpleNumber} is smaller than or even 3`)
    }

    console.log(`${simpleNumber} have array index ${indexElement}`)
})


nameArray.map(name  => {

    if(name[name.length-1] == 'a'){
        femaleArray.push(name);
    } else {
        menArray.push(name);
    }
})

console.log(femaleArray);
console.log(menArray);