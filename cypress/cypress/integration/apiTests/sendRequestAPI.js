/// <reference types="cypress"/>

describe("E2E - We learn how to test response from API using cypress", () => {

    beforeEach(function () {
        cy.fixture("example").then(data =>{
            this.apiData = data;
        })

        cy.fixture("popularTags").then(mockedTags =>{
            this.changedTags = mockedTags;
        })
    })

    it("API Test - user authorization, create varibale for token", () =>{

        const userData = {
            "user": {
                "email": "michal_zelga@test.pl",
                "password": "tiki!"
            }
        }

        const articleData = {
            "article": {
                "tagList": [],
                "title": "Now1y A3rt2ykuł",
                "description": "test",
                "body": "tes"
            }
        }

        cy.request("POST", "https://api.realworld.io/api/users/login", userData)
        .its("body").then(tokenResponse =>{
            const authToken = tokenResponse.user.token;

            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: articleData,
                headers: {
                    'authorization' : 'Token ' + authToken
                }  
            }).then(responePost =>{
                expect(responePost.status).to.equal(200);
            })
        })
    })
})