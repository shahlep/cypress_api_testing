/// <reference types="Cypress" />


describe('Get API user requsts', () => {
  let accessToken = ''
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