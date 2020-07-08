/// <reference types="cypress" />

describe('Test', () => {
  beforeEach(() => {
    cy.visit('/test')
  })
  it('renders', () => {
    cy.get('h1').contains('Testa din verksamhet')
  })
  describe('Step 1', () => {
    beforeEach(() => {
      cy.question(0).validate().answer(0)
      cy.question(1).validate().answer(1)
      cy.question(2).validate().answer(0)
      cy.question(3).validate().answer(1)
      cy.next()
    })
    it('has the correct headline and number of questions', () => {
      cy.get('h2').contains('Egna åtgärder – verksamheten 1 av 2')
      cy.get('.question').should('have.length', 4)
    })
    describe('Step 2', () => {
      beforeEach(() => {
        cy.question(0).validate().answer(0)
        cy.question(1).validate().answer(1)
        cy.question(2).validate().answer(0)
        cy.next()
      })
      it('has the correct headline and number of questions', () => {
        cy.get('h2').contains('Egna åtgärder – verksamheten 2 av 2')
        cy.get('.question').should('have.length', 3)
      })
      it('allows navigation previous', () => {
        cy.previous()
      })
      describe('Step 3', () => {
        beforeEach(() => {
          cy.question(0).validate().answer(0)
          cy.question(1).validate().answer(1)
          cy.question(2).validate().answer(0)
          cy.next()
        })
        it('has the correct headline and number of questions', () => {
          cy.get('h2').contains('Egna åtgärder – personalen')
          cy.get('.question').should('have.length', 3)
        })
        it('allows navigation previous', () => {
          cy.previous()
        })
        describe('Step 4', () => {
          beforeEach(() => {
            cy.question(0).validate().answer(0)
            cy.question(1).validate().answer(1)
            cy.question(2).validate().answer(0)
            cy.question(3).validate().answer(1)
            cy.next()
          })
          it('has the correct headline and number of questions', () => {
            cy.get('h2').contains('Stödåtgärder från staten')
            cy.get('.question').should('have.length', 4)
          })
          it('allows navigation previous', () => {
            cy.previous()
          })
          describe('Step 5', () => {
            beforeEach(() => {
              cy.question(0).validate().answer(0)
              cy.question(1).validate().answer(1)
              cy.question(2).validate().answer(0)
              cy.question(3).validate().answer(1)
              cy.next()
            })
            it('has the correct headline and number of questions', () => {
              cy.get('h2').contains('Stöd och rådgivning från SEB')
              cy.get('.question').should('have.length', 4)
            })
            it('allows navigation previous', () => {
              cy.previous()
            })
            it('allows finishing', () => {
              cy.finish()
              cy.url().should('match', /\/report\/([a-z1-9]{6})$/i)
            })
          })
        })
      })
    })
  })
})
