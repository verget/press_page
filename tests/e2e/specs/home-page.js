// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('.image-container').find('img').should('have.attr', 'src').should('include', 'logo')
    cy.get('.button-container').find('a').should('have.attr', 'href').should('include', 'users')
  })

  it('Can navigate to users page', () => {
    cy.visit('/')
    cy.get('.button-container').find('button').click();
    cy.location('pathname').should('match', /\/users$/);
  })
})
