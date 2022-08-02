/// <reference types="cypress"/>

describe("E2E - We learn how to use custom commands", () => {
    it("A practice to use custom commands", () =>{
        cy.openTshirtsTab();
        cy.searchPharse("Random text value", 1200)
        cy.searchPharseClear();
    })
})