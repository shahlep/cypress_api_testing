/// <reference types="Cypress" />

describe('GET request chaining', () => {
    it('Weather information for cities', () => {
        
        cy.request({
            method:'GET',
            url:'https://www.metaweather.com/api/location/search/?query=lon',
            }).then((res)=>{
                expect(res.status).to.eq(200)
                const city=res.body[0].title
                return city
            }).then((city)=>{
                cy.request({
                    method:'GET',
                    url:'https://www.metaweather.com/api/location/search/?query='+city,
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body[0]).has.property('title','London')

                    })
                })
    })
})