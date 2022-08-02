/// <reference types="cypress"/>

describe("E2E - We learn how to run our first API test", () => {
    it("First API Test - checking loaded popular tag", () =>{
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestPopularTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestPopularTag");
        cy.get("@requestPopularTag").then(response =>{
            console.log(response)
            expect(response.response.statusCode).to.eq(200);
            expect(response.response.body.tags).to.contain("welcome").and.to.contain("introduction");
        })
    })

    it("First API Test - checking that incorrect login try gets 403 Forbbiden", () =>{
        
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("incorrectLogIn");
        cy.get("a.nav-link").contains("Sign in").click();
        cy.incorrectLogin("incorrectLogin", "incorrectPassword");
        cy.wait("@incorrectLogIn");
        cy.get("@incorrectLogIn").then(responseCode => {
            console.log(responseCode);
            expect(responseCode.response.statusCode).to.eq(403);
            expect(responseCode.response.statusMessage).to.contain("Forbidden");
        })
    })
})