/// <reference types="Cypress" />

describe('API POST PUT chain requset,response assertions', () => {
    let accessToken = ''
  
  //create random text - https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    let randomText = ""
    let testEmail = ""
    var pattern = "abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < 10; i++)
    randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + '@haha.com'
  
  it('POST PUT Chaining fun', () => {
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers:{
            'authorization':'Bearer '+ accessToken
        },
        body:{
              "name": "test user40",
              "email": testEmail,
              "gender": "male",
              "status": "active"
          }

    }).then(res=>{
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name','test user40')
        expect(res.body).has.property('email',testEmail)
        expect(res.body).has.property('gender','male')
        expect(res.body).has.property('status','active')
  }).then((res)=>{
        const userId = res.body.id 
        console.log("User ID is : "+userId)

        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/'+userId,
            headers:{
                authorization: 'Bearer '+ accessToken
            },
            body:{
                "name": "test user50",
                //"email": testEmail,
                //"gender": "male",
                "status": "inactive"
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).has.property('name','test user50')
            expect(res.body).has.property('email',testEmail)
            expect(res.body).has.property('gender','male')
            expect(res.body).has.property('status','inactive')
        })
  })
})
})
        

