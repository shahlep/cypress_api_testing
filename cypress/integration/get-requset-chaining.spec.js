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
                        expect(res.body[0]).has.property('title',city)

                    })
                })
    })

    // all 

    it('Weather information for all cities', () => {
        
        cy.request({
            method:'GET',
            url:'https://www.metaweather.com/api/location/search/?query=na',
            }).then((res)=>{
                expect(res.status).to.eq(200)
                const location=res.body
                return location
            }).then((location)=>{

                // using for loop to go through all cities 
                for (let i=0; i<location.length; i++)
                {
                cy.request({
                    method:'GET',
                    url:'https://www.metaweather.com/api/location/search/?query='+location[i].title
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body[0]).has.property('title',location[i].title)

                    })
                }
                })
    })
})