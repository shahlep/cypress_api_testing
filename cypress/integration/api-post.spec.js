/// <reference types="Cypress" />

const userdata = require('../fixtures/users.json')

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
                "name": userdata.name,
                "email": userdata.email,
                "gender": userdata.gender,
                "status": userdata.status
            }

      }).then(res=>{
          expect(res.status).to.eq(201)
          expect(res.body).has.property('name',userdata.name)
          expect(res.body).has.property('email',userdata.email)
          expect(res.body).has.property('gender',userdata.gender)
          expect(res.body).has.property('status',userdata.status)
      })
  })  
})