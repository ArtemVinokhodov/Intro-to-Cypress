export function login(email, password) {
    cy.get('button').contains('Sign In').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password);
    cy.get('button').contains('Login').click();
}