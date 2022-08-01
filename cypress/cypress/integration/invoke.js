/// <reference types="cypress"/>

describe("E2E - We learn how to use invoke method", () => {
    it("Invoke", () =>{
        cy.visit("/")

        //Pierwszy sposób wykorzystania metody invoke
        cy.get('[title="Contact Us"]').invoke("text").then(tekst =>{
            cy.log(tekst);
        })

        //Drugi sposob wykorzystania metody invoke, uzyskanie dostepu do wartosci atrybuty
        cy.get('[title="Contact Us"]').invoke("attr","href").then(link =>{
            cy.log(link);
        })

        cy.get('[title="Contact Us"]').invoke("attr","title").then(title =>{
            cy.log(title);
        })

        //Pobieranie wartości value
        cy.get('#search_query_top').type("Przykładowa wartość").invoke("prop","checked").then(value =>{
            cy.log(value);
        })
    })
})