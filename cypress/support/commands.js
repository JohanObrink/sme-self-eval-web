Cypress.Commands.add('question', (number) => {
  return cy.get('.question').eq(number)
})

Cypress.Commands.add('validate', { prevSubject: true }, (subject) => {
  cy.wrap(subject).within(() => {
    cy.get('input[type="radio"]').should('have.length', 3)
  })
  return cy.wrap(subject)
})

Cypress.Commands.add('answer', { prevSubject: true }, (subject, index) => {
  cy.wrap(subject).within(() => {
    cy.get('label').eq(index).click()
  })
  return cy.wrap(subject)
})

Cypress.Commands.add('next', () => {
  cy.get('button').contains('Nästa').click()
})

Cypress.Commands.add('previous', () => {
  cy.get('button').contains('Tillbaka').click()
})

Cypress.Commands.add('finish', () => {
  cy.get('button').contains('Slutför').click()
})
