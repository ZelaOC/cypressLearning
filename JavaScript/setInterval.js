const h2TheBand = document.querySelector("div#band h2");
const colorArray = ["Blue", "Yellow", "Red", "Green", "Magenta", "Purple", "Orange"];
const startInterval = setInterval(changeColorInterval, 500);
let intervalIncrement = 0;

// h2TheBand.addEventListener("click", function(){
//     setInterval(changeColorInterval, 1000)
// })

function changeColorInterval (){
    intervalIncrement++
    if (intervalIncrement === (colorArray.length)){
        clearInterval(startInterval);
    }
    let randomColor = Math.floor(Math.random() * ((colorArray.length - 1) -0)) + 0;
    h2TheBand.style.color = colorArray[randomColor]; 
    console.log(randomColor);
}


