const h2Band = document.querySelector("div#band h2.w3-wide");
const navBandBar = document.querySelector("div.w3-bar");
let h2BandSwitch = false;

h2Band.addEventListener("click", function() {
    // Change the color of selected element

    if(h2BandSwitch === false){

        this.style.color = "Purple"
        this.style.fontSize = "60px";
        

    } else {

        this.style.color = "Black"
        this.style.fontSize = "28px";
    }

    h2BandSwitch = !h2BandSwitch;

    // Second example how to change css style on selected element, this case will override existed css style.

    // this.style = "text-decoration: underline";
})

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if(window.scrollY < 350){
        navBandBar.style.background = "Pink";
    } else {
        navBandBar.style.background = "Purple";
    }
})