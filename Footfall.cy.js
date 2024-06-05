describe("Test the Ken Vision - 2 ", () => {
    it("passes", () => {
      
     
      cy.viewport(1800, 1000).visit("http://192.168.24.79:3000");  // Login - Page 
      cy.wait(4000);
      cy.get('#basic_Email').type("admin@caliberinterconnect.net");
      cy.get('#basic_password').type("Caliber@1");
      cy.get('.ant-btn').click();
      cy.wait(8000);

      cy.visit("http://192.168.24.79:3000/Admin/Reports");  // Reports - Menu - Pass  // Search Reports
    
      cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-space > .ant-space-item > .ant-picker > .ant-picker-input > input').click().click();
      cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-space > .ant-space-item > .ant-picker > .ant-picker-input > input').click().click();
      cy.get('#selectedcameralist').click();
      cy.get('#events').click();
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();

      
      cy.visit("http://192.168.24.79:3000/Admin/EventSetup"); // Event Addition - Menu - Fail
      cy.get('.ant-btn').click();
      cy.get('.ant-dropdown-menu-title-content').click();
      cy.contains('.ant-dropdown-menu-item', 'Environment Events').click();
     

      // cy.get('[data-node-key="Environment Events"]').click();
      // cy.get('.ant-btn > :nth-child(3)').click();
      // cy.get('span.ant-dropdown-menu-title-content').contains('Basic Events').click();     

      

        cy.visit('http://192.168.24.79:3000/Admin/PolicyConfig'); // Policy     - Submenu
        cy.get('.ant-btn').click();
        cy.get('#basic_policyName').type('sample2');
        cy.get('#basic_streaming > .ant-switch-handle').click();
        cy.get('#basic_assertOnBoard > .ant-switch-handle').click();
        cy.get('#basic_onBoardLocation > .ant-switch-handle').click();
        cy.get('#basic_sendReportToEmail > .ant-switch-handle').click();
        cy.get('#basic_telegram > .ant-switch-handle').click();
        cy.get('#basic_dashboard > .ant-switch-handle').click();
        cy.get('#basic_map > .ant-switch-handle').click();  
        cy.get('#basic_eventCalender > .ant-switch-handle').click();
        cy.get('#basic_eventSetUp > .ant-switch-handle').click();
        cy.get('#basic_techSupport > .ant-switch-handle').click();  
        cy.get('#basic_notification > .ant-switch-handle').click();
        cy.get('.ant-select-selector').click();
        cy.get('[title="Face Recognition"] > .ant-select-item-option-content').click();
        cy.get('#basic_report > .ant-switch-handle').click();
        cy.get(':nth-child(1) > .ant-btn').click();

        cy.get(':nth-child(5) > .ant-table-filter-column > .ant-dropdown-trigger').click();
        cy.wait(4000);
        cy.get('.ant-btn-primary').click();
      
    cy.get('[path="Configuration"] > .ant-menu-submenu-title').click(); // User Master Submenu
    cy.visit("http://192.168.24.79:3000/Admin/UserMaster");
    cy.wait(2000);
    cy.get('.ant-btn > :nth-child(1)').click();
    cy.get('#basic_username').type('second56');
    cy.get('#basic_vid').type('tester63');
      
      cy.get('.ant-picker-input').click().click();
      cy.get('.ant-picker-year-btn').click();
      cy.get('.ant-picker-header-super-prev-btn').click().click();
      cy.get('[title="2003"]').click();
      cy.contains('.ant-picker-cell-inner','May').click();
      cy.get('[title="2003-05-20"]').click();
      cy.get('#basic_policyName').click();
      cy.get('[title="policytest3"] > .ant-select-item-option-content').click();

      // cy.get('#basic_password').type('Caliber@1');
      // cy.get('#basic_gender > :nth-child(2)').click();
      // cy.get('#basic_email').type('fivestar8956@gmail.com');
      // cy.get('#basic_phone').type('9343766893');
      // cy.get('#basic_role').click();
      // cy.get('[style="height: 384px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click();

      // cy.get('#basic_readonly > .ant-switch > .ant-switch-handle').click();
      // cy.get('#basic_mobile_access > .ant-switch > .ant-switch-handle').click();
      // cy.get(':nth-child(1) > .ant-btn > span').click();


    
      cy.visit("http://192.168.24.60:3000/Admin/Asset_onboarding"); // Asset Onboarding - Submenu

      // New Entry - Value - 1
      cy.get('.ant-btn').click();
      cy.wait(2000);
      cy.get('.ant-dropdown-menu');


      // New Entry - Value - 2
      cy.wait(2000);
      cy.get('#cam_name').type('test');
      cy.get('#location').type('coimbatore');
      cy.get('#rtsp').type('rtsp://admin:abcd@123@192.168.24.36:554/streaming/channels/101');
      cy.get(':nth-child(1) > .ant-btn > span').click();




      //  New Entry - Value - 2
       cy.get('.ant-btn').click();
       cy.get('[data-menu-id="rc-menu-uuid-78881-2-value2"] > .ant-dropdown-menu-title-content').click();

      cy.get('#basic_cam_name').type("s");
      cy.get('#basic_location').type("testing");
      cy.get('#basic_rtsp').type("rtsp://admin:abcd@123@192.168.24.12:554/Streaming/channels/115");
      cy.get('#basic_static_rtsp').type("rtsp://admin:abcd@123@192.168.24.12:554/Streaming/channels/115");
      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();

      // Edit Option
      cy.get('[data-row-key="1"] > :nth-child(6) > .ant-row > .ant-col > .anticon > svg').click();
      cy.get('#name').clear().type('set test');
      cy.get('#rtsp').clear().type('rtsp://admin:abcd@123@192.168.24.12:554/Streaming/channels/122');
      cy.get('#staticrtsp').clear().type('rtsp://admin:abcd@123@192.168.24.12:554/Streaming/channels/122');
      cy.get('#location').clear().type('test location');
      cy.get('.ant-switch-handle').click();
      cy.get('.ant-modal-footer > .ant-btn-primary > span').click();
    

    });

}); 