/// <reference types="Cypress" />

describe('API testing', () => {
  it('api testing GET with status code', () => {
    cy.request('https://reqres.in/api/users/3').as('chl')
    cy.get('@chl').its('status').should('equal',200)

  })  
})

describe('Get API user requsts', () => {
  it('Get Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers:{
        'authorization':'Bearer YOUR_ACCESS_TOKEN'
      }
    })
    
  })
  
})