describe('My First Test', () => {
  it('Verify title positive test1', () => {
    //step

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.title().should('eq','OrangeHRM')
  
    })
  })
  it('Verify title  test2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //cy.title().should('eq','OrangeHRM123')
  cy.get("input[placeholder='Username']").should('be.visible').type("Admin")
cy.get("input[placeholder='Password']").should('be.visible').type("admin123")
cy.get("button[type='submit']").should('be.visible').click()
cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Dashboard") //assertion
//cy.log('Checking for Dashboard text');

/* assret the elements text content is exactly the given text
//   cy.get("xpath").should('have.text','text)
assert the elements text include given substring string
//   cy.get(xpath).should('include.text,'text)
Check and unchecked a checkbox
//   cy.get('#checkbox').check();
//   cy.get('#checkbox').uncheck();
Select a Dropdown Option
//   cy.get('select').select('Option 1');
Assert Element Visibility
//cy.get('#element').should('be.visible');
Assert Text Content
cy.get('h1').should('contain', 'Welcome');
Assert URL Contains a Specific String
//cy.url().should('include', '/dashboard');

*/
})