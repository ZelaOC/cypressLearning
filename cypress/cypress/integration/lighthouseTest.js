describe ("We check if lighthouse works propelty", () =>{
    it("First test", () =>{
        cy.visit("https://testowanie-oprogramowania.pl/")
        cy.lighthouse({
        performance: 85,
        accessibility: 100,
        "best-practices": 85,
        seo: 85,
        paw: 100,
        });
    })
})