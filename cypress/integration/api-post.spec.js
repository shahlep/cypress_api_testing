/// <reference types="Cypress" />

//const userdata = require('../fixtures/users.json')

describe('API POST Request', () => {
    let accessToken =''
  it('API post request with json payload', () => {
      //using fixture
      cy.fixture('createuser').then((payload) =>{
            
        //1. create user (POST)
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": payload.name,
                "gender": payload.gender,
                "email": testEmail,
                "status":payload.status
            }

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email', payload.email)
            expect(res.body).has.property('name',payload.name)
            expect(res.body).has.property('status',payload.status)
            expect(res.body).has.property('gender',payload.gender)
        }).then((res) =>{
               const userId = res.body.data.id 
                cy.log("user id is: " + userId)
                //2. get user (GET)
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/'+userId,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body).has.property('id', userId)
                    expect(res.body).has.property('name',payload.name)
                    expect(res.body).has.property('status',payload.status)
                    expect(res.body).has.property('email', payload.email)
                })
        })
        
    
    })
})
})