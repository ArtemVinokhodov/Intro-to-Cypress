class HomePage {

    get signInButton() {
        return cy.get('button').contains('Sign In');
    }

    get modalContent() {
        return cy.get('.modal-content');
    }

    get emailInput() {
        return cy.get('#signinEmail');
    }

    get passwordInput() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.get('button').contains('Login');
    }

    login(email, password) {
        this.signInButton.click();
        this.modalContent.should('be.visible');
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
}

export default new HomePage();
