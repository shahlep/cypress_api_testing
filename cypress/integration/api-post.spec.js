/// <reference types="Cypress" />

describe('API POST Request', () => {
    let accessToken =''
  it('API post request with json payload', () => {
      cy.request({
          method: 'POST',
          url: 'https://gorest.co.in/public/v2/users',
          headers:{
              'authorization':'Bearer '+ accessToken
          },
          body:{
                "name": "test user10",
                "email": "test.user11@haha.com",
                "gender": "male",
                "status": "active"
            }

      }).then(res=>{
          expect(res.status).to.eq(201)
          expect(res.body).has.property('name','test user10')
          expect(res.body).has.property('email','test.user11@haha.com')
          expect(res.body).has.property('gender','male')
          expect(res.body).has.property('status','active')
      })
  })  
})