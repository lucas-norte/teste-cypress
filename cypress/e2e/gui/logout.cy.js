describe('Logout', () => {
    beforeEach(() => {
      cy.login()
    })
  
    it('successfully', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/login`)
    //   cy.contains('.title > span', 'Bem-vindo ao')
    })
  })
  