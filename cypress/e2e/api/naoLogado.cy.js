describe('API - Profile', () => {
    let urlPerfis = '/pet/findByStatus?status=pending'

    // GET com 200 status code (teste positivo)
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

    //GET com uma 404 status code (teste negativo)
    context('perfil específico', () => {
        it('seleciona um usuario invalido', () => {
            cy.request({
                method: 'GET',
                url: '/user/username',
                failOnStatusCode: false,
            }).then(({ status, body }) => {
                expect(status).to.eq(404)
                expect(body.message).to.eq('User not found')
            })
        })

        it('valida um usuário válido', () => {
            let usuarioId = '2'

            cy.request({
                method: 'GET',
                url: `/pet/${usuarioId}`
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.category.name).to.eq('string')
            })
        })

        it('valida um usuário valido buscando na base', () => {   

            cy.request({
                method: 'GET',
                url: urlPerfis
            }).then(({ body }) => {

                cy.request({
                    method: 'GET',
                    url: `${urlPerfis}/${body[1].category.id}`
                }).then(({ status, body }) => {
                    expect(status).to.eq(200)
                    expect(body)
                })
            })
        })
    })
})