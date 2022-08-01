/// <reference types="cypress"/>

describe("E2E - We learn how to test checkoboxes on front", () => {
    it("Checkbox", () =>{
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get("#ul_layered_category_0").find("input").then(input =>{
            cy.get(input).eq(0).check();
            cy.get(input).eq(1).check().invoke("prop","checked").then(check =>{
                cy.log(check);
            });
        })

        cy.get("#ul_layered_id_attribute_group_1").find("input").check();
    })
})