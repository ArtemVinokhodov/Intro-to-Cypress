class FuelExpensesPage {
  get fuelExpensesLink() {
    return cy.get('button').contains('Add fuel expense');
  }

  get addExpenseButton() {
    return cy.get('.modal-title').contains('Add an expense');
  }

  get mileageInput() {
    return cy.get('#addExpenseMileage');
  }

  get litersInput() {
    return cy.get('#addExpenseLiters');
  }

  get totalCostInput() {
    return cy.get('#addExpenseTotalCost');
  }

  get addButton() {
    return cy.get('.modal-footer').contains('Add');
  }

  get expenseList() {
    return cy.get('.panel-page_content');
  }

  addFuelExpense(expenseDetails) {
    this.fuelExpensesLink.click();
    this.addExpenseButton.click();
    this.mileageInput.type(expenseDetails.mileage);
    this.litersInput.type(expenseDetails.liters);
    this.totalCostInput.type(expenseDetails.totalCost);
    this.addButton.click();
    this.expenseList.should('be.visible');
  }
}

export default new FuelExpensesPage();
