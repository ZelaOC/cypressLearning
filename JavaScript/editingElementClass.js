const divBand = document.querySelector("div#band");
const newParagrafElement = document.createElement("p");
const newHrefElement = document.createElement("a");

newParagrafElement.innerText = "My newly created Paragraf element"
newHrefElement.innerHTML = "Redirect to GOOGLE.COM, Move along!"

console.log(newParagrafElement);



// Adding new css class into element on DOM

newParagrafElement.classList.add("active")
newParagrafElement.classList.add("p3-wide")

// Removing css class from element

newParagrafElement.classList.remove("active")

// Setting atribute into element

newHrefElement.setAttribute("href", "https://www.google.com") // first atribute type, second value of atribute

// Remove atribute from element

// newHrefElement.removeAttribute("href")

// Add ID for Element

newHrefElement.id = "googleURI"

divBand.appendChild(newParagrafElement);
divBand.appendChild(newHrefElement);