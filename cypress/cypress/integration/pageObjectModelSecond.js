/// <reference types="cypress"/>

import AlertPage from "../support/PageObjectModel/alertPage";

describe("E2E - We learn how to check correctly popup alert", () => {
    it("We popup alerts", () =>{
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")

        AlertPage.clickFirstButton();
        AlertPage.veryfiFirstAlertText("Przykładowa treść alertu");

    })

    it("Second alert", () =>{
        
        AlertPage.clickSecondButton();
        AlertPage.veryfiSecondAlertText();
        AlertPage.acceptAlert();

    })
})