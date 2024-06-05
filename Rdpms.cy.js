describe("RDPMS", () => {
    it("passes", () => {
      
      // Login - Page 
      cy.viewport(1800, 1000).visit("http://192.168.24.62:3000/");
      cy.wait(4000);
      cy.get('#basic_Email').type("admin@railways.com");
      cy.get('#basic_password').type("Caliber@1");
      cy.get('.ant-btn').click();
      cy.wait(8000);

      cy.get('#stationDashboard_zonename').click();
      cy.get('[title="Southern Railway"] > .ant-select-item-option-content').click();
      cy.get('#stationDashboard_divisionname').click();
      cy.get('[title="Salem"] > .ant-select-item-option-content').click();
      cy.get('#stationDashboard_stationname').click();
      cy.get('[title="Karaimadai"] > .ant-select-item-option-content').click();
      cy.get('.ant-btn').click();


      cy.get('[style="opacity: 1; order: 1; margin: 0px; background: none;"] > .ant-menu-title-content > a').click();
      cy.get('#rc-tabs-1-tab-2').click();
      cy.get('[style="opacity: 1; order: 2; margin: 0px; background: none;"] > .ant-menu-title-content > a').click();
      

      // cy.get('.adduser').click(); // Add Station
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();
  
      // cy.get(':nth-child(5) > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
      // cy.get('[title="Northern Railway "] > .ant-select-item-option-content').click();
      // cy.get(':nth-child(2) > .top-space > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
      // cy.get('[title="Delhi"] > .ant-select-item-option-content').click();
      // cy.get('#basic_manufacture').type("tester23");
      // cy.get('#basic_serialno').type("85632");
      // cy.get('.ant-row > :nth-child(1) > .ant-btn > span').click();
      // cy.wait(2000);

      // cy.get('[data-node-key="7"]').click(); // Add Station Access
      // cy.wait(2000);
      // cy.get('#rc-tabs-2-panel-7 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_username').click();
      // cy.get('.ant-select-item-option-content').contains('Aravind').click();
      // cy.get('#basic_stationlist').click();
      // cy.contains('.ant-select-item-option-content', 'Abjuganj').click();
      // cy.wait(4000);
      // cy.get('.ant-row > :nth-child(1) > .ant-btn > span').click();


      // cy.get('[data-node-key="3"]').click(); // Add Point Machine
      // cy.get('#rc-tabs-2-panel-3 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();
      // cy.get('#basic_pointmachinename').type('tsample12')
      // cy.get('#basic_manufacture').type('6');
      // cy.get('#basic_serialno').type(84);
      // cy.get('.ant-row > :nth-child(1) > .ant-btn').click()
  

      // cy.get('[data-node-key="4"]').click();// Add Track Circuit
      // cy.get('#rc-tabs-2-panel-4 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();
      // cy.get('#basic_trackname').type('sample')
      // cy.get('#basic_manufacture').type('frst12');
      // cy.get('#basic_serialno').type('tester');
      // cy.get('.ant-row > :nth-child(1) > .ant-btn').click();
   

      // cy.get('[data-node-key="5"]').click();// Add Signal Circuit
      // cy.get('#rc-tabs-2-panel-5 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();
      // cy.get('#basic_signalname').type('TESTER12');
      // cy.get('#basic_aspecttype').click();
      // cy.get('[title="Colour Light Distant Signal"] > .ant-select-item-option-content').click();
      // cy.get('#basic_manufacture').type('First12');
      // cy.get('#basic_serialno').type('154');
      // cy.get('.ant-row > :nth-child(1) > .ant-btn > span').click();


      // cy.get('[data-node-key="11"]').click(); // Add Axle Counter
      // cy.get('#rc-tabs-2-panel-11 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser > span').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();    
      // cy.get('#basic_axlecountername').type('sampletest');
      // cy.get('#basic_manufacture').type('67W');
      // cy.get('#basic_serialno').type('1234');
      // cy.get('.ant-row > :nth-child(1) > .ant-btn').click();
      
  
      // cy.get('[data-node-key="12"]').click(); // Add LC Gate
      // cy.get('#rc-tabs-2-panel-12 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();
      // cy.get('#basic_lcgatename').type('samplelcgate');
      // cy.get('#basic_manufacture').type('54W');
      // cy.get('#basic_serialno').type('786');
      // cy.get('.ant-row > :nth-child(1) > .ant-btn > span').click();


      // cy.get('[data-node-key="9"]').click();  // Add Relay
      // cy.get('#rc-tabs-2-panel-9 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abu Road"] > .ant-select-item-option-content').click();
      // cy.get('#basic_assertsname').click();
      // cy.get('[title="Axle Counter"] > .ant-select-item-option-content').click();
      // cy.get('#basic_assertname').click();
      // cy.get('[title="23"] > .ant-select-item-option-content').click();
      // cy.get('#basic_relayname').type('testrelay');
      // cy.get('#basic_bytelocation').type('857');
      // cy.get('#basic_bitlocation').type('45');
      // cy.get('#basic_manufacture').type('85');
      // cy.get('#basic_serialno').type('48');
      // cy.get('.ant-row > :nth-child(1) > .ant-btn').click();
    


      // cy.get('[data-node-key="8"]').click(); // Add IPS
      // cy.wait(2000);
      // cy.get('#rc-tabs-2-panel-8 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();
      // cy.get('#basic_ipsname').type('ipstest');
      // cy.get('#basic_manufacture').type('manuftest12');
      // cy.get('#basic_serialno').type('15');
      // cy.get('.ant-row > :nth-child(1) > .ant-btn').click();

      // cy.get('[data-node-key="10"]').click();  // Add Battery
      // cy.get('#rc-tabs-2-panel-10 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
      // cy.get('#basic_stationname').click();
      // cy.get('[title="Abohar"] > .ant-select-item-option-content').click();
      // cy.get('#basic_type').click();
      // cy.get('[title="EI"] > .ant-select-item-option-content').click();
      // cy.get('#basic_manufacture').type('manutest');
      // cy.get('#basic_serialno').type('53');
      // cy.get('.ant-row > :nth-child(1) > .ant-btn').click();


      cy.get('[data-node-key="6"]').click();  // Alert Setup
      cy.get('#station').click();
      cy.get('.ant-select-item-option-content').contains('Abohar').click();
      cy.get('#assert').click();
      cy.get('[title="Point Machine"] > .ant-select-item-option-content').click();
      cy.get('#assertname').click();
      cy.get('[title="test18888"] > .ant-select-item-option-content').click();
      cy.get('[data-row-key="3112"] > :nth-child(2) > a').click();


    // cy.get('[data-node-key="7"]').click();
    // cy.get('#rc-tabs-2-panel-7 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
    // cy.get('#basic_username').type('tes')
    // cy.get('#rc-tabs-2-panel-1 > .report-content > .ant-row > .ant-col-sm-8 > div > .adduser').click();
    // cy.get('#basic_stationname').click();
    // cy.get('[data-node-key="3"]').click();
    // cy.get('[data-node-key="4"]').click();
    // cy.get('[data-node-key="5"]').click();
    // cy.get('[data-node-key="11"]').click();
    //   cy.get('[data-node-key="12"]').click();
    //   cy.get('[data-node-key="9"]').click();
    //   cy.get('[data-node-key="8"]').click();
    //   cy.get('[data-node-key="10"]').click();
    //   cy.get('[data-node-key="6"]').click();

    });

});   