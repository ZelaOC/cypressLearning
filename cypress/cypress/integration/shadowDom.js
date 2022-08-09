/// <reference types="cypress"/>

describe("E2E - We learn how to click on element in Shoadowdom", () => {
    it("Click on element with method shadow", () =>{
        cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm");
        // cy.contains("File"); //it works only when whe have true value for shadowdom in cypress.json
        cy.get(".smart-ui-component").shadow().contains("File").click();
    })
})
