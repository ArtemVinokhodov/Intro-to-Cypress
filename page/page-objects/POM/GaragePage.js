class GaragePage {
    get addCarButton() {
        return cy.get('button').contains('Add car');
    }

    get carBrandSelect() {
        return cy.get('#addCarBrand');
    }

    get carModelSelect() {
        return cy.get('#addCarModel');
    }

    get carMileageInput() {
        return cy.get('#addCarMileage');
    }

    get addButton() {
        return cy.get('.modal-footer').contains('Add');
    }

    get carList() {
        return cy.get('.car-group');
    }

    addCar(carDetails) {
        this.addCarButton.click();
        this.carBrandSelect.select(carDetails.brand);
        this.carModelSelect.select(carDetails.model);
        this.carMileageInput.type(carDetails.mileage);
        this.addButton.click();
        this.carList.should('be.visible').contains(carDetails.model);
    }
}

export default new GaragePage();