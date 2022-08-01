
// Działanie na klasach

// class Success {
//     endTitle(){
//         return ('Thanks for using our application');
//     }    
// }

class ShowName {
    constructor (firstName, secondName){
        this.firstInputedName = firstName;
        this.secondInputedName = secondName;
    }

    shownName (){
        return('That is your names  boy: ' + this.firstInputedName + " " + this.secondInputedName)
    }
}


// class Math extends Success{
//     get title() {
//         return "Your math is: "
//     }

//     get comm() {
//         return "Your liczba is less than 10"
//     }

//     sum() {
//         return 2 + 6
//     }

//     mnozenie(){
//         return 4 * 5
//     }

//     endResult(endValue){
//         console.log(this.title + " " + endValue)
//         if (endValue < 10) {
//             console.log(this.comm);
//         }
//     }
// }




// Tworzenie obiektu do inicjalizacji metody

const doShowName = new ShowName('Avalogy','ZelQA');
console.log(doShowName.shownName())
// console.log(doMath.endResult(doMath.mnozenie()))