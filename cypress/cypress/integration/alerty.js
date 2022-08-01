/// <reference types="cypress"/>

describe("E2E - We learn how to check correctly popup alert", () => {
    it("We popup alerts", () =>{
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")

        cy.get("#alert").click();
        cy.on("window:alert", text =>{
            expect(text).to.equal("Przykładowa treść alertu")
        })
    })

    it("Second alert", () =>{
        cy.get("#alert-confirm").click();
        cy.on("window:confirm", text =>{
            expect(text).to.equal("Zaakceptuj aby kontynuować!")
        })

        cy.on("window:confirm", () => true)
    })
})