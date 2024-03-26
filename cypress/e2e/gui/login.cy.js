describe('Login', () => {
  it('successfully via GUI', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }
    
    cy.login(user, password, options)

    cy.get('.nav-breadcrumb-container').should('be.visible')
    
  })
})
