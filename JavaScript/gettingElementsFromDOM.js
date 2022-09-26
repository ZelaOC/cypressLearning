const loremIpsumText = document.querySelector("div#band p.w3-justify");
const h2BandDiv = document.querySelector("#band");
const paragrafMusic = document.querySelector("p.w3-opacity");
const parisImg = document.querySelector("img.w3-image");
const nameInput = document.querySelector('input[name="Name"]');


// Get element from selected DOM Element (innerText)
const paragrafValue = loremIpsumText.innerText;
const bandDivValue = h2BandDiv.innerText;

// Get element from selected DOM Element (innerHTML), it return us value with html operators

console.log(paragrafMusic.innerHTML);

// Get value from class

console.log(parisImg.getAttribute("src"));

// Get css style

console.log(parisImg.style.width);

// Geting text from dynamic input

nameInput.addEventListener("keyup", () =>{
    console.log(nameInput.value);
})

console.log(paragrafValue);
console.log(bandDivValue);