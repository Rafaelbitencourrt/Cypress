/// <reference types="Cypress" />


describe('Alerts', function(){
    it('Test Ckeckbox', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //validação em tabela

        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{


            const text = $el.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }

        })

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('includes','top')

    })

    
})