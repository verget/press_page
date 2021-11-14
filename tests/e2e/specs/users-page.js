// https://docs.cypress.io/api/introduction/api.html

describe('Users Page', () => {
  it('Visits the /users url', () => {
    cy.visit('/users')
    cy.get('.spinner').should('be.visible')
    cy.wait(1000)
    cy.get('.spinner').should('not.be.visible')
    cy.get('.p-card').should('have.length', 10)
    cy.get('.p-card').first().find('button').click()
    cy.get('.p-card').should('have.length', 9)
  })
})
