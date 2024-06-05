describe("Test the Ken Vision - 2 ", () => {
    it("passes", () => {
        // Login - Page 
    cy.viewport(1800, 1000).visit("http://192.168.24.53:3000");
    cy.wait(4000);
    cy.get('#outlined-adornment-email-login').type("prasad@gmail.com");
    cy.get('#outlined-adornment-password-login').type("Prasad_3303");
    cy.get('.MuiBox-root > div > .MuiButtonBase-root').click();
    cy.wait(8000);


    // Admin Login


    cy.get('[href="/admin/map"] > .MuiListItemText-root > .MuiTypography-root').click();
    cy.wait(4000);
    cy.get('[href="/admin/users"] > .MuiListItemText-root > .MuiTypography-root').click();
    cy.wait(4000);
    cy.get('[href="/login"] > .MuiListItemText-root > .MuiTypography-root').click();
    cy.wait(4000);



    // User Login 

    // cy.get('[href="/user/wallet"]').click();
    // cy.wait(4000);
    // cy.get('[href="/user/locations"] > .MuiListItemText-root > .MuiTypography-root').click();
    // cy.wait(4000);  
    // cy.get('[href="/user/tariff"]').click();
    // cy.wait(4000);
    // cy.get('[href="/login"] > .MuiListItemText-root > .MuiTypography-root').click();
    // cy.wait(4000);

    });
});