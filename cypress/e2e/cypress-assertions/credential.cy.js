import { faker } from '@faker-js/faker';

export function register(email, password, name, lastName) {
    const randomName = name || faker.person.firstName();
    const randomLastName = lastName || faker.person.lastName(false);
    const randomEmail = email || faker.internet.email();
    const randomPassword = password || faker.internet.password(12, false, /[a-zA-Z0-9!@#$%^&*]/);
    const randomReEnterPassword = randomPassword;

    cy.get('header').contains('Sign In').click();
    cy.get('.modal-content').should('be.visible');

    cy.get('button').contains('Registration').click();
    cy.get('#signupName').click().focused().type(randomName);
    cy.get('#signupLastName').click().focused().type(randomLastName);
    cy.get('#signupEmail').click().focused().type(randomEmail);
    cy.get('#signupPassword').click().focused().type(randomPassword);
    cy.get('#signupRepeatPassword').click().focused().type(randomReEnterPassword);

    cy.get('button').contains('Register').click();

    return { randomEmail, randomPassword, randomName, randomLastName };
}

export function login(email, password) {

    cy.get('header').contains('Sign In').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password);
    cy.get('button').contains('Login').click();
}

export function loginOut() {
    cy.get('#userNavDropdown').click();
    cy.get('button').contains('Logout').click();
}

export function openRegistrationForm() {
    cy.get('header').contains('Sign In').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('button').contains('Registration').click();
}




