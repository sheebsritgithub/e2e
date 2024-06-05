
describe("Test the application ", () => {
  it("passes", () => {
    //Login
    cy.viewport(1200, 800).visit('http://192.168.24.73:3000');
    cy.wait(3000);
    cy.get("#basic_Email").type("admin@caliberinterconnect.net");
    cy.get("#basic_password").type("Caliber@1");
    cy.get(".ant-btn").click();
    cy.wait(5000);

    // Home - Menu 
    cy.get(".ant-menu").trigger("mousemove").click();
    cy.wait(4000);

    // Dashboard - Menu
    // cy.visit("http://192.168.24.73:3000/Admin/Dashboard");

    // Reports - Menu
    // cy.visit("http://192.168.24.73:3000/Admin/Reports");

    // User Master - Menu
    cy.visit("http://192.168.24.73:3000/Admin/User");


    function triggerNotificationAlert() {
      triggerNotificationAlert();
    // cy.get('.btn.btn-default').click();
    cy.get('.btn').click();
    }


    // New Entry - Mandatory fields
    cy.get('#basic_username').type("samples test");
    cy.get('#basic_email').type("hiloyr@gmail.com");
    cy.get('#basic_phone').type("32490845985");
    cy.get('#basic_role').click();
    cy.contains('div.ant-select-item-option-content','Security').click();
    cy.wait(2000);
    cy.get('#basic_password').type("Caliber@1");

    // New Entry - Not a Mandatory fields 
    cy.get('#basic_readonly > .ant-switch-handle').click();
    cy.get('#basic_mobile_access > .ant-switch-handle').click();
    cy.get('.ant-picker-input').click().type('2000-05-25');
    cy.get('#basic_gender > :nth-child(2)').click();
    cy.get('#basic_vid').type("18563");

    // Click Button
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();

    // Edit option
    cy.get('[data-row-key="3"] > :nth-child(8) > .ant-row > .ant-col-3 > .ant-col-offset-5 > .anticon > svg > path').click();
    cy.get('#name').clear().type("sample");
    cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.contains('div.ant-select-item-option-content', 'Manager').click();
    cy.get('#readonly > .ant-switch-handle').click();
    cy.get('#phone').clear().type("859632147");
    cy.get('#mobile_access > .ant-switch-handle').click();
    cy.get('#mobile_reason').type("test");
    cy.get('#block > .ant-switch-handle').click();
    cy.get('#blocked_Reason').type("testing");
    cy.get('.ant-modal-footer > .ant-btn-primary > span').click();

    // Delete option
    cy.get('[data-row-key="10"] > :nth-child(8) > .ant-row > .ant-col-3 > :nth-child(2) > .anticon > svg').click();//change [data-row-key="9"] number value based on new entry
    cy.get('#DeleteReason').type("test");
    cy.get('.ant-modal-footer > .ant-btn-primary').click();
    cy.get('.ant-btn-dangerous > span').click();
    cy.visit("http://192.168.24.60:3000/Admin/Calendar");
    cy.get('.fc-next-button > .fc-icon').click().click().click();
    cy.get('.fc-prev-button > .fc-icon').click();

  //   Activity Calender - Menu
    cy.visit("http://192.168.24.73:3000/Admin/Calendar");
    v-button > .fc-icon').click();
    cy.get('.fc-next-button > .fc-icon').click().click();
    cy.get(':nth-child(3) > .fc-day-mon > .fc-daygrid-day-frame > .fc-daygrid-day-top').click();
  //   Accessing Calender Elements
    cy.get('.fc-prev-button > .fc-icon').click();
    cy.get('.fc-next-button > .fc-icon').click().click();
    cy.get(':nth-child(3) > .fc-day-mon > .fc-daygrid-day-frame > .fc-daygrid-day-top').click();


  //   Asset onboarding - Menu
   cy.visit("http://192.168.24.73:3000/Admin/Asset_onboarding");

  //  New Entry
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

  // Event Setup - Menu
  cy.visit("http://192.168.24.73:3000/Admin/EventSetup");

  // New Entry
  cy.get('#basic_cameralist > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow').click();
  cy.get(':nth-child(3) > .select-item > .item-renderer > input').should('be.visible') // Wait for the checkbox to be visible.check();
  cy.get('#basic_cameralist > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow').click();
  cy.get('#basic_events > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow').click();
  cy.get(':nth-child(6) > .select-item > .item-renderer > input').should('be.visible').check();
  cy.get('#basic_events > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-dropdown-arrow').click();
  cy.get('#basic_threshold').click();
  cy.get('[title="0.15"] > .ant-select-item-option-content').click();
  cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
  cy.wait(4000);

  
  // Delete Option
  cy.get(':nth-child(2) > :nth-child(5) > .ant-row > :nth-child(2)').click();
  cy.get('.ant-btn-dangerous > span').click();
  // Move to Environment Events
  cy.get('[data-node-key="null"]').click();
  cy.get('[data-node-key="Environment Events"]').click();

  // Access Control - Menu
  cy.visit("http://192.168.24.60:3000/Admin/CameraAccess");
  cy.get('#basic_username').click();
  cy.get('.ant-typography-secondary').click();
  cy.get('.dropdown-heading-value').click();
  cy.get('li > .select-item > .item-renderer > input').click();
  cy.get('.dropdown-heading-value').click();
  cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();

  // Delete Option
  cy.get('.ant-table-row > [style="text-align: center;"]').click();
  cy.get('.ant-btn-dangerous > span').click();

  // Notification Control - Menu
  cy.visit("http://192.168.24.73:3000/Admin/NotificationControl");

  // New Entry  
  cy.get('#basic_cameralist').click();
  cy.contains('.ant-select-item-option-content','entrance').click();
  cy.wait(4000);
  cy.get('#basic_events').click();
  cy.contains('.ant-select-item-option-content', 'Footfall').click();
  cy.get(':nth-child(3) > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
  cy.get('h5.ant-typography').click();
  cy.get('.ant-col-xl-16').click();
  cy.get(':nth-child(4) > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
  cy.get('h5.ant-typography').click();

  // Assuming you have multiple elements
  cy.get('h5.ant-typography').click({ multiple: true });
  cy.wait(2000);

   cy.get('yre').click();
  cy.get('.ant-col-xl-16').click();
  cy.get(':nth-child(5) > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
  cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();


  // Train Assets - Menu
  cy.viewport(1920,1080).visit("http://192.168.24.73:3000/Admin/Train_asset");

  // Face Recognition
  cy.get("input[type=file]").attachFile("Butterfly.jpeg");
  cy.get('.ant-input').type("sampletest");
  cy.get('.text-center > .ant-btn > span').click();

  // Anomaly
  cy.get('#rc-tabs-0-tab-3').click();
  cy.get('#addimage_camera').click(); 
  cy.get('.ant-picker').click();
  cy.get('.ant-picker-presets > ul > :nth-child(2)').click();
  cy.get('.ant-form-item-control-input-content IT Compliance> .ant-btn > span').click();
  

  // Tech Support - Menu
  cy.viewport(1920,1080).visit("http://192.168.24.73:3000/Admin/TechSupport");

  //Adding Tech Support
  cy.get('#subject').type("first test"); 
  cy.get('#priority').click();
  cy.contains('.ant-select-item-option-content','High').click();
  cy.get('#contact').type('198595147');
  cy.get('.editorClassName').type('Ken vision first test');
  cy.get("input[type=file]").attachFile("Butterfly.jpeg");
  cy.wait(4000);
  cy.get('.ant-form-item-control-input-content > .ant-btn').click();


  cy.get('ant-select-item-option').type('Ken Vision second test');
  cy.get('Butterfly  ')

  // Accessing Grid Records
  cy.get('[data-row-key="12"] > .ant-table-row-expand-icon-cell > .ant-table-row-expand-icon').click().click();
  cy.get('[data-row-key="13"] > :nth-child(8)').click();
  cy.wait(2000);
  cy.get('.ant-picker').click();
  cy.get('.ant-picker-presets > ul > :nth-child(2)').click();

  // Log Out - Menu
  cy.get('.anticon.anticon-logout').click({ force: true });

  });
}); 