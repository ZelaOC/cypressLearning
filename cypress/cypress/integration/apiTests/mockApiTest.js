/// <reference types="cypress"/>

describe("E2E - We learn how to mock response from API for test purpose", () => {

    beforeEach(function () {
        cy.fixture("example").then(data =>{
            this.apiData = data;
        })

        cy.fixture("popularTags").then(mockedTags =>{
            this.changedTags = mockedTags;
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

    // it("Second API Test - checking that user can correct log into application and gets 200", function (){

    //     cy.intercept("POST", "https://api.realworld.io/api/users/login").as("userLogIn");
    //     cy.userLogin("michal_zelga@test.pl", "tiki!");
    //     cy.wait("@userLogIn");
    //     cy.get("@userLogIn").then(responseCode => {
    //         console.log(responseCode);
    //         expect(responseCode.response.statusCode).to.eq(200);
    //         expect(responseCode.response.statusMessage).to.contain(this.apiData.statusMessage200);  
    //     })
    // })

    it("Second API Test - checking that user can correct log into application and we mock response for geted tags", function (){

        cy.intercept("GET", "https://api.realworld.io/api/tags", { fixture: 'popularTags.json'}).as("requestPopularTag");
        cy.userLogin("michal_zelga@test.pl", "tiki!");
        cy.wait("@requestPopularTag");
        cy.get("@requestPopularTag").then(responseTags => {
            expect(responseTags.response.statusCode).to.eq(200);
            expect(responseTags.response.body.tags).to.contain(this.changedTags.tags[0]).and.to.contain(this.changedTags.tags[1]).and.to.contain(this.changedTags.tags[2]).and.to.contain(this.changedTags.tags[3]); 
        })
    })
})