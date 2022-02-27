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
                "name": "test user1",
                "email": "test.user1@haha.com",
                "gender": "male",
                "status": "active"
            }

      }).then(res=>{
          expect(res.status).to.eq(201)
          expect(res.body.data).has.property('name','test user1')
          expect(res.body.data).has.property('email','test.user1@haha.com')
          expect(res.body.data).has.property('gender','male')
          expect(res.body.data).has.property('status','active')
      })
  })  
})