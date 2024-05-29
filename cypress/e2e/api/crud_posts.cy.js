describe('CRUD - Post', () => {

    let postID = ''
    let msg = 'Este post foi feito pelo Cypress'

    before(() => {

        cy.request({
            method: 'POST',
            url: '/store/order',
            body: {
                id: Cypress.env('id'),
                petId: Cypress.env('petId'),
                quantity: 0,
                shipDate: '2023-11-27T01:54:59.208+0000',
                status: 'placed',
                complete: true
            }
        })
    })

    //SOMENTE UM EXEMPLO de JWT - cookies
    it('cria um post', () => {

        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: 'Este post foi feito pelo Cypress'
            }
        }).then (( { body} ) => {
            expect(status).to.eq(201)
        })
    })

    //EXEMPLO do método POST
    it('atualiza o post', () => {
        
        cy.request ({
            method: 'PUT',
            url: `/api/posts/like/${postID}`
        }).then (({ status }) => {
            expect(status).to.eq(200)
        })
    })

    it('deleta o post', () => {
        
        cy.request({
            method: 'DELETE',
            url: `/api/posts/${postID}`
        }).then(({ status }) => {
            expect(status).to.eq(200)
            expect(body.msg).to.eq('Post Removido')
        })
    })
})