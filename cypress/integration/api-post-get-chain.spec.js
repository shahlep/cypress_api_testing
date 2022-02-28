/// <reference types="Cypress" />

const { method } = require("cypress/types/bluebird")
const { url, powerCapacity } = require("wd/lib/commands")

describe('API POST GET chain requset,response assertions', () => {
    let accessToken = ''
  
  //create random text - https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    let randomText = ""
    let testEmail = ""
    var pattern = "abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < 10; i++)
    randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + '@haha.com'
  
  it('POST GET Chaining fun', () => {
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers:{
            'authorization':'Bearer '+ accessToken
        },
        body:{
              "name": "test user",
              "email": testEmail,
              "gender": "male",
              "status": "active"
          }

    }).then(res=>{
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name','test user')
        expect(res.body).has.property('email',testEmail)
        expect(res.body).has.property('gender','male')
        expect(res.body).has.property('status','active')
  }).then((res)=>{
        const userId = res.body.id 
        console.log("User ID is : "+userId)

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/'+userId,
            headers:{
                authorization: 'Bearer '+ accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).has.property('name','test user')
            expect(res.body).has.property('email',testEmail)
            expect(res.body).has.property('gender','male')
            expect(res.body).has.property('status','active')
        })
  })
})
    // Request Chaining (JSON to another)
    it.only('Weather information for cities', () => {
        
        cy.request({
            method:'GET',
            url:'',
            }).then((res)=>{
                expect(res.status).to.be(200)
                const city=res.body[0].title
                return city
            }).then((city)=>{
                cy.request({
                    method:'GET',
                    url:''+city,
                    }).then((res)=>{

                    })
                })
            })
})
        

