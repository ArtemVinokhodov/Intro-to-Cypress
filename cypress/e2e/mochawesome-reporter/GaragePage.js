class GaragePage {
    visit() {
        cy.get('button').contains('Add car').click();
    }

    addCar(carDetails) {
        cy.get('#addCarBrand').select(carDetails.brand);
        cy.get('#addCarModel').select(carDetails.model);
        cy.get('#addCarMileage').type(carDetails.mileage);
        cy.get('.modal-footer').contains('Add').click();
    }
}

export default new GaragePage();