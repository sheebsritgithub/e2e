describe("Test the Ken Apparel Live ", () => {
  
    it("passes", () => {

    // Login

    cy.viewport(1400, 1000).visit('http://139.59.25.206:3000');
    cy.wait(3000);
    cy.get("#basic_Email").type("admin@caliberinterconnect.net");
    cy.get("#basic_password").type("Caliber@1");
    cy.get(".ant-btn").click();
    cy.wait(5000);

    // cy.get('[style="margin-left: -15px; margin-right: -15px; row-gap: 30px;"] > .ant-col-xs-23 > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title > .ant-row-space-between > :nth-child(2) > .ant-picker > .ant-picker-input > input').click();
    // cy.get('[title="2024-06-01"] .ant-picker-cell-inner').click(); // Ingress and Egress counts per hour Date Selection

    // cy.get('.ant-col-sm-18 > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title > .ant-row > :nth-child(2) > .ant-picker > .ant-picker-input > input').click();
    // cy.get('[title="2024-06-02"] .ant-picker-cell-inner').click(); // Dwell time Date Selection


    cy.get('[style="margin-left: -10px; margin-right: -10px; row-gap: 30px;"] > .ant-col-sm-20 > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title > .ant-row > :nth-child(2) > .ant-flex > .ant-btn').click();
    cy.get('.ant-dropdown-menu-title-content').click();
    
    
    // cy.scrollTo('bottom'); // Page scroll down

    // cy.get('.ant-btn > span').click(); // Download Button

    // cy.visit('http://139.59.25.206:3000/Admin/Reports')
    // cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-space > .ant-space-item > .ant-picker > .ant-picker-input > input').click();
    // cy.get('.ant-picker-input').click().type('2024-06-01');
    // cy.get('[title="2024-05-26"] .ant-picker-cell-inner').click();
    // cy.wait(2000);
  



    //   cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-space > .ant-space-item > .ant-picker > .ant-picker-input > input').click();
    //   cy.get('[title="2024-06-01"] .ant-picker-cell-inner').click();
    //   cy.wait(2000);
    //   cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-space > .ant-space-item > .ant-picker > .ant-picker-input > input')
    //   cy.get('ant-picker-panel-container> .ant-picker-panel-layout> :nth-child(1)> .ant-picker-panel> .ant-picker-date-panel> .')
    //   cy.get('ant-picker-panel-container> .ant-picker-panel-layout> :nth-child(1)> .ant-picker-panel> .ant-picker-date-panel> .ant-picker-body> .content> tbody> :nth-child(2)> [title="2024-06-03"]> ..ant-picker-cell-inner')


    // cy.get('#selectedcameralist').click();
    // cy.get('[title="Shopping Area 1"] > .ant-select-item-option-content').click();
    // cy.get('#events').click();
    // cy.get(':nth-child(5) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item > .ant-select-item-option-content').click();
    // cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    // cy.get(':nth-child(2) > .ant-btn').click(); // Export to xlsx
    // cy.wait(2000);
    // cy.get(':nth-child(1) > [style="margin-left: -5px; margin-right: -5px; row-gap: 10px;"] > .ant-col-sm-24').click();
    // cy.get('.ant-spin-container').click();
    // cy.get('.ant-pagination-item-2 > a').click();  // MOve to Next Page 


  });

});  