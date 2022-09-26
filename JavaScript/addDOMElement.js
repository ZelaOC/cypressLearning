// Create new element on page

const formContact = document.querySelector("form");
const divBand = document.querySelector("div#band");

const newDivElement = document.createElement("div");

newDivElement.style.width = "100px";
newDivElement.style.height = "100px";
newDivElement.style.background = "Pink";

const newParagrafElement = document.createElement("p");

newParagrafElement.innerText = "My newly created Paragraf element"

console.log(newParagrafElement);
console.log(newDivElement);

// Insert created new element into HTML (DOM)

formContact.appendChild(newDivElement);
divBand.appendChild(newParagrafElement);

// AppendChild - new element are always added at the end of parent element
