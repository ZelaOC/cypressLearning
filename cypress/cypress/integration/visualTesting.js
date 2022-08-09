/// <reference types="cypress"/>

describe("E2E - We learn how test visual regresion", () => {
    it("We veryfi elements", () =>{
        cy.visit("https://picsum.photos/")
        cy.percySnapshot();
    })
})