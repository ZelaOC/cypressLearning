/// <reference types="cypress"/>

describe("E2E - We learn how to use assertion", () => {
    it("We use excpect or should assertion", () =>{
        cy.visit("/")

        //First example, text veryfication.
        cy.get('a[title="Contact Us"]').should("contain","Contact us");

        //Second example
        cy.get('a[title="Contact Us"]').then(tab =>{
            expect(tab).to.contain("Contact us")
        })

        //Third example, asertion check if geted element not to contain text "Contact US"
        cy.get('a[title="Contact Us"]').should("not.contain","Contact Us")

        //Fouthr example, asertion check if geted element not to contain text "Contact US"
        cy.get('a[title="Contact Us"]').then(getingTab =>{
            expect(getingTab).not.to.contain("Contact Ss")
        })

        //Fifth example, if geted element contain expected class
        cy.get("#search_query_top").should("have.class","search_query")

        //Sixth example, if geted element contain expected class
        cy.get("#search_query_top").then(getElement =>{
            expect(getElement).to.have.class("search_query")
        })

        //Seventh example, if our element is visible
        cy.get("#search_query_top").should("be.visible");

        //Eight example, if our element is visible
        cy.get("#search_query_top").then(getSecondElement =>{
            expect(getSecondElement).to.be.visible;
        })

        //Ninght example, we check number of geted elements are correct
        cy.get("ul.sf-menu").find("li").should("have.length", 14)

        //Tenth example, we check number of geted elements are correct
        cy.get("ul.sf-menu").find("li").then(thirdElement =>{
            expect(thirdElement).to.have.length(14);
        })

        //Eleventh example, we check if geted css value is correct
        cy.get("#search_query_top").should("have.css","line-height", "45px")

        //Twelth example, we check if geted css value is correct
        cy.get("#search_query_top").then(getCSS =>{
            expect(getCSS).to.have.css("line-height", "45px")
        })

    })

})