/// <reference types="Cypress" />


describe('Get API user requsts', () => {
  let accessToken = '751646e81088eebda18943ad7f27ca864e24fe1fa695fb0652a0eace7308869e'
  it('Get Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers:{
        'authorization':'Bearer '+ accessToken
      }
    }).then((res)=>{
      expect(res.status).to.eq(200)
      expect(res.body.meta.pagination.limit).to.eq(20)
    })
    
  })
  
})