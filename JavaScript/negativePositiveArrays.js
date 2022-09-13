const mainValueArrays = [7, 14, -8, 23, -15, 83, 54, -67, 0, 202];
let positiveArraySize = 0;
let negativeArraySize = 0;


for (let valuesInArray of mainValueArrays){
    if (valuesInArray > 0) {
        positiveArraySize++;
    } else if (valuesInArray < 0) {
        negativeArraySize++
    }
}

let positiveValueArray = new Array(positiveArraySize);
let negativeValueArray = new Array(negativeArraySize);
let positiveIncrementation = 0;
let negativeIncementation = 0;

for (let valuesInArray of mainValueArrays){
    if (valuesInArray > 0) {
        positiveValueArray[positiveIncrementation] = valuesInArray;
        positiveIncrementation++;
    } else if (valuesInArray < 0) {
        negativeValueArray[negativeIncementation] = valuesInArray;
        negativeIncementation++;
    }
}

console.log(positiveValueArray);
console.log(negativeValueArray);