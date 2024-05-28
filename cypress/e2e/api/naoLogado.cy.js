describe('API - Profile', () => {
    let urlPerfis = '/pet/findByStatus?status=pending'

    context('todos os perfis', () => {
        
        it('valida a API de perfis', () => {
            cy.request({
                method: 'GET',
                url: urlPerfis
            }).then(({ status, duration, body, headers }) => {
                expect(status).to.eq(200)
                expect(duration).to.be.lessThan(10000)
                expect(body[0].name).to.eq('doggie')
                expect(body[0].tags[0].id).to.eq(-60077591)
                expect(body[0].tags).to.have.lengthOf(2)
                expect(body[0].id).to.not.be.null
                expect(headers['content-type']).to.eq('application/json')
            })
        })
    })
})