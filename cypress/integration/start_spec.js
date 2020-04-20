/// <reference types="cypress" />

describe('Start page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('renders', () => {
    cy.get('h1').contains('Hur påverkas din verksamhet av coronautbrottet?')
  })
  it('navigates to test', () => {
    cy.get('button').contains('Starta verktyget').click()
    cy.url().should('match', /\/test$/)
  })
})
