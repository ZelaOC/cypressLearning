class AlertPage {
    get alertFirstButton() {
        return cy.get("#alert");
    }

    get alertSecondButton() {
        return  cy.get("#alert-confirm");
    }

    clickFirstButton() {
        this.alertFirstButton.click();
    }

    clickSecondButton() {
        this.alertSecondButton.click();
    }

    veryfiFirstAlertText(tekst) {
        cy.on("window:alert", text =>{
            expect(text).to.equal(tekst)
        })
    }

    veryfiSecondAlertText() {
        cy.on("window:confirm", text =>{
            expect(text).to.equal("Zaakceptuj aby kontynuować!")
        })
    }

    rejectAlert(){
        cy.on("window:confirm", () => false)
    }

    acceptAlert(){
        cy.on("window:confirm", () => true)
    }



}

export default new AlertPage