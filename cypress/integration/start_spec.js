/// <reference types="cypress" />

describe('Start page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('renders', () => {
    cy.get('h1').should($h1 =>
      expect($h1.first().text()).to.have.length.greaterThan(5)
    )
  })
  it('navigates to test', () => {
    cy.get('button').contains('Starta verktyget').click()
    cy.url().should('match', /\/test$/)
  })
})
