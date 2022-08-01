/// <reference types="cypress"/>

describe("E2E - We learn how to upload files into application", () => {
    it("Upload files on demand", () =>{
        cy.visit("/index.php?controller=contact")

        cy.get("#fileUpload").attachFile("../fixtures/kotek_zaba.jpg");
        cy.get("span.filename").should("contain", "kotek_zaba.jpg");
    })
})