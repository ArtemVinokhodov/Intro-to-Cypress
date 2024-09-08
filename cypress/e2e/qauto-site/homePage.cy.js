
describe('Cypress queries', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Check headers buttons', () => {
        cy.get('header').should('be.visible');
        cy.get('button').contains('About').click();
        cy.contains('button', 'Contacts');
    })

    it('Social media buttons in website body', () => {
        cy.get('.contacts_socials > a').should('exist');
        cy.get('.contacts_socials').last().click();
    })

    it('Should find all buttons in the footer', () => {
        cy.get('footer').contains('© 2021 Hillel IT school');
    })

    it('Check website body has two images', () => {
        cy.get('#aboutSection').find('img').should('have.length', 2);
    })

    it('Invoke', () => {
        cy.get('iframe').invoke('hide');
    })

    it('Check modal window form', () => {
        cy.get('header').contains('Sign In').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('.modal-content').children();
        cy.get('#signinEmail').click().focused();
        cy.get('#signinEmail').type('12345@e.com{enter}');
        cy.get('.modal-title').contains('Restore access');
        cy.get('button').contains('Send').should('be.visible').should('be.disabled');
    })
})
