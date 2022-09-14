const numberArray = [1,2,3,4,5];
const ageArray = [23, 28, 31, 18];
const nameArray = ['Michał', 'Alicja', 'Jan', 'Klaudia', 'Marcin', 'Paulina'];
const emptyArray = [];

nameArray.forEach(name =>{
    console.log(name);
})

console.log(
emptyArray.forEach(emptyValue =>{
    return emptyValue;
})
)

console.log(
emptyArray.map(emptyValue =>{
    return emptyValue;
})
)