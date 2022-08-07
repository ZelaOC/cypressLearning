/// <reference types="cypress"/>

describe("E2E - We learn how to create and use environment variables", () => {
    it("Set new variable", () =>{
        cy.visit(Cypress.env("url"))
    })
})