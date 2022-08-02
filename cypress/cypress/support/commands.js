import "cypress-file-upload";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add("openTshirtsTab", () => {
    cy.visit("http://automationpractice.com/index.php?id_category=5&controller=category");
})

Cypress.Commands.add("searchPharse", (tekst, delayValue) =>{
    cy.get("#search_query_top").type(tekst, {delay: delayValue});
})

Cypress.Commands.add("searchPharseClear", () =>{
    cy.get("#search_query_top").clear();
})

Cypress.Commands.add("incorrectLogin", (incorrectEmail, incPassword) =>{
    cy.get('input[placeholder="Email"]').type(incorrectEmail);
    cy.get('input[placeholder="Password"]').type(incPassword);
    cy.get("button.btn").contains("Sign in").click();
})

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
