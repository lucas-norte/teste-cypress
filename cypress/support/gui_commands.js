Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
) => {
    const login = () => {

        cy.intercept('GET', '**/v3/user/routes?brand=*').as('getRoutes');

        cy.visit('/login');
        cy.get('[data-cy="login-form-email"]').should('be.visible').type(user)
        cy.get('[data-cy="btn-login-submit"]').should('be.visible').click()

        cy.get('[data-cy="login-form-password"]').should('be.visible').type(password, { log: false })
        cy.get('[data-cy="btn-login-submit"]').should('be.visible').click()

        cy.document().its('readyState').should('equal', 'complete');
        cy.wait('@getRoutes');
    }

    const validate = () => {
        cy.location('pathname', { timeout: 1000 })
            .should('not.eq', '/login')
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) {
        cy.session(user, login, options)
    } else {
        login()
    }

});

Cypress.Commands.add('logout', () => {
    cy.get('.nav-sidebar').should('be.visible').trigger('mouseenter')
    cy.get('.customScrollBar', { timeout: 10000 }).should('be.visible');
    cy.contains('Logout').should('be.visible').click()
});
