/// <reference types="cypress"/>

describe("E2E - First Lesson", () => {
    it("Lokalizatory", () =>{
        cy.visit("")

        //Pobieranie elementu po znaczniku
        cy.get("a");

        //Pobieranie elementu po idetyfikatorze
        cy.get("#search_query_top")

        //Pobieranie elementu po kalsie
        cy.get(".form-control")

        //Pobieranie elementów po atrybucie
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Pobieranie po dokłądniejszy atrybucie z podaniem znacznika
        cy.get('input[placeholder="Search"]')

        //Pobieranie elementów z wykorzystaniem kilku atrybutów
        cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')


    })

    it.only("Lokalizatory_v2", () =>{
        cy.visit("")
        cy.contains("Shop now !")
        cy.contains('[title="Contact Us"]',"Contact us")
        cy.get("li").parent("#home-page-tabs").find("li").eq(1) //wyszukanie elementu li po ID rodzica a nastepnie wskazanie indeksu elementu ktorego chcemy pobrac
        // cy.get("li").parent("#home-page-tabs").find("li").first() //wyszukanie elementu li po ID rodzica a wybierze pierwszy element ktory napotkał
        cy.get("li").parent("#home-page-tabs").find("li").contains("Best Sellers")
    })
})