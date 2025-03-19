1. Validate API Response
          cy.request('/api/users').its('status').should('eq', 200);
2.  Login Automation
          cy.get('#username').type('admin');
          cy.get('#password').type('password123');
          cy.get('#login-button').click();
          cy.url().should('include', '/dashboard');
3.  File Upload
          cy.get('input[type="file"]').attachFile('example.jpg');
4. Drag and Drop
          cy.get('#source-element').drag('#target-element');
5. Hover Over an Element
          cy.get('.menu-item').trigger('mouseover');
6. Clear Cookies & Local Storage
          cy.clearCookies();
          cy.clearLocalStorage();
