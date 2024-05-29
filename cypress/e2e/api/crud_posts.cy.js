describe('CRUD - Post', () => {

    before(() => {

        cy.request({
            method: 'POST',
            url: '/store/order',
            body: {
                id: 7878787878807,
                petId: 0,
                quantity: 0,
                shipDate: '2023-11-27T01:54:59.208+0000',
                status: 'placed',
                complete: true
            }
        })
    })

    it('teste', () => {

        cy.log('teste')
    })
})