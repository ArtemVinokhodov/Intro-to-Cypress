import GaragePage from '../../../page/page-objects/POM/GaragePage';
import FuelExpensesPage from '../../../page/page-objects/POM/FuelExpensesPage';
import { login } from '../../../page/page-objects/POM/login';

describe('Test Adding Car', () => {

    beforeEach(() => {
        cy.visit('/', {
            auth: {
                username: Cypress.env('user').email,
                password: Cypress.env('user').password,
            },
        });
    });

    it('should add a new car', () => {
        login('12345asd@gmail.com', 'Aaa123aaa');
        const carDetails = {
            brand: 'Ford',
            model: 'Focus',
            mileage: '500'
        };

        GaragePage.addCar(carDetails);
        cy.get('#userNavDropdown').click();
        cy.get('button').contains('Logout').click();
    });


    it('should add fuel expense', () => {
        login('12345asd@gmail.com', 'Aaa123aaa');
        const expenseDetails = {
            mileage: '10',
            liters: '50',
            totalCost: '1.20'
        };

        FuelExpensesPage.addFuelExpense(expenseDetails);
        cy.get('#userNavDropdown').click();
        cy.get('button').contains('Logout').click();
    });
});