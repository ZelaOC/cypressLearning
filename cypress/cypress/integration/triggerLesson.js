/// <reference types="cypress"/>

describe("E2E - We learn how to trigger", () => {
    it("Moveover on element", () =>{
        cy.visit("/")

        cy.get('a[title="Dresses"]').eq(1).trigger("focus");
        cy.get('a[title="Summer Dresses"]').eq(1).click();
    })

    it("Scroll page to Special category", () => {
        cy.get('p.title_block a[title="Specials"]').scrollIntoView();
    })
})