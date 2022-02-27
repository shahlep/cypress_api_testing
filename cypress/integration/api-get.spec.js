/// <reference types="Cypress" />


describe('Get API user requsts', () => {
  let accessToken = ''
  
  //create random text - https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  let randomText = ""
  let testEmail = ""
  var pattern = "abcdefghijklmnopqrstuvwxyz"
  for (var i = 0; i < 10; i++)
  randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
  testEmail = randomText + 'haha.com'
  
  it('Get Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers:{
        'authorization':'Bearer '+ accessToken
      }
    }).then((res)=>{
      expect(res.status).to.eq(200)
      
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