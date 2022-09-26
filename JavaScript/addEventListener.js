const h2TheBand = document.querySelector("div#band h2");

//Anonymus function
// h2TheBand.addEventListener("click", () =>{
//     console.log("The H2 element is clicked");
// })

h2TheBand.addEventListener("click", showText);

function showText() {
    console.log("The H2 element is clicked");
}

// With arrow function there in this is returnet parent of p3, function will return in this our element

const p3Justyfi = document.querySelector("p.w3-justify");

// p3Justyfi.addEventListener("click", function (){
//     console.log(this);
// })

// p3Justyfi.addEventListener("click", () =>{
//     console.log(this);
// })

// Event 

p3Justyfi.addEventListener("click", event =>{
        console.log(event.clientX);

        if(event.clientX > 500){
            console.log("Value of atribute cilent X is higher than 500 and its value is : " + event.clientX)
        } else {
            console.log("Value of atribute cilent X is lover than / or even 500 and its value is : " + event.clientX)
        }
    })
    
// Mouseover and mouseout

const buyButton = document.querySelector("#BuySfTicket");

buyButton.addEventListener("mouseover", () =>{
    console.log("Mouse is over the button!")
})

buyButton.addEventListener("mouseout", event =>{
    console.log(event);
})

// Prevent default

const testContact = document.querySelector("Form");

testContact.addEventListener("submit", event =>{
   event.preventDefault();
})

const aBand = document.querySelector("div.w3-bar a[href='#contact']");

aBand.addEventListener("click", event =>{
    event.preventDefault();
})

// keydown, keyup

const inputName = document.querySelector("input[name='Name'");

inputName.addEventListener("keydown", e =>{
    console.log(e)
})

inputName.addEventListener("keyup", () =>{
    console.log("It is working!")
})

// scroll

window.addEventListener("scroll", event  =>{
    console.log(event);
})