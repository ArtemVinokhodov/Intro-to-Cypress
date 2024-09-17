import GaragePage from '../../../page-object/GaragePage';
import FuelExpensesPage from '../../../page-object/FuelExpensesPage';
import HomePage from '../../../page-object/HomePage';

describe('Test Adding Car and Fuel Expense', () => {

    beforeEach(() => {
        cy.visit('/', {
            auth: {
                username: Cypress.env('user').email,
                password: Cypress.env('user').password,
            },
        });
    });

    it('should add a new car', () => {
        HomePage.login('12345asd@gmail.com', 'Aaa123aaa');

        const carDetails = {
            brand: 'Ford',
            model: 'Focus',
            mileage: '500',
        };

        GaragePage.addCar(carDetails);
        cy.get('li').contains('Ford Focus');

        cy.get('#userNavDropdown').click();
        cy.get('button').contains('Logout').click();
        
    });

    it('should add fuel expense', () => {
        HomePage.login('12345asd@gmail.com', 'Aaa123aaa');
        
        const expenseDetails = {
            mileage: '10',
            liters: '50',
            totalCost: '1.20',
        };

        FuelExpensesPage.addFuelExpense(expenseDetails);
        cy.get('.panel-page_content').should('be.visible');

        cy.get('#userNavDropdown').click();
        cy.get('button').contains('Logout').click();
    });
});
