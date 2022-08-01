/// <reference types="cypress"/>

describe("E2E - We learn how to select some values from list", () => {
    it("Click select option form list", () =>{
        cy.visit("/index.php?id_category=3&controller=category")

        // Pierwszy sposob wybierania opcji z listy po nazwie
        cy.get("#selectProductSort").select("In stock")

        // Pobieranie po wartosci
        cy.get("#selectProductSort").select("price:asc")

        // Pobieranie wartosci po indeksach
        cy.get("#selectProductSort").select(7)


    })

        // Wybieranie wszystkich opcji jednym zapytaniem
    it.only("Click all avaibe option from list", () =>{
        cy.visit("/index.php?id_category=3&controller=category")

        cy.get("#selectProductSort").then(select =>{
            cy.wrap(select).find("option").each(item =>{
                cy.wrap(select).select(item.text());
            })
        })
    })
})