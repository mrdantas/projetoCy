describe('API - Profile', () => {
    context('todos os perfis', () => {
        it('valida a API de perfis', () => {
            
            cy.log('teste de texto')
            cy.request({
                method: 'GET',
                url: '/api/profile'
            }).then(respostaApi => {
                expect(respostaApi.status).to.eq(200)
                expect(respostaApi.duration).to.be.lessThan(2000)
            })
        })
    })
})