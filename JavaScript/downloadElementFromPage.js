console.log("Działa")

// First example download emlements form website querySelector

const h2Band =  document.querySelector("div#band h2.w3-wide");
console.log(h2Band);

const divBand = document.querySelector("div#band");
console.log(divBand);

const mediaIcon = document.querySelector("footer.w3-container i:nth-child(3)");
console.log(mediaIcon);

const firstSimpleDiv = document.querySelector("div");

// Second example - querySelectorAll

const secondSimpleDiv = document.querySelectorAll("div");

console.log(firstSimpleDiv);
console.log(secondSimpleDiv);

// Third example - getElementByClassName

const specialButton = document.getElementsByClassName("special");
console.log(specialButton);

// Fourth example - getElementByID

const divNavDemo = document.getElementById("navDemo");
console.log(divNavDemo);

// Fifth example - getElementByTagName

const imgElement = document.getElementsByTagName("img");
console.log(imgElement);