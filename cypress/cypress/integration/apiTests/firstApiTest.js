/// <reference types="cypress"/>

describe("E2E - We learn how to run our first API test", () => {

    beforeEach(function () {
        cy.fixture("example").then(data =>{
            this.apiData = data;
        })
    })

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

    it("First API Test - checking that incorrect login try gets 403 Forbbiden", function (){
        
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("userLogIn");
        cy.get("a.nav-link").contains("Sign in").click();
        cy.userLogin("incorrectLogin", "incorrectPassword");
        cy.wait("@userLogIn");
        cy.get("@userLogIn").then(responseCode => {
            console.log(responseCode);
            expect(responseCode.response.statusCode).to.eq(403);
            expect(responseCode.response.statusMessage).to.contain(this.apiData.statusMessage403);    
        })
    })
})