const h2TheBand = document.querySelector("div#band h2");
const colorPallet = ["blue", "red", "pink", "green"];


h2TheBand.addEventListener("click", function (){
    setTimeout(randomChangeColor, 2000)
    })


function randomChangeColor (){
    let randomNumber = Math.floor(Math.random() * ((colorPallet.length -1) - 0)) + 0;
    h2TheBand.style.color = colorPallet[randomNumber];
    console.log(randomNumber)
}

