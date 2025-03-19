describe('My First Test', () => {
  it('Verify title positive test1', () => {
    //step

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.title().should('eq','OrangeHRM')
  
  })
  it('Verify title  test2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //cy.title().should('eq','OrangeHRM123')
  cy.get("input[placeholder='Username']").should('be.visible').type("Admin")
cy.get("input[placeholder='Password']").should('be.visible').type("admin123")
cy.get("button[type='submit']").should('be.visible').click()
})


})