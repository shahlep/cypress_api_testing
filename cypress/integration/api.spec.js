/// <reference types="Cypress" />

describe('API testing', () => {
  it('api testing GET with status code', () => {
    cy.request('https://reqres.in/api/users/3').as('chl')
    cy.get('@chl').its('status').should('equal',200)

  })  
})