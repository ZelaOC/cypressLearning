/// <reference types="cypress"/>

describe("E2E - We learn how to click on choosen element", () => {
    it("Click on element", () =>{
        cy.visit("/")

        cy.contains('[title="Contact Us"]', 'Contact us').click();
        cy.get('[title="Return to Home"]').click();
    })
})