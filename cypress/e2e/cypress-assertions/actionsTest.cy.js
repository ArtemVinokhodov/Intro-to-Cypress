
import { register, login, loginOut, openRegistrationForm } from '../cypress-assertions/credential.cy.js';


describe('Cypress actions', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    });


    it('Check default Login/Logout on modal form', () => {
        const { randomEmail, randomPassword } = register();
        loginOut();
        login(randomEmail, randomPassword);
        loginOut();
    });


    it('Check Empty fields', () => {
        openRegistrationForm();
        cy.get('#signupName').click().focused().blur();
        cy.get('.invalid-feedback').should('contain', 'Name required');

        cy.get('#signupLastName').click().focused().blur();
        cy.get('.invalid-feedback').should('contain', 'Last name required');

        cy.get('#signupEmail').click().focused().blur();
        cy.get('.invalid-feedback').should('contain', 'Email required');

        cy.get('#signupPassword').click().focused().blur();
        cy.get('.invalid-feedback').should('contain', 'Password required');

        cy.get('#signupRepeatPassword').click().focused().blur();
        cy.get('.invalid-feedback').should('contain', 'Re-enter password required');
    });

    it('Check Wrong data', () => {
        openRegistrationForm();
        cy.get('#signupName').click().focused().type('12345').blur();
        cy.get('.invalid-feedback').should('contain', 'Name is invalid');

        cy.get('#signupLastName').click().focused().type('12345').blur();
        cy.get('.invalid-feedback').should('contain', 'Last name is invalid');

        cy.get('#signupEmail').click().focused().type('12345').blur();
        cy.get('.invalid-feedback').should('contain', 'Email is incorrect');

        cy.get('#signupPassword').click().focused().type('12345').blur();
        cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

        cy.get('#signupRepeatPassword').click().focused().type('12345').blur();
        cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('Check Wrong length ', () => {
        openRegistrationForm();
        cy.get('#signupName').click().focused().type('1').blur();
        cy.get('.invalid-feedback').should('contain', 'Name has to be from 2 to 20 characters long');

        cy.get('#signupLastName').click().focused().type('1').blur();
        cy.get('.invalid-feedback').should('contain', 'Last name has to be from 2 to 20 characters long');
    });

    it('Check Border color red', () => {
        openRegistrationForm();
        cy.get('#signupName').click().focused().type('12345').blur();
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('#signupLastName').click().focused().type('12345').blur();
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('#signupEmail').click().focused().type('12345').blur();
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('#signupPassword').click().focused().type('12345').blur();
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('#signupRepeatPassword').click().focused().type('12345').blur();
        cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');;
    });
})