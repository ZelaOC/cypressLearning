const h2TheBand = document.querySelector("div#band h2.w3-wide");

console.log(h2TheBand);

// function makeAlert() {
//     alert("TEST ALERT MOVE ALONG!")
// }

// function secondAlert() {
//     if (confirm("Accept the rules")){
//         console.log("User has accepted the rule")
//     } else {
//         console.log("User has decline the rule")
//     }
    
// }

function thirdAler(){
    const userAge = prompt("Enter your age\n Bla", "Your age...")
    console.log("User has : " + userAge);
}

h2TheBand.addEventListener("click", thirdAler)