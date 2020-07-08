/// <reference types="cypress" />

describe('Report', () => {
  let reportUrl
  before(() => {
    cy.visit('/test')
    // Step 1
    cy.question(0).answer(0)
    cy.question(1).answer(1)
    cy.question(2).answer(2)
    cy.question(3).answer(0)
    cy.question(4).answer(1)
    cy.next()
    // Step 2
    cy.question(0).answer(0)
    cy.question(1).answer(1)
    cy.question(2).answer(2)
    cy.question(3).answer(0)
    cy.next()
    // Step 3
    cy.question(0).answer(0)
    cy.question(1).answer(1)
    cy.question(2).answer(2)
    cy.next()
    // Step 4
    cy.question(0).answer(0)
    cy.question(1).answer(1)
    cy.question(2).answer(2)
    cy.question(3).answer(0)
    cy.next()
    // Step 5
    cy.question(0).answer(0)
    cy.question(1).answer(1)
    cy.question(2).answer(2)
    cy.question(3).answer(0)
    cy.finish()

    cy.wait(1000)
    cy.url().then((url) => (reportUrl = url))
  })
  beforeEach(() => {
    cy.visit(reportUrl)
  })
  it('Shows the correct headline', () => {
    cy.get('h1').contains('Checklista – förslag på åtgärder')
  })
})
