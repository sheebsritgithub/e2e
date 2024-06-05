describe("Test the Ken Vision - 2 ", () => {
  it("passes", () => {
    
    // Login - Page 
    cy.viewport(1800, 1000).visit("http://192.168.24.60:3000");
    cy.wait(4000);
    cy.get('#basic_Email').type("admin@caliberinterconnect.net");
    cy.get('#basic_password').type("Caliber@1");
    cy.get('.ant-btn').click();
    cy.wait(8000);
  

    // Streaming - Menu - It will automatically shows after login 
    
    // Dashboard - Menu
    cy.visit("http://192.168.24.60:3000/Admin/Dashboard");
    cy.wait(4000);
    cy.get(".ant-btn > :nth-child(4)").click();
  
    
  
    // Event Addition - Menu - Fail
    cy.visit("http://192.168.24.60:3000/Admin/EventSetup");
    cy.get('[data-node-key="Environment Events"]').click();
    cy.get('.ant-btn > :nth-child(3)').click();
    cy.get('span.ant-dropdown-menu-title-content').contains('Basic Events').click();
    cy.get('span.ant-dropdown-menu-title-content').contains('Environment Events').click();
    
  
    // Reports - Menu - Pass
    cy.visit("http://192.168.24.60:3000/Admin/Reports");

    // Search Reports
    cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-space > .ant-space-item > .ant-picker > .ant-picker-input > input').click().click();
    cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-space > .ant-space-item > .ant-picker > .ant-picker-input > input').click().click();
    cy.get('#selectedcameralist').click();
    cy.get('#events').click();
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();

    // Sort Order 
    cy.get('.ant-dropdown-trigger').click().click();
    
    // Export to Excel 
    cy.get('[style="display: flex; align-items: center; justify-content: space-between; margin-left: 3%;"] > div > .ant-btn').click();

    // Configuration - Menu

      // Policy Configuration - Submenu
      cy.visit('http://192.168.24.60:3000/Admin/PolicyConfig');
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

      // User Master - Submenu - Pass
        cy.get('[path="Configuration"] > .ant-menu-submenu-title').click();
        cy.visit("http://192.168.24.60:3000/Admin/UserMaster");
        cy.wait(2000);
        cy.get('.ant-btn > :nth-child(1)').click();
        cy.get('#basic_username').type('test');
        cy.get('#basic_phone').type('134376689');
        cy.get('.ant-picker-input').click().click();
        cy.get('.ant-picker-year-btn').click();
        cy.get('.ant-picker-header-super-prev-btn').click().click();
        cy.get('[title="2003"]').click();
        cy.contains('.ant-picker-cell-inner','May').click();
        cy.get('[title="2003-05-20"]').click();
        cy.get('#basic_gender > :nth-child(2)').click();
        cy.get('#basic_vid').type('tester23');
        cy.get('#basic_password').type('Caliber@1');
        cy.get('#basic_policyName').click().click();
        cy.get('#basic_readonly > .ant-switch > .ant-switch-handle').click();
        cy.get('#basic_mobile_access > .ant-switch > .ant-switch-handle').click();
        cy.get(':nth-child(1) > .ant-btn > span').click();   
    
    
  
      // Asset Onboarding - Submenu

        cy.visit("http://192.168.24.60:3000/Admin/Asset_onboarding");

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


      // Notification Control - Submenu

  
        cy.visit("http://192.168.24.60:3000/Admin/NotificationControl");
        

        // New Entry  
        cy.get('.adduser').click();
        cy.get('#rc_select_0').click().click();
        cy.get('#rc_select_1').click().click();
        cy.get('#rc_select_2').click().click();
        cy.get('#rc_select_3').click().click();
        cy.get('.ant-btn').click();


        cy.contains('.ant-select-item-option-content','blue').click();
        cy.wait(4000);
        cy.get('#basic_events').click().click();
        cy.get(':nth-child(3) > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click().click();
        cy.get(':nth-child(4) > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click().click();
        cy.get(':nth-child(5) > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click().click();
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();

      // User Access - Submenu
        cy.visit("http://192.168.24.60:3000/Admin/UserAccess");
        cy.get('#rc_select_0').click().click();
        cy.get('#rc_select_1').click().click();
        cy.get('#rc_select_2').click().click();
        cy.get('#rc_select_3').click().click();
        cy.get('.ant-btn').click();
        
      // 3 dots - Menu
      cy.get('.ant-menu-overflow-item-rest > .ant-menu-submenu-title').trigger("mousemove").click();
      cy.wait(4000);

    // Activity Calender - Menu
    cy.visit("http://192.168.24.60:3000/Admin/Calendar");
    cy.wait(3000);

    
    cy.get('.ant-picker-calendar-year-select > .ant-select-selector').click();
    cy.get('[title="2018"] > .ant-select-item-option-content').click();
    cy.get('.ant-picker-calendar-month-select > .ant-select-selector').click();
    cy.get('[title="Jul"] > .ant-select-item-option-content').click();



    // Access Control - Menu
    cy.visit("http://192.168.24.60:3000/Admin/CameraAccess");
    cy.get('#basic_username').click().click();
    cy.get('.dropdown-heading-value').click().click();
    cy.get('.ant-btn').click();

    // Tech Support - Menu
    cy.viewport(1920,1080).visit("http://192.168.24.60:3000/Admin/TechSupport");

    // Adding Tech Support
    cy.get('#subject').type("first test"); 
    cy.get('#priority').click();
    cy.contains('.ant-select-item-option-content','High').click();
    cy.get('#contact').type('98595147');
    cy.get('.editorClassName').type('Ken vision sample test');
    cy.get("input[type=file]").attachFile("Butterfly.jpeg");
    cy.wait(4000);
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();

    // Accessing Grid Records
    cy.get('[data-row-key="1"] > .ant-table-row-expand-icon-cell > .ant-table-row-expand-icon').click().click();
    cy.get('[data-row-key="1"] > :nth-child(8)').click();
    cy.wait(2000);
    cy.get('.ant-picker').click();
    cy.get('.ant-picker-presets > ul > :nth-child(2)').click();


    // Log Out - Menu
    cy.get('.anticon.anticon-logout').click();

  });

}); 