/// <reference types="cypress"/>

import SelectPage from "../support/PageObjectModel/selectPage"

describe("E2E - We learn how to select Page Object Model ", () => {
    it("Click on element", () =>{
        cy.visit("/index.php?id_category=3&controller=category")

        SelectPage.selectAllOption();

        // cy.get("#selectProductSort").then(select =>{
        //     cy.wrap(select).find("option").each(item =>{
        //         cy.wrap(select).select(item.text());
        //     })
        // })
    })
})