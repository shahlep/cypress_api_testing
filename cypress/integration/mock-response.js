describe('Mocking API response', () => {
  
    it('Intercept api response', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        //https://docs.cypress.io/api/commands/intercept#Syntax
        cy.intercept({
            method:'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        },
        {
            statusCode: 200,
            body: [
                {
                    "userId": 1,
                    "id": 7,
                    "title": "magnam facilis autem",
                    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
                }
            ]
        }).as('post7')
        cy.contains('/posts').click()
        //cy.wait(5000)
        cy.wait('@post7')
    })
})