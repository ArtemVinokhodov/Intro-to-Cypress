import GaragePage from '../mochawesome-reporter/GaragePage';
import ExpensesPage from '../mochawesome-reporter/FuelExpensesPage';

describe('Test Adding Car and Fuel Expense', () => {
    before(() => {
        cy.visit('/', {
            auth: {
                username: Cypress.env('user').email,
                password: Cypress.env('user').password,
            },
        });

        cy.get('button').contains('Guest log in').click();
    });

    it.only('should add a new car and fuel expense', () => {
        const carDetails = {
            brand: 'Ford',
            model: 'Focus',
            mileage: '500'
        };
        
        GaragePage.visit();
        GaragePage.addCar(carDetails);

        const expenseDetails = {
            mileage: '10',
            liters: '50',
            totalCost: '1.20'
        };

        ExpensesPage.visit();
        ExpensesPage.addFuelExpense(expenseDetails);
    });
});