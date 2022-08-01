/// <reference types="cypress"/>

describe("E2E - We learn how to put data into element", () => {
    it("Put data into field", () =>{
        cy.visit("/")
        cy.get("#search_query_top").type("Test {enter}") // wybranie elementu o ID(search_query_top) wpisanie w niego tekstu i kliknięcie Entera
        // cy.get("#search_query_top").type("Test {backspace}", {delay: 500ms}) // wybranie elementu o ID(search_query_top) wpisanie w niego tekstu i kliknięcie Backspace (usuniecie ostatniego znaku wpisanego) | 1000 ms to 1 s
    })

    it("Clear data form filed", () =>{
        cy.get("#search_query_top").clear();

    })
})