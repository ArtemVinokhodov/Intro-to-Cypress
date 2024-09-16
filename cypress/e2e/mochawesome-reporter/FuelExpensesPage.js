class ExpensesPage {
    visit() {
      //cy.visit('/panel/expenses');
      cy.get('a').contains('Fuel expenses').click();
      cy.get('button').contains('Add an expense').click();
    }
  
    addFuelExpense(expenseDetails) {
        cy.get('#addExpenseMileage').click().type(expenseDetails.mileage);
        cy.get('#addExpenseLiters').type(expenseDetails.liters);
        cy.get('#addExpenseTotalCost').type(expenseDetails.totalCost);
        cy.get('.modal-footer').contains('Add').click();
    }
  }
  
  export default new ExpensesPage();
  