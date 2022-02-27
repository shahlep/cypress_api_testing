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
      //expect(res.body.meta.pagination.limit).to.eq(20)
    })
    
  })
  it('Get One User Info', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/4460',
      headers:{
        'authorization':'Bearer '+ accessToken
      }
    }).then((res)=>{
      expect(res.status).to.eq(200)
      expect(res.body).has.property('name', 'test user9')
      expect(res.body).has.property('email','test.user9@haha.com')
      expect(res.body).has.property('gender', 'male')
    })
    
  })
  
})